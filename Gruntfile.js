module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    run: {
      options: {
        // ...
      },
      npm_build: {
        cmd: 'npm',
        args: [
          'start',
        ]
      }
    }
  });

  grunt.registerTask('default', [ 'run:npm_build' ]);

};