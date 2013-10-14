/*
 * grunt-sg
 * https://github.com/rob/grunt-sg
 *
 * Copyright (c) 2013 Rob Tarr
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  Styleguide = require('styleguide').Styleguide;
  path = require('path');

  grunt.registerMultiTask('sg', 'Generate styleguide files.', function() {

    console.log(path.resolve(this.options().css));

    options = {
      css: path.resolve(this.options().css),
      html: path.resolve(this.options().html),
      dest: path.resolve(this.options().dest),
      js: this.options().js || "";
      logo: this.options().logo || "";
      syntax: this.options().syntax || "github";
    };

    if(this.options().data) {
      options.data = path.resolve(this.options().data);
    } else {
      options.data = false;
    }

    sg = new Styleguide(options);

    sg.generate();
  });

};
