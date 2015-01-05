#Custom breakpoint

This mixin is ideal if you are planning to design an agnostic device website 

This mixin has a {block}

Basic use

```
+breakpoint($min-width, $max-width, $orientation)
  // your awesome code here
```

Mixin parameters

**$min-width**: the minimum width the breakpoint will be activated

**$max-width**: the maximum width the breakpoint will be activated

**$orientation** *(optional)*: if set, an orientation will be added to the media query (portrait or landscape)

Real life example

```
+breakpoint(320px, 480px)
  +wrap()
    font-size 1.4em
  ride-grid-4(config: {
    column: '.phone-'
  })
```

#Full custom breakpoint

This mixin is ideal if you are planning to design an agnostic device website (includes also min-height/max-height parameters if you need them)

This mixin has a {block}

Basic use

```
+breakpoint-full($min-width, $max-width, minHeight = false, maxHeight = false, $orientation = false)
  // your awesome code here
```

Mixin parameters

**$min-width**: the minimum width the breakpoint will be activated

**$max-width**: the maximum width the breakpoint will be activated

**minHeight** *(optional)*: the minimum height the breakpoint will be activated

**maxHeight** *(optional)*: the maximum height the breakpoint will be activated

**$orientation** *(optional)*: if set, an orientation will be added to the media query (portrait or landscape)

Real life example

```
+breakpoint(320px, 480px, 500px, 1000px, portrait)
  +wrap()
    font-size 1.4em
  ride-grid-4(config: {
    column: '.phone-'
  })
```