'use strict';

// This is the default port that livereload listens on;
// change it if you configure livereload to use another port.
var LIVERELOAD_PORT = 35729;
// lrSnippet is just a function.
// It's a piece of Connect middleware that injects
// a script into the static served html.
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
// All the middleware necessary to serve static files.
var livereloadMiddleware = function (connect, options) {
  return [
    // Inject a livereloading script into static files.
    lrSnippet,
    // Serve static files.
    connect.static(options.base),
    // Make empty directories browsable.
    connect.directory(options.base)
  ];
};

//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {




  // All upfront config goes in a massive nested object.
  grunt.initConfig({

    // The connect task is used to serve static files with a local server.
    connect: {
      client: {
        options: {
          // The server's port, and the folder to serve from:
          // Ex: 'localhost:9000' would serve up 'client/index.html'
          port: 9000,
          base:'client',
          // Custom middleware for the HTTP server:
          // The injected JavaScript reloads the page.
          middleware: livereloadMiddleware
        }
      }
    },
    // The watch task is used to run tasks in response to file changes
    watch: {
      client: {
        // '**' is used to include all subdirectories
        // and subdirectories of subdirectories, and so on, recursively.
        files: ['client/**/*'],
        // In our case, we don't configure any additional tasks,
        // since livereload is built into the watch task,
        // and since the browser refresh is handled by the snippet.
        // Any other tasks to run (e.g. compile CoffeeScript) go here:
        tasks:[],
        options: {
          livereload:LIVERELOAD_PORT
        }
      }
    },

    // You can set arbitrary key-value pairs.
    distFolder: 'dist',
    // You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('package.json'),
    // Grunt tasks are associated with specific properties.
    // these names generally match their npm package name.
    concat: {
      // Specify some options, usually specific to each plugin.
      options: {
        // Specifies string to be inserted between concatenated files.
        separator: ';'
      },
      // 'dist' is what is called a "target."
      // It's a way of specifying different sub-tasks or modes.
      dist: {
        // The files to concatenate:
        // Notice the wildcard, which is automatically expanded.
        src: ['scripts/*.js'],
        // The destination file:
        // Notice the angle-bracketed ERB-like templating,
        // which allows you to reference other properties.
        // This is equivalent to 'dist/main.js'.
        dest: '<%= distFolder %>/main.js'
        // You can reference any grunt config property you want.
        // Ex: '<%= concat.options.separator %>' instead of ';'
      }
    }
  }); // The end of grunt.initConfig

  // We've set up each task's configuration.
  // Now actually load the tasks.
  // This will do a lookup similar to node's require() function.
  // grunt.loadNpmTasks('connect-livereload');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register our own custom task alias.
  grunt.registerTask('build', ['concat']);
  grunt.registerTask('preview', ['connect:client','watch:client']);  
};