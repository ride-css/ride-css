module.exports = function (grunt) {
  var packageJSON = grunt.file.readJSON('package.json')
    , buildDest = '../';
    
  grunt.initConfig({
    clean: {
      build: ['coffee/compiled', 'jade/compiled', 'stylus/compiled']
    },
    coffee: {
      build: {
        cwd: 'coffee/',
        dest: 'coffee/compiled/',
        expand: true,
        ext: '.js',
        src: '**.coffee'
      }
    },
    copy: {
      build: {
        files: [
          {cwd: 'jade/compiled/', src: ['**'], dest: buildDest, expand: true},
          {cwd: 'stylus/compiled/', src: ['**'], dest: buildDest, expand: true},
          {cwd: 'static-files/', src: ['**'], dest: buildDest, expand: true},
          {cwd: 'coffee/compiled/', src: ['**'], dest: buildDest+ 'js/', expand: true}
        ]
      }
    },
    jade: {
      build: {
        options: {
          basedir: __dirname,
          pretty: true
        },
        cwd: 'jade/',
        dest: 'jade/compiled/',
        expand: true,
        ext: '.html',
        src: '**.jade'
      }
    },
    stylus: {
      build: {
        options: {
          compress: false,
          use: [require('ride-css')]
        },
        files: {
          'stylus/compiled/style.css': 'stylus/style.styl'
        }
      }
    },
    zip: {
      dropbox: {
        cwd: './',
        dest: 'versions/'+ packageJSON.version + '.zip',
        expand: true,
        src: [
          'coffee/**.*',
          'jade/**.*',
          'stylus/**.*',
          'Gruntfile.js',
          'package.json'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-zip');
  
  grunt.registerTask('default', 'dont use it blahblahblah', function () {
    grunt.log.writeln('I told you not to use it. :P');
  });

  grunt.registerTask('dropbox', 'Store in dropbox', function () {
    grunt.log.writeln('Backup started');
    grunt.task.run('zip:dropbox', 'copy:dropbox')
  });

  grunt.registerTask('build', 'Build everything', function () {
    grunt.log.writeln('Building');
    grunt.task.run('coffee:build', 'jade:build', 'stylus:build', 'copy:build', 'clean:build');
  });

  grunt.registerTask('up-version-major', 'Version goes up', function () {
    var pkg = grunt.file.readJSON('package.json')
      , version = pkg.version.split('.')
      , newVersion = parseInt(version[0]) + 1;

    grunt.log.writeln('Changing version');
    grunt.task.run('zip:dropbox');
    pkg.version = newVersion +'.0.0'
    grunt.file.write('package.json', JSON.stringify(pkg, true, 2));
  });

  grunt.registerTask('up-version-minor', 'Version goes up', function () {
    var pkg = grunt.file.readJSON('package.json')
      , version = pkg.version.split('.')
      , newVersion = parseInt(version[1]) + 1;

    grunt.log.writeln('Changing version');
    grunt.task.run('zip:dropbox');
    if (newVersion > 99) {
      grunt.task.run('up-version-major');
      return;
    }
    pkg.version = version[0] +'.'+ newVersion + '.0'
    grunt.file.write('package.json', JSON.stringify(pkg, true, 2));
  });

  grunt.registerTask('up-version-patch', 'Version goes up', function () {
    var pkg = grunt.file.readJSON('package.json')
      , version = pkg.version.split('.')
      , newVersion = parseInt(version[2]) + 1;

    grunt.log.writeln('Changing version');
    grunt.task.run('zip:dropbox');
    if (newVersion > 99) {
      grunt.task.run('up-version-minor');
      return;
    }
    pkg.version = version[0] +'.'+ version[1] + '.' + newVersion
    grunt.file.write('package.json', JSON.stringify(pkg, true, 2));
  });
}