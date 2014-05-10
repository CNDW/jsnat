/*global module*/
module.exports = function(grunt) {

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
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    sass: {
    	dist: {
    		files: {
    			'assets/styles/style.css': '**/sass/style.scss'
    		}
    	}
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'assets/scripts/*.js']
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
};