/*global module*/
module.exports = function(grunt) {
	'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [ 
          '**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'assets/scripts/*.js',
          'Gruntfile.js',
          'specs/*Spec.js'
        ],
        tasks: ['jshint', 'jasmine']
      }
    },
    sass: {
    	dist: {
    		files: {
    			'assets/styles/style.css': '**/sass/style.scss',
          'assets/styles/iestyle.css': '**/sass/iestyle.scss'
    		}
    	}
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'assets/scripts/*.js']
    },
    jasmine: {
    	src: 'assets/scripts/*.js',
    		options: {
    			specs: 'specs/*.js',
          vendor: 'assets/uploads/*.js'
    		} 
    } 
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};