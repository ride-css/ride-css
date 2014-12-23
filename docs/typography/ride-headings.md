# Ride headings

This mixin has not a {block}

This mixin will return a set of **h1-h6** headings with the proper calculations for **font-size** and **line-height**

Basic usage

```
ride-headings($headings, $line-height, $config)
```

Mixin parameters

**$headings** (optional, default: 2 1.8 1.6 1.4 1.2 1) Is the font-size each heading will have. Note that the line-height will be affected by the font-size.

**$line-height** (optional, default: 1.5) Is the basic line-height of your website. Modify this, if you are goijng to use a different line-height in your design

**$config** (optional, default: {})

* *$config*.**h** If you choose to set 'true' the oocss $config param, this will be the prefix for your class. Note that each class will end with a number from 1 to 6

* *$config*.**oocss** If set to true, the mixin will render a set of css classes instead of the classical h1-h6 html selectors.

* *$config*.**placeholder** If set to true, the mixin will render a set of stylus placeholders (from $h1 to $h6). If this option is set to true, $config.h and $config.oocss options won't be considered. 

Real life example

```
ride-headings(1.8 1.7 1.6 1.3 1.2 1.1, 2, {
  oocss: true,
  h: '.example-heading-'
})
```

will yeld

```
.example-heading-1,
.example-heading-2,
.example-heading-3,
.example-heading-4,
.example-heading-5,
.example-heading-6 {
  margin: 0 0;
}
.example-heading-1{
  font-size: 1.8em;
  line-height: 1.111111111111111;
}
.example-heading-2{
  font-size: 1.7em;
  line-height: 1.176470588235294;
}
.example-heading-3{
  font-size: 1.6em;
  line-height: 1.25;
}
.example-heading-4{
  font-size: 1.3em;
  line-height: 1.538461538461538;
}
.example-heading-5{
  font-size: 1.2em;
  line-height: 1.666666666666667;
}
.example-heading-6{
  font-size: 1.1em;
  line-height: 1.818181818181818;
}
```

Placeholder example

```
ride-headings(1.8 1.7 1.6 1.3 1.2 1.1, 2, {
  placeholder: true
})

.lead
  @extend $h1
.title
  @extend $h3
.sub-title
  @extend $h4
```

will yeld to

```css

.lead{
  font-size: 1.8em;
  line-height: 1.111111111111111;
}
.title{
  font-size: 1.6em;
  line-height: 1.25;
}
.sub-title{
  font-size: 1.3em;
  line-height: 1.538461538461538;  
}
```