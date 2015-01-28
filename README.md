![](https://d13yacurqjgara.cloudfront.net/users/505610/screenshots/1892404/ridecss.jpg)

Ride, Why walk when you can Ride?
=====================================

[Ride online docs](https://ride-css.github.io/)

Ride is a Stylus mixins library for a faster css development.

##1 - Installing Ride css

There are mainly three ways to install and use it.

Remember that ride-css **requires** [node.js](http://nodejs.org/ "Click here to go to node.js website") installed

###Installing ride-css and more useful stuff using [ride-cli](http://github.com/ride-css/ride-cli/ "Ride-cli github repository")

> ```
    npm install -g ride-cli
  ```

> Then
  ```
    cd to-a-folder
  ```

> Type this in your terminal
  ```
    ridecss init my-project
  ```

> Code awesome stuff, and after you have done, build your sources:
  ```
    grunt build
  ```

###Setting ride-css as a dependency for grunt and loading it into a stylus task

> Add those lines to your **package.json** (into your *dependencies* or *devDependencies* object)
  ```
    "grunt-contrib-stylus": "0.x",
    "ride-css": "0.x"
  ```

> Type ```npm install``` in your terminal

> Then create a task for **grunt-contrib-stylus** and ```@require 'ride-css'``` at the top of your main file

###Installing ride-css from zip

> [Download Ride css](https://github.com/ride-css/ride-css/archive/master.zip) and extract into a folder

> CD to the folder containing your extracted download and type ```npm install```

> Add ```@require 'ride-css'``` in your buildable "*.styl" file, try to build and you have done.

###Installing ride-css from git (requires git installed)

> Type ```git clone https://github.com/ride-css/ride-css``` into your terminal

> Add ```@require 'ride-css'``` in your buildable "*.styl" file, try to build and you have done.



##2 - your first awesome buildable file

###Including ride-css in your .styl file

*assuming you have installed ride-css following the first or the second step*

```
@require 'ride-css'
// write your wonderful code here
```

###Example setup (try to copy&paste&build)
```
@require 'ride-css'

$font-size = 14px
$line-height = 21.5px
$margin = 14px

$grid-cols = 12
$grid-gutter = 1
$grid-padding = $line-height 

&
  // this will setup a css normalization and a box-sizing reset
  reset-type: 'normalize all'
  ride-body: $font-size, $line-height
  // this will be your grid
  ride-grid: $grid-cols, $grid-gutter, $grid-padding
  // typography
  ride-typography: $font-size, $line-height, $margin

// a breakpoint for small displays
+breakpoint(320px, 540px)
  ride-grid($grid-cols, $grid-gutter, $grid-padding, {
    column: 'col-sm-',
    floatleft: 'float-left-sm-',  
    floatright: 'float-right-sm-'  
  })
// a breakpoint for medium-small displays (tablets?)
+breakpoint(540px, 780px)
  ride-grid($grid-cols, $grid-gutter, $grid-padding, {
    column: 'col-md-',
    floatleft: 'float-left-md-',  
    floatright: 'float-right-md-'  
  })
// a breakpoint for medium displays (old pcs and larger tablets)
+breakpoint(780px, 1280px)
  ride-grid($grid-cols, $grid-gutter, $grid-padding, {
    column: 'col-lg-',
    floatleft: 'float-left-lg-',  
    floatright: 'float-right-lg-'  
  })

// wow, this will render to about 790 lines of code! You now have four grids for four different resolutions.
```



##3 - contributing

###You could be really helpful

[How to contribute](https://github.com/ride-css/ride-css/blob/master/contributing.md)

* Giving ride-css and stylus a star (on github and/or on npm)
* Telling other people about this library
* Improving the documentation
* Forking this repository
* Sending pull request (only on the **dev branch** for bugfixing or new features)
* Asking questions and or about new features
* Reporting any bug

###Contributors

* author/developer: [OctoD](https://github.com/OctoD/)
* tester/designer: [naya85](https://github.com/naya85/)
* tester: [iamdex](https://github.com/iamdex)
* tester: [iwasmisery](https://github.com/iwasmisery/)