# grunt-sg

> Grunt plugin to generate KSS style documentation

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sg --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sg');
```

## The "sg" task

### Overview
In your project's Gruntfile, add a section named `sg` to the data object passed into `grunt.initConfig()`.

```coffeescript
    sg:
    default_options:
      options:
        css:  'sass dir'
				data: '.yml file dir'
        html: 'partial dir'
        dest: 'target dir'
```

### Required Options
* CSS
* HTML
* Dest

### Optional Options
* Data
The data option specifies the location of YAML files to load in datasets into the style guide. Handlebars files are then required instead of HTML files in the HTML dir.

## Release History
_(Nothing yet)_
