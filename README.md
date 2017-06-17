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

Example
---

Set your html elements to be styled

```html
<ul class="sims-batch-students">
    <li>Jamie Blue</li>
    <li>Mike Tennis</li>
    <li checked>Quentin Hiker</li>
</ul>
```

use default options

```js
$(document).ready(function (){
    $(".sims-batch-students").simsCheckbox();
});
```
Before

![File Input Screenshot](https://www.smartclass.us/img/plugins/simsCheckbox/before.png)

After

![File Input Screenshot](https://www.smartclass.us/img/plugins/simsCheckbox/after.png)

Plugin Options
---
The plugin supports these following options:

#### height
_string_ sets a certain height to the selector e.g. 400px. If it is set then overflow will be set to auto as well. Defaults to `''`.

#### element
_string_ set the html element to be styled as checkbox. Defaults to `'li'`.

#### checkboxClass
_string_ set the class of checkbox elements. Defaults to `'btn btn-block btn-social'`.

