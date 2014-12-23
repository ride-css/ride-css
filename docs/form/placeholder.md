#placeholder
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