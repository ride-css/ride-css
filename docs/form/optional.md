#form-optional

This mixin has a {block}

Basic usage
```sass
+form-optional()
  // your ruleset
```

Real life example
```sass
+form-optional()
  color: blue
```

Yelds
```css
input:optional,
textarea:optional,
select:optional {
  color: #00f;
}
```