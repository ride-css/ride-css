# installing ride-css

In order to use ride-css properly, you will have to install nodejs and stylus.

If you have not already done it, please follow this small guide.

## Nodejs installation

It's very simple.

If you are a **linux/ubuntu** user, open the terminal and type

```bash
sudo apt-get install node-legacy
```

If you are a **macos** user, download the installer [from this link](https://nodejs.org/download/)

If you are a **windows** user, download the installer [from this link](https://nodejs.org/download/)

## Stylus.js installation.

Wow, this is really hard.

If you are a **macos** or **windows** user, open your bash or dos-prompt and type this magic spell

```bash
npm install -g stylus gulp gulp-stylus
```

If you are a **linux/ubuntu** user, you'll have to install using sudo (or [click here for avoiding sudo commands every time](http://stackoverflow.com/questions/19352976/npm-modules-wont-install-globally-without-sudo#answer-21712034))

```
sudo npm install -g stylus gulp gulp-stylus
```

## installing ride-css part II - the revenge

Likewise installing stylus, open the terminal and type

```
// do this if you want to install it globally
npm install -g ride-css

// do this if you need to use it for your project
npm install --save-dev ride-css
```

Whoooot! You've done!

Now you can concentrate on your very [first project scaffolding](scaffolding.md) (will take 5-10 minutes)

# tl;dr

Do this after you've installed nodejs.

Create a **package.json** file into your current folder

copy this code into that file

```js
{
  "name": "my-project",
  "version": "0.0.1",
  "devDependencies": {
    "gulp": "*",
    "gulp-stylus": "*",
    "express": "4.x",
    "jade": "*",
    "ride-css": "*",
    "stylus": "*"
  }
}
```

and type

```
npm install
```

done.
