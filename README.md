![](https://d13yacurqjgara.cloudfront.net/users/505610/screenshots/1892404/ridecss.jpg)

Ride css, Why walk when you can Ride?
=====================================

[Ride css online docs](https://ridecss.com/)

Ride is a Stylus mixins library for a faster css development.

## 1 - installing Ride css

There are mainly three ways to install and use it.

Remember that ride-css **requires** [node.js](http://nodejs.org/ "Click here to go to node.js website") installed

### Installing ride-css and more useful stuff using [ride-cli](http://github.com/ride-css/ride-cli/ "Ride-cli github repository")

* ```npm install -g ride-cli```

* ```cd to-a-folder```

* ```ridecss init my-project```

* ```grunt build```

### Setting ride-css as a dependency for grunt and loading it into a stylus task

* add to your **package.json** (into your *dependencies* object)
  ```
    "grunt-contrib-stylus": "0.x",
    "ride-css": "0.x"
  ```

* type ```npm install```

* create a task for **grunt-contrib-stylus** and **@require** ride-css in your main buildable file

### Installing ride-css from zip

* [Download Ride css](https://github.com/ride-css/ride-css/archive/master.zip) and extract into your *working folder* 

* CD to your *working folder* and type ```npm install```

* *@require* ride-css in your buildable "*.styl" file and you have done.

### Installing ride-css from git

* ```git clone https://github.com/ride-css/ride-css```

* *@require* ride-css in your buildable "*.styl" file and you have done.

## 2 - your first awesome buildable file

### Including ride-css in your .styl file

assuming you have installed ride-css with the first or the second step
you will have to @require ride-css

```sass
@require 'ride-css'
// write your wonderful code here
```

### Example setup
```sass
@require 'ride-css'

$font-size: 14px
$line-height: 21.5px
$margin: 14px

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
```

## 3 - contributing

### You could be really helpful

[How to contribute](https://github.com/ride-css/ride-css/blob/master/contributing.md)

* Giving ride-css a star (on github and/or on npm)
* Telling other people about this library
* Improving the documentation
* Forking this repository
* Sending pull request (only on the **dev branch** for bugfixing or new features)
* Asking questions and or about new features
* Reporting any bug

### Contributors

* author: [OctoD](https://github.com/OctoD/)
* tester: [naya85](https://github.com/naya85/)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ride-css/ride-css/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

