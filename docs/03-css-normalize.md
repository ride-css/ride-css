# css normalize and box sizing reset

This mixin is quite a must have for every project. 

This will help you to standardize the way each browser render your html and css without using an old fashioned resetter.

>Is really important to include at least a css normalization
>because without it your design could simply explode.

It's very simple to implement it, just read the example below.

```sass
          normalize-css()
          // or 
          css-normalize()
```

Calling this mixin will yeld a ton of css rules at once, easily scaffolding your style without compromising your design.

```css
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          main,
          nav,
          section,
          summary {
            display: block;
          }
          *,
          *:after,
          *:before,
          button,
          input,
          select,
          textarea {
            box-sizing: border-box;
          }
          code,
          kbd,
          pre,
          samp {
            font-family: monospace, serif;
            font-size: 1em;
          }
          b,
          strong {
            font-weight: 700;
          }
          audio,
          canvas,
          video {
            display: inline-block;
          }
          audio:not([controls]),
          [hidden],
          template {
            display: none;
          }
          a:focus,
          a:active,
          a:hover {
            outline: 0;
          }
          body,
          button,
          input,
          select,
          textarea,
          p {
            margin: 0;
          }
          input[type="checkbox"],
          input[type="radio"],
          button::-moz-focus-inner,
          input::-moz-focus-inner {
            padding: 0;
          }
          audio:not([controls]) {
            height: 0;
          }
          html {
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          a {
            background-color: transparent;
          }
          abbr[title] {
            border-bottom: 1px dotted;
          }
          dfn {
            font-style: italic;
          }
          hr {
            box-sizing: content-box;
            height: 0;
          }
          mark {
            background-color: #f00;
            color: #000;
          }
          pre {
            white-space: pre-wrap;
          }
          q {
            quotes: "\201C" "\201D" "\2018" "\2019";
          }
          sup,
          sub {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }
          sup {
            top: -0.5em;
          }
          sub {
            bottom: -0.25em;
          }
          img {
            border: 0;
          }
          svg:not(:root) {
            overflow: hidden;
          }
          figure {
            margin: 0;
          }
          fieldset {
            border: 1px solid #c0c0c0;
            margin: 0 2px;
            padding: 0.25em 0.625em 0.75em;
          }
          legend {
            border: 0;
            padding: 0;
          }
          button,
          input,
          select,
          textarea {
            font-family: inherit;
            font-size: 100%;
          }
          button,
          input {
            line-height: normal;
          }
          button,
          select {
            text-transform: none;
          }
          button,
          html input[type="button"],
          input[type="reset"],
          input[type="submit"] {
            cursor: pointer;
          }
          button[disabled],
          html input[disabled] {
            cursor: default;
          }
          input[type="search"] {
            -webkit-appearance: textfield;
            box-sizing: content-box;
          }
          input[type="search"]::-webkit-search-cancel-button,
          input[type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
          }
          button::-moz-focus-inner,
          input::-moz-focus-inner {
            border: 0;
          }
          textarea {
            overflow: auto;
            vertical-align: top;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
```