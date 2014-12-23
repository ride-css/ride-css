#ride-button

This mixin has not a {block}, and is useful for making your own buttons faster

Basic usage
  
```
.scope-for-the-button
  ride-button: $type, [$property $value, ...]
```

Mixin params

* **$type** (required, options available: small, medium, large): will make your button smaller or bigger
* **$properties** (optional): will add properties to your button

Real life example

```
.button
  ride-button: medium, color white
  &.danger
    background-color: red
  &.safe
    background-color: green
  &.warning
    background-color: orange
```

will yeld to

```
.button {
  padding: 0.5em 0.75em;
  color: #fff;
}
.button.danger {
  background-color: #f00;
}
.button.safe {
  background-color: #008000;
}
.button.warning {
  background-color: #ffa500;
}
```

#ride-button-color

this mixin has not a **block**, could be really useful for setting :hover states on your buttons

How to use it:

```
.my-button
  ride-button-color: $background-color $color
```

Mixin parameters

* **$background-color**: the background-color for your button
* **$color**: the color for your button


