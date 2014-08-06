[back](https://github.com/octod/ride-css/)

#navs

##site-nav
```
// this mixin has a {block}
// @params

// basic example:
site-nav()
// will render into:
.nav {
  display: table;
  width: 100%;
}
.nav .item {
  vertical-align: middle;
}
.nav .item {
  display: table-cell;
}
.nav.horizontal .item {
  display: block;
}

// adding something to the mixin 
+site-nav()
  .item:hover
    color red
  .item.current
    color purple
// will render into
.nav {
  display: table;
  width: 100%;
}
.nav .item:hover {
  color: #f00;
}
.nav .item.current {
  color: #800080;
}
.nav .item {
  vertical-align: middle;
}
.nav .item {
  cursor: pointer;
  line-height: 3;
  position: relative;
}
.nav .item {
  display: table-cell;
}
.nav.horizontal .item {
  display: block;
}

```