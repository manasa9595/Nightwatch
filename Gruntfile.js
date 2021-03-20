/*!
 * RBS - DMP Project
 * http://www.natwest.com
 * http://www.rbs.co.uk
 * @author Balu
 */
 /*jslint node: true */
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'expanded',
                    
                    
                }
            }
        },
        watch: {
            source: {
                files: '**/*.scss',
                tasks: ['compass', 'jshint']
            }
        },
        jshint: {
            foo: {
                //check all files under designs/dmp for any errors
              src: ['dmp-view/src/main/content/jcr_root/etc/designs/dmp/**/*.js', 'Gruntfile.js']
            },
        }
    });    
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-compass-multiple');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default',['jshint','compassMultiple','watch']);
};