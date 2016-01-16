var gulp= require('gulp');
var markdown = require('gulp-markdown');
var connect = require('gulp-connect');

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
 * Recarga el HTML en el navegador.
 * Creado para quienes no usen Jade.
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
 * Ejecuta las tareas connect y html, queda escuchando los cambios de todos
 * los archivos HTML de la carpeta raíz del proyecto.
 * Creado para quienes no usen Jade.
 */
gulp.task('watch:html', ['connect', 'html'], function () {
  gulp.watch('./*.html', ['html']);
});

/**
 * Ejecuta las tareas html, markdown,connect
 */
gulp.task('watch:all', ['watch:html', 'watch:markdown']);


/**
 * Ejecuta la tarea watch:makdown y watch:html
 */
gulp.task('default', ['watch:html','watch:markdown']);