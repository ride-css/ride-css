# buttons, we love buttons!

Buttons are a really important component in user interfaces for a better user experience.

[(You don't say)](http://i3.kym-cdn.com/entries/icons/original/000/007/666/_57c8a1a431a592af806925e57258202f.png)

Ride-css helps you a little for making your own wonderful buttons.

At this moment there is only one mixin, which is called of course, **button**.

This mixin can be used also as a common css property.

Let's see a basic example

```sass
.btn
  button()
```

Not so hard, isn't it?

The example above will yeld some css, of course:

```css
.btn {
  display: inline-block;
}
.btn {
  cursor: pointer;
}
.btn {
  vertical-align: middle;
}
```

Yes, you could argue that three separated declarations are toooo much for a button. Just let's things more complicated.

```sass
.btn
  button()
.btn.large
  button: large
.btn.medium
  button: medium
.btn.small
  button: small
```

Will yeld something like this:

```css
.btn,
.btn.large,
.btn.medium,
.btn.small {
  display: inline-block;
}
.btn,
.btn.large,
.btn.medium,
.btn.small {
  cursor: pointer;
}
.btn,
.btn.large,
.btn.medium,
.btn.small {
  vertical-align: middle;
}
.btn.large {
  font-size: 1.2em;
  padding: 0.25em 0.325em;
}
.btn.medium {
  padding: 0.5em 0.75em;
}
.btn.small {
  font-size: 0.8em;
  padding: 0.5em 1.2em;
}
```

Wow! Automatic caching? DRY? Much amazing, such wow!

This happens because the **button** mixin is automatically cached within your **current-media**.

**button** mixins accepts also a variable/value as argument, for a better customization.

This parameter could be a *word* (small, medium or large) or a set of *units* (10px, 1em 2em, 4% ...).

This parameter will add a padding to the current button.

```sass
.btn
  button: medium
.btn.custom
  button: .25em 1em
```

will be rendered like this

```css
.btn,
.btn.custom {
  display: inline-block;
}
.btn,
.btn.custom {
  cursor: pointer;
}
.btn,
.btn.custom {
  vertical-align: middle;
}
.btn {
  padding: 0.5em 0.75em;
}
.btn.custom {
  padding: 0.25em;
}
```

Button parameters available:

| name      | padding       |
|-----------|:-------------:|
| large     | .25em .325em  |
| medium    | .5em .75em    |
| small     | .5em 1.2em    |
