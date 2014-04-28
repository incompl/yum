module.exports = function(grunt) {

  // Config
  grunt.initConfig({

    concat: {
      dist: {
        src: ['js/MainMenu.js',
              'js/app.js'],
        dest: 'dest/yum.js'
      }
    },

    copy: {
      main: {
        files: [
          {
            src: ['index.html'],
            dest: 'dest/index.html'
          },
          {
            expand: true,
            src: ['bower_components/**'],
            dest: 'dest'
          }
        ]
      }
    }

  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tasks
  grunt.registerTask('default', ['concat', 'copy']);

};
