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

```
  .my-selector
    margin-horizontal: 1em
    margin-vertical: 1em 2em
```

##padding-horizontal, padding-vertical

These mixins will return both horizontal or vertical padding

```
  .my-selector
    padding-horizontal: 1em 2em
    padding-vertical: 1em
```
