var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat");

gulp.task("js", function () {
  return gulp
    .src([
      "./static/js/jquery.js",
      "./static/js/popper.min.js",
      "./static/js/bootstrap.min.js",
      "./static/js/jquery-ui.js",
      "./static/js/jquery.fancybox.js",
      "./static/js/swiper.js",
      "./static/js/owl.js",
      "./static/js/appear.js",
      "./static/js/wow.js",
      "./static/js/parallax.min.js",
      "./static/js/custom-script.js",
    ])
    .pipe(uglify())
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("static/js"));
});
