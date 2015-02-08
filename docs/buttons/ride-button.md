#ride-button

This mixin has not a {block}, and is useful for making your own buttons faster

Basic usage
  
```sass
.scope-for-the-button
  ride-button: $type, [$property $value, ...]
```

Mixin params

* **$type** (required, options available: *small*, *medium*, *large* or a css *size*): will make your button smaller or bigger. If you specify a measure, the button will use it.
* **$properties** (optional): will add properties to your button

Real life example (using @extend and placeholders)

```sass
$button-medium
  ride-button: medium, color white
$button-custom
  ride-button: 12px, color white
.button-danger
  @extend $button-medium
  background-color: red
.button-safe
  @extend $button-medium
  background-color: green
.button-warning
  @extend $button-custom
  background-color: orange
```

will yeld to

```css
.button-danger,
.button-safe {
  padding: 0.5em 0.75em;
  color: #fff;
}
.button-warning {
  padding: 12px;
  color: #fff;
}
.button-danger {
  background-color: #f00;
}
.button-safe {
  background-color: #008000;
}
.button-warning {
  background-color: #ffa500;
}
```

#ride-button-color

this mixin has not a **block**, could be really useful for setting :hover states on your buttons

How to use it:

```sass
.my-button
  ride-button-color: $background-color, $color
```

Mixin parameters

* **$background-color** (required): the background-color for your button
* **$color** (required): the color for your button

Real life example

```sass
.my-button
  ride-button: small
  ride-button-color: red, white
  &:hover
    ride-button-color: orange, @color
```

Will yeld to

```css
.my-button{
  background-color: #f00;
  color: #fff;
  padding: 0.5em 0.75em;
}

.my-button:hover{
  background-color: #ffa500;
  color: #fff
}
```