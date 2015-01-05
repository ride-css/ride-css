#paragraphs

This mixin has not a **{block}**

Basic usage
```
// as a function
ride-paragraph($font-size, $line-height, $margin)
// as a css property
.my-paragraph
  ride-paragraph: $font-size, $line-height, $margin
```

Mixin parameters

$font-size = 1em, $line-height = 1.5, $margin = ($font-size / 4)

* **$font-size** (optional, default: 1em)
* **$line-height** (optional, default: 1.5)
* **$margin** (optional, default ($font-size / 4))