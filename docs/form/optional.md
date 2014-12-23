#form-optional
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