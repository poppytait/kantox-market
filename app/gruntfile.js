const sass = require('node-sass');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
    sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'styles/style.css': 'styles/style.scss'
            }
        }
    }
});

grunt.registerTask('default', ['sass']);