#form-elements

this mixin has a {block}

```
+form-elements()
  // write your code here
```

default output

```
input,
textarea,
select {
  /* wow! it's my code there! */  
}
```

real life example

```
+form-elements()
  border 1px solid #f2f2f2
  color #222
```
  
output

```
input,
textarea,
select {
  border: 1px solid #f2f2f2;
  color: #222;
}
```
