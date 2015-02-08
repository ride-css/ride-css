# Ride headings

This mixin has not a {block}

This mixin will return a set of **h1-h6** headings with the proper calculations for **font-size** and **line-height**

Basic usage

```sass
ride-headings($font-size, $line-height, $margin = 0, $config = {})
```

Mixin parameters

**$font-size** (required): document's base font-size

**$line-height** (required): document's base line-height

**$margin** (required): adjustment vertical margin for headings

**$config** (optional, default: {})

* *$config*.**h** (default: '.h') If you choose to set 'true' the oocss $config param, this will be the prefix for your class. Note that each class will end with a number from 1 to 6

* *$config*.**headings** (default: (2 1.8 1.6 1.4 1.2 1)) The set of headings font multiplier.

* *$config*.**oocss** (default: false) If set to true, the mixin will render a set of css classes instead of the classical h1-h6 html selectors.

* *$config*.**placeholder** (default: false) If set to true, the mixin will render a set of stylus placeholders (from $h1 to $h6). If this option is set to true, $config.h and $config.oocss options won't be considered. 