[back](https://github.com/octod/ride-css/)

#button mixins
##button
```
// this mixin has not a {block}
.button
  button()
// will render in
.button {
  cursor: pointer;
  display: inline-block;
  line-height: 3;
  position: relative;
}
```
##menu-button
```
// this mixin has a {block}
// @params
// string className (default: '.hamburger'): the element selector
// string trigger Event (default: '.show-menu .hamburger'): when the element will be triggered to become a close button
menu-button()
// will render in
.hamburger {
  background-color: #fff;
  -webkit-border-radius: 0.25em;
  -moz-border-radius: 0.25em;
  border-radius: 0.25em;
  display: inline-block;
  height: 0.25em;
  -webkit-transition: ease all 0.4s;
  -moz-transition: ease all 0.4s;
  -o-transition: ease all 0.4s;
  transition: ease all 0.4s;
  width: 2em;
}
.hamburger:after,
.hamburger:before {
  background-color: #fff;
  content: "";
  display: block;
  height: 0.25em;
  position: relative;
}
.hamburger:before {
  margin-top: -0.5em;
  -webkit-transition: ease all 0.4s;
  -moz-transition: ease all 0.4s;
  -o-transition: ease all 0.4s;
  transition: ease all 0.4s;
}
.hamburger:after {
  margin-top: 0.5em;
  top: 0.25em;
  -webkit-transition: ease all 0.4s;
  -moz-transition: ease all 0.4s;
  -o-transition: ease all 0.4s;
  transition: ease all 0.4s;
}
.hamburger:after,
.hamburger:before {
  -webkit-border-radius: 0.25em;
  -moz-border-radius: 0.25em;
  border-radius: 0.25em;
}
.show-menu .hamburger {
  background-color: transparent;
}
.show-menu .hamburger:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 50% 0;
  -moz-transform-origin: 0 50% 0;
  -ms-transform-origin: 0 50% 0;
  -o-transform-origin: 0 50% 0;
  transform-origin: 0 50% 0;
}
.show-menu .hamburger:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 25% 0 0;
  -moz-transform-origin: 25% 0 0;
  -ms-transform-origin: 25% 0 0;
  -o-transform-origin: 25% 0 0;
  transform-origin: 25% 0 0;
}
```
##sliding-button
```
// this mixin has a {block}
// @params
// string class: button's selector
// string direction (default: 'left'): this is where the :before pseudo will come from
// seconds transition (default: .4s)
+sliding-button('.sliding-button', 'top')
  background-color red
  color white
  &:hover
    color red
  &:before
    background-color #fff
// will render in
.sliding-button {
  background-color: #f00;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 3;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.sliding-button:hover {
  color: #f00;
}
.sliding-button:before {
  background-color: #fff;
}
.sliding-button:hover:before {
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.sliding-button:before {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  height: 100%;
  width: 100%;
  z-index: -1;
}
.sliding-button:before {
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
```