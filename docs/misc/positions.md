#Ride positions

##absolute positioning (overwrited if using nib)

A faster way to set absolute positioning

```
  .my-selector
    absolute: top 5% left 1em
  //will yeld to
  .my-selector{
    left: 1em;
    position: absolute;
    top: 5%;
  }
```

##fixed positioning (overwrited if using nib)

A faster way to set fixed positioning

```
  .my-selector
    fixed: top 5% left 1em
  //will yeld to
  .my-selector{
    left: 1em;
    position: fixed;
    top: 5%;
  }
```

##relative positioning

A faster way to set relative positioning

```
  .my-selector
    relative: top 5% left 1em
  //will yeld to
  .my-selector{
    left: 1em;
    position: relative;
    top: 5%;
  }
```