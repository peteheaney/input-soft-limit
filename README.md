# Input Soft Limit

<a href="https://www.npmjs.com/package/input-soft-limit"><img src="https://img.shields.io/npm/v/input-soft-limit.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/input-soft-limit"><img src="https://img.shields.io/bundlephobia/min/input-soft-limit.svg" alt="Version"></a>
<a href="https://github.com/peteheaney/input-soft-limit/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/input-soft-limit.svg" alt="License"></a>

A simple JavaScript module that applies a soft character limit to inputs and textareas.

Input Soft Limit can be applied to a collection of inputs and/or textareas, each with their own character limit. If any of the inputs/textareas exceed their character limit, the form's submit button will be disabled.

## How to use

Install it as a dependency with npm:

```
npm i -D input-soft-limit
```

Import it:

```javascript
import InputSoftLimit from 'input-soft-limit';
```

Instantiate it, passing in some [settings](#settings):

```javascript
const inputSoftLimitInstance = new InputSoftLimit({
  submitButton: '.submit',
  inputInvalidClass: 'is-invalid'
});
```

Initialize it:

```javascript
inputSoftLimitInstance.init();
```

Add the necessary classes and data attributes to your HTML:

```html
<input type="text"
       class="input-soft-limit"
       id="name"
       data-input-soft-limit="10"
       data-input-soft-limit-counter=".name-count">

<p>Characters remaining: <span class="name-count"></span></p>
```

## HTML attributes

| Property                  | Type   | Description                                                  |
| ------------------------- | ------ | ------------------------------------------------------------ |
| `data-input-soft-limit`   | String | **Required** - the input/textarea's character limit          |
| `data-soft-limit-counter` | String | The selector string for the element where the input/textareas remaining character count should be shown. Make sure this is unique for each input/textarea. |

## Settings

| Property          | Type        | Description                                                  | Default Value       |
| ----------------- | ----------- | ------------------------------------------------------------ | ------------------- |
| `inputsSelector`  | String      | The selector string that the module should use to select inputs and/or textareas. | '.input-soft-limit' |
| `parent`          | DOM Element | The element inside which the module will look for elements matching the `inputsSelector`. | document            |
| `submitButton`    | String      | The selector string that the module should use to select the submit button. Omit this property if you do not want to use this feature. | null                |
| `inputInvalidClass` | String      | The CSS class that will be applied to inputs and textareas that have exceeded their character limit. | 'is-invalid'        |

## Demo

https://codesandbox.io/s/input-soft-limit-demo-wzfbq
