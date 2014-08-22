[back](https://github.com/octod/ride-css/)

#form mixins
##form-elements

this mixin has a {block}

```
+form-elements()
  border 1px solid #f2f2f2
  color #222
```
  
output

```css
input,
textarea,
select {
  border: 1px solid #f2f2f2;
  color: #222;
}

```

##form-elements-readonly
this mixin has a {block}

```
+form-elements-readonly()
  background-color #f2f2f2
  color #999
```

output

```css
input:read-only,
textarea:read-only,
select:read-only {
  background-color: #f2f2f2;
  color: #999;
}
```
##form-in-range

this mixin has a {block}

```
+form-in-range()
  color green
```

output

```css
input[type='number']:in-range {
  color: #008000;
}
```

##form-not-valid
this mixin has a {block}

```
+form-not-valid()
  color red
```

output

```css
input:invalid,
textarea:invalid,
select:invalid {
  color: #f00;
}
```

##form-optional
this mixin has a {block}

```
+form-optional()
  color blue
```

output

```css
input:optional,
textarea:optional,
select:optional {
  color: #00f;
}
```

##form-out-range
this mixin has a {block}

```
+form-out-range()
  color red
```

output

```css
input[type='number']:out-of-range {
  color: #f00;
}
```

##form-required
this mixin has a {block}

```
+form-required()
  font-weight bold
```

output

```css
input:required,
textarea:required,
select:required {
  font-weight: bold;
}
```

##form-valid
this mixin has a {block}

```
+form-valid()
  border 1px solid green
```

output

```css
input:invalid,
textarea:invalid,
select:invalid {
  border: 1px solid #008000;
}
```

##placeholder
this mixin has a {block}

```
+form-elements()
  +placeholder()
    color grey
```

output

```css
input::-webkit-placeholder,
textarea::-webkit-placeholder,
select::-webkit-placeholder {
  color: #808080;
}
input::-moz-placeholder,
textarea::-moz-placeholder,
select::-moz-placeholder {
  color: #808080;
}
input:-moz-placeholder,
textarea:-moz-placeholder,
select:-moz-placeholder {
  color: #808080;
}
input::-ms-placeholder,
textarea::-ms-placeholder,
select::-ms-placeholder {
  color: #808080;
}
```

##ride-form-elements
this mixin has a {block}

```
ride-form-elements(1px solid silver, 0 .5em)
```

output

```css
input,
textarea,
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  padding: 0 0.5em;
}
select {
  padding: 0 0.425em;
}
```