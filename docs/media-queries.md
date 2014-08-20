[back](https://github.com/octod/ride-css/)

#media queries: breakpoints and more
##breakpoint
This mixin is ideal if you are planning to design an agnostic device website
```
// this mixin has a {block}
// @params
// [unit] min-device-width: the minimum device width
// [unit] max-device-width: the maximum device width
// [orientation] orientation (optional): if set, an orientation will be added to the media query
// how to use it
+breakpoint(300px, 400px, portrait)
  // write your awesome stuff here!
// will render into
@media (min-device-width: 300px) and (max-device-width: 400px) and (orientation: portrait) {
  /*you will find your awesome stuff here!*/  
}
```

##breakpoint-full
This mixin is ideal if you are planning to design an agnostic device website (also includes min-height and max-height)
```
// this mixin has a {block}
// @params
// [unit] min-device-width: the minimum device width
// [unit] max-device-width: the maximum device width
// [unit] min-device-height (optional): the minimum device height
// [unit] max-device-height (optional): the maximum device height
// [orientation] orientation (optional): if set, an orientation will be added to the media query
// how to use it
+breakpoint(300px, 400px, portrait)
  // write your awesome stuff here!
// will render into
@media (min-device-width: 300px) and (max-device-width: 400px) and (orientation: portrait) {
  /*you will find your awesome stuff here!*/  
}
```

##high-dpi
```
// this mixin has a {block}
// using
+high-dpi()
  .test
    color red
// will render into
@media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
  .test {
    color: #f00;
  }
}
```
##responsive-huge
```
// this mixin has a {block}
// using
+responsive-huge()
  .test
    color red
// will render into
@media only screen and (min-width: 1600px) {
  :root .huge-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
##responsive-normal
```
// this mixin has a {block}
// using
+responsive-normal()
  .test
    color red
// will render into
@media only screen and (min-width: 960px) and (max-width: 1599px) {
  :root .normal-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
##responsive-phone
```
// this mixin has a {block}
// using
+responsive-phone()
  .test
    color red
// will render into
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  body {
    font-size: 100%;
  }
  :root .phone-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
##responsive-small
```
// this mixin has a {block}
// using
+responsive-small()
  .test
    color red
// will render into
@media only screen and (min-width: 481px) and (max-width: 959px) {
  :root .small-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
##responsive-smallest
```
// this mixin has a {block}
// using
+responsive-smallest()
  .test
    color red
// will render into
@media only screen and (max-width: 480px) {
  :root .smallest-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
##responsive-tablet
```
// this mixin has a {block}
// using
+responsive-tablet()
  .test
    color red
// will render into
@media only screen and (min-width: 321px) and (max-width: 1024px) {
  body {
    font-size: 100%;
  }
  :root .tablet-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```