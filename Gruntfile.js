module.exports = function(grunt) {

  // Config
  grunt.initConfig({

    concat: {
      main: {
        src: ['js/*'],
        dest: 'dest/yum.js'
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['bower_components/**'],
            dest: 'dest'
          }
        ]
      }
    },

    replace: {
      main: {
        options: {
          patterns: [
            {
              match: /<!-- dev_mode[\w\W]* dev_mode -->/,
              replacement: '<script src="yum.js"></script>'
            }
          ],
          force: true
        },
        files: [
          {
            src: ['index.html'],
            dest: 'dest/'
          }
        ]
      }
    }

  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');

  // Tasks
  grunt.registerTask('default', ['concat', 'copy', 'replace']);

};
