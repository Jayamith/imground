# What is this ?

Get perfect rounded borders for images.

# Installation

`npm i imground --save`

Then..

```
import { imground } from 'imground';

imground({
    border_type: 'low',
    padding: false
});
```

# Options

imground supports 2 options, both of which are optional:

* *border_type* - _high | low_ (Defaults to low)
* *padding* - _boolean_ (Defaults to false)
