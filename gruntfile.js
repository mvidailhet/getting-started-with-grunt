module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'js/index.js',
				dest: 'js/index.min.js'
			}
		},
		watch: {
			scripts: {
				files: ['js/index.js'],
				tasks: ['uglify']
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default tasks.
	grunt.registerTask('default', ['uglify']);
};
