# simsCheckbox jQuery Plugin
simsCheckbox jQuery Plugin is a plugin to create Bootstrap style checkboxes easily.
This plugin has been developed first for SmartClass Project [www.smartclass.us]

Installation
---
After download it, add after jQuery

```html
<!-- jQuery simsCheckbox plugin -->
<script src='path/to/plugin/simsCheckbox.js' type='text/javascript'></script>
```

Simple Usage
---

A simple way to create Bootstrap style checkboxes

```js
$(document).ready(function (){
    $("selector").simsCheckbox();
});
```

Plugin Options
---
The plugin supports these following options:

#### height
_string_ sets a certain height to the selector e.g. 400px. If it is set then overflow will be set to auto as well. Defaults to `''`.

#### element
_string_ set the html element to be styled as checkbox. Defaults to `'li'`.

