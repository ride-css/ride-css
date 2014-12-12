Ride css
========

[Ride css online docs](https://ride-css.github.io/)

Stylus mixin library for a faster frontend development.

Why walk when you can Ride?

###Installing ride using ride-cli
Ride **requires** node.js installed

> [Install node.js](http://nodejs.org/ "Click here to go to node.js website")

> ```npm install -g ride-cli```

> ```cd to-a-folder```

> ```ridecss init my-project```

###Installing ride from npm as a dependency (useful for using it along gruntjs)
Ride **requires** node.js installed

> [Install node.js](http://nodejs.org/ "Click here to go to node.js website")

> add to your **package.json**
  ```"grunt-contrib-stylus": "0.x"```
  ```"ride-css": "0.x"```

> type ```npm install```

> create a task for **grunt-contrib-stylus** and **@require** ride-css in your buildable file

###Installing ride from zip
Ride **requires** Stylus.js and (obviously) node.js installed

> [Install node.js](http://nodejs.org/ "Click here to go to node.js website")

> Install stylus.js. Type ```npm install -g stylus``` in your terminal and you've done.

> Install nib (recommended for css3 autoprefixing and more). Type ```npm install -g nib``` in your terminal and you've done.

> Download Ride css and unzip into your working folder (eg: workspace/), include ride in your buildable "*.styl" file and you have done.

###Documentation
#####How to include Ride in your .styl file
```
// assuming you are using the stylus-contrib for grunt
// type this
@require 'ride-css'

// write your wonderful code here
```

#####You could be really helpful

[How to contribute](https://github.com/ride-css/ride-css/blob/master/contributing.md)

#####contributors

* author: [OctoD](https://github.com/OctoD/)
* tester: [naya85](https://github.com/naya85/)