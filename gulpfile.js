const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("data"))
        .pipe(connect.reload());

    done();
});

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("data/css"))
        .pipe(connect.reload());

    done();
});

gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("data/js"))
        .pipe(connect.reload());

    done();
});

gulp.task("img", done => {
    gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest("data/img"));
    done();
})

gulp.task("server", done => {
    connect.server({
        root: "data",
        livereload: true
    })

    done();
});

gulp.task("build", gulp.series("html", "sass","img","js"));

gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"))
    gulp.watch("img/*.{jpg,png,gif}",gulp.series("img"));
    gulp.watch("js/*.js",gulp.series("js"));

    done();
});

gulp.task("default", gulp.series("build", "server", "watch"));