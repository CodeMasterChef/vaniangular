 var gulp = require('gulp');
 var gls = require('gulp-live-server');

  gulp.task('serve', function() {
	  
	var server = gls.static('client', 8888);
  server.start();
 
 gulp.watch(['client/*.css', 'client/*.html'], function (file) {
		server.start.bind(server)();
        server.notify.bind(server)(file);
  });
  
});
