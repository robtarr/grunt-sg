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
        project_css: 'name of css file for project'
        syntax: 'theme name'
        logo: 'logo file'
        js: 'js file or array of js files'
```

### Required Options
* CSS
* HTML
* Dest
* Project CSS

### Optional Options
* JS
    * optional js that runs in styleguide
* Logo
    * logo file for project
* Syntax Theme
    * Syntax theme for code snippets in styleguide, [see options here](http://softwaremaniacs.org/media/soft/highlight/test.html)
* Data
    * The data option specifies the location of YAML files to load in datasets into the style guide. Handlebars files are then required instead of HTML files in the HTML dir.

## Release History
_(Nothing yet)_
