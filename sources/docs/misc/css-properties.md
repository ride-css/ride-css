#css properties

##css shortcuts

Those mixins are used as common css properties

* **bkg**: shortcut for *background* 
* **bkgc**: shortcut for *background-color*
* **bkgi**: shortcut for *background-image*
* **bkgp**: shortcut for *background-position*
* **bkgz**: shortcut for *background-size*
* **bd**: shortcut for *border*
* **cl**: shortcut for *color*

##border-horizontal, border-vertical

These mixins will return both horizontal or vertical border

```
  .my-selector
    border-horizontal: 1px solid red
    border-vertical: 1px solid red, 2px solid white
```

##margin-horizontal, margin-vertical

These mixins will return both horizontal or vertical margin

basic usage:
```
.my-selector
  margin-horizontal: $margin-right $margin-left
  margin-vertical: $margin-top $margin-bottom
```

*margin-vertical* 
mixin parameters

**$margin-top**: (required)
**$margin-bottom**: (optional, inherits from $margin-top)

*margin-horizontal* 
**$margin-right**: (required)
**$margin-left**: (optional, inherits from $margin-right)

```
  .my-selector
    margin-horizontal: 1em
    margin-vertical: 1em 2em
```


##padding-horizontal, padding-vertical

These mixins will return both horizontal or vertical padding

basic usage:
```
.my-selector
  padding-horizontal: $padding-right $padding-left
  padding-vertical: $padding-top $padding-bottom
```

*padding-vertical* 
mixin parameters

**$padding-top**: (required)
**$padding-bottom**: (optional, inherits from $padding-top)

*padding-horizontal* 
**$padding-right**: (required)
**$padding-left**: (optional, inherits from $padding-right)

```
  .my-selector
    padding-horizontal: 1em 2em
    padding-vertical: 1em
```
