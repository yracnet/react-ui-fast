var gulp = require("gulp");
var ts = require("gulp-typescript");
var del = require("del");
//var tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", function(cb) {
  return del(["dist/**/*", "build/**/*"], cb);
});
gulp.task("compile", function() {
  //return tsProject
  //  .src("src/index.tsx")
  //  .pipe(tsProject())
  //  .js.pipe(gulp.dest("dist"));
  return gulp
    .src(["src/**/*.tsx", "!src/index.tsx", "!src/app/**"])
    .pipe(
      ts({
        sourceMap: true,
        //noImplicitAny: false,
        module: "commonjs",
        target: "es6",
        lib: ["es2015", "es2017", "dom"],
        removeComments: true,
        //allowSyntheticDefaultImports: false,
        jsx: "react",
        //moduleResolution: "node",
        declaration: true,
        strict: true,
        esModuleInterop: true
      })
    )
    .pipe(gulp.dest("dist"));
});
gulp.task("copy", function() {
  return gulp.src(["src/**/*.scss", "src/**/*.css"]).pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("clean", "copy", "compile"));
