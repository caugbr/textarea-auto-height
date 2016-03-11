# Textarea Auto Height

The ``textareaAutoHeight`` is a simple jQuery plugin that makes a textarea element auto resizable to preserve the content always fully visible. You can use a maximum height to let your text box grow.

### Options
---

 * ``maxHeight`` - [int] Defines the maximum height to the box
 * ``resizable`` - [bool] If your text box has a variable width, set it to ``TRUE``. The text box will be updated if the window resizes 

Sample code:

```javascript
$(function(){
  $('textarea').textareaAutoHeight();
  // or...
  $('textarea').textareaAutoHeight({maxHeight: 250, resizable: true});
});
```

[github.com/caugbr/textarea-auto-height](https://github.com/caugbr/textarea-auto-height)
