var gulp= require('gulp');
var markdown = require('gulp-markdown');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');

/**
 * Variable de entorno.
 * En la terminal se puede definir de manera opcional el puerto para cualquiera
 * de las tareas watch, un ejemplo de uso sería:
 * PORT=8080 gulp watch:all
 */
 var PORT = process.env.PORT || 7070;

gulp.task('markdown', function() {
    return gulp.src('**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});
/**
 * 
 * Compila los archivos sass hijos directos de la carpeta `scss/`.
 * Agrega los prefijos propietarios de los navegadores.
 * Los archivos CSS generados se guardan en la carpeta `css/`.
 */

gulp.task('sass', function () {
  var processors = [
    autoprefixer({ browsers: ['last 2 versions'] })
  ];

  return gulp.src('./taller/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./taller/css'))
    .pipe(connect.reload());
});



/**
 * Recarga el HTML en el navegador.
 */
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});


/**
 * Crea un servidor local livereload
 * http://localhost:7070
 */
gulp.task('connect', function() {
  connect.server({
    // root: '.',
    port: PORT,
    livereload: true
  });
})

/**
 * Ejecuta la tarea markdown
 */
gulp.task('watch:markdown', ['markdown'], function () {
  gulp.watch('**/*.md', ['markdown']);
});

/**
 * Ejecuta las tareas connect y sass, queda escuchando los cambios de todos
 * los archivos Sass de la carpeta `scss/` y subcarpetas.
 */
gulp.task('watch:sass', ['connect', 'sass'], function () {
  gulp.watch('./taller/scss/**/*.scss', ['sass']); 
});

/**
 * Ejecuta las tareas connect y html, queda escuchando los cambios de todos
 * los archivos HTML de la carpeta raíz del proyecto.
 * Creado para quienes no usen Jade.
 */
gulp.task('watch:html', ['connect', 'html'], function () {
  gulp.watch('./taller/*.html', ['html']);
});

/**
 * Ejecuta las tareas html, markdown,connect
 */
gulp.task('watch:all', ['watch:html', 'watch:markdown','watch:sass']);


/**
 * Ejecuta la tarea watch:makdown , watch:html watch:sass
 */
gulp.task('default', ['watch:html','watch:markdown','watch:sass']);