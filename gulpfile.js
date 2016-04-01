var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');
var babelify = require('babelify');



gulp.task('watch',function(){
  var start = Date.now();
  var watchJS = watchify(browserify({
        entries:'./src/main.js',
        transform:babelify,
        debug:true,
        cache: {}, packageCache: {}, fullPaths: true
  })
  );
  return watchJS.on('update',function(){
    watchJS.bundle()
    .on('error', function(err) { console.log('Error updating bundle'); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/build'));
    console.log('updated at ' + (Date.now() - start) + ' ms ago');
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./client/build'));

});


gulp.task('build',function(){
  return browserify({
    entries:'./src/main.js',
    transform:babelify,
    debug:true
  }).bundle()
  .on('error',function(err){
    console.log(err)
    console.log(err.message)
  })
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./client/build'));
});


gulp.task('server',function(){
  nodemon({
    script:'./server/server.js',
    ext:'html js',
    ignore: ['client']
  });
});


gulp.task('default',
  ['server','build','watch']);
