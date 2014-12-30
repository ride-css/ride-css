#ride-button

This mixin has not a {block}, and is useful for making your own buttons faster

Basic usage
  
```
.scope-for-the-button
  ride-button: $type, [$property $value, ...]
```

Mixin params

* **$type** (required, options available: *small*, *medium* and *large*): will make your button smaller or bigger
* **$properties** (optional): will add properties to your button

Real life example (using @extend and placeholders)

```
$button
  ride-button: medium, color white
.button-danger
  @extend $button
  background-color: red
.button-safe
  @extend $button
  background-color: green
.button-warning
  @extend $button
  background-color: orange
```

will yeld to

```
.button-danger,
.button-safe,
.button-warning {
  padding: 0.5em 0.75em;
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

```
.my-button
  ride-button-color: $color $background-color
```

Mixin parameters

* **$color** (required): the color for your button
* **$background-color** (required): the background-color for your button

Real life example

```
.my-button
  ride-button: small
  ride-button-color: white red
  &:hover
    ride-button-color: @color orange
```

Will yeld to

```
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