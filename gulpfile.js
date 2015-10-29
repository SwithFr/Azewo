"use strict";

var gulp = require( "gulp" );
var browserSync = require( "browser-sync" ).create();
var sass = require( "gulp-sass" );
var jade = require( "gulp-jade" );

gulp.task( "serve", [ "sass" ], function() {
    browserSync.init( {
        "server": "./dist"
    } );

    gulp.watch( "./src/sass/imports/*", [ "sass" ] );
    gulp.watch( "./src/sass/*", [ "sass" ] );
    gulp.watch( "./src/pages/*", [ "jade" ] );
} );

gulp.task( "sass", function() {
    return gulp.src( "./src/sass/*" )
        .pipe( sass() )
        .pipe( gulp.dest( "./dist/css" ) )
        .pipe( browserSync.stream( ) );
} );

gulp.task( "jade", function() {
    return gulp.src( "./src/pages/*" )
        .pipe( jade() )
        .pipe( gulp.dest( "./dist" ) )
        .pipe( browserSync.stream( ) );
} );

gulp.task( "default", [ "serve" ] );
