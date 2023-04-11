# pageutilities [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is a library of helper function. It provides utility functions for checking and waiting for conditions on a page, and finding DOM elements.
Installation

You can install the package using npm:

```bash
npm install pageutilities
```

## :hammer_and_wrench: How tos

The library exposes multiple functions:

## :gem: getElement

```js
getElement(cssSelector, outTimer = 10000)
```

This function returns a Promise that resolves with an object containing all elements that match a given CSS selector. If no elements are found, it will wait for mutations on the document body and retry until elements matching the selector are found or a timeout is reached.

### :gear: Parameters

* ```cssSelector``` (required): A string that specifies the CSS selector for the desired elements.
* ```outTimer``` (optional): An integer that specifies the maximum number of milliseconds to wait for the desired elements to appear. If the elements are not found within this time, the function will reject with an error. The default value is 10000 (10 seconds).

### :handshake: Return Value

This function returns a Promise that resolves with an object containing the CSS selector and the matching elements. The object has the following properties:

* ```selector```: A string that specifies the CSS selector used to find the elements.
* ```elements```: An array of DOM elements that match the CSS selector.

If the desired elements are not found within the specified time, the function will reject with an error.

### :scroll: Usage

```js
import { getElement } from 'pageutilities';

// Find all elements with class 'my-class'
getElement('.my-class')
  .then((result) => {
    console.log(`Found ${result.elements.length} elements with selector '${result.selector}'`);
    // Do something with the found elements
  })
  .catch((error) => {
    console.error(error);
  });
```

### Notes

* This function uses ```querySelectorAll``` to find the desired elements, so the CSS selector must conform to the rules for this function.
* The ```MutationObserver``` is used to detect changes to the DOM and update the element selection accordingly. This allows the function to be resilient to changes in the DOM structure.
* If the ```outTimer``` parameter is not provided, the default value of 10000 milliseconds (10 seconds) will be used.
* If the desired elements are not found within the specified time, the function will reject with an error.

## :gem: waitForConditions

```js
waitForConditions(conditions, callback, timeout = 10000, pollFreq = 100)
```

This function waits for a set of conditions to be true before executing a callback function. It takes an array of conditions to be checked, a callback function to execute once all conditions are true, and an optional timeout and polling frequency.

### :gear: Parameters

* conditions: An array of conditions to be checked. Each condition can be a function that returns a boolean, or a string that represents a CSS selector for an element to be found.
* callback: A callback function to be executed once all conditions are true. The callback function is passed an object that maps CSS selectors to the matching elements.
* timeout: (Optional) The maximum time in milliseconds to wait for all conditions to be true. The default value is 10000ms.
* pollFreq: (Optional) The polling frequency in milliseconds. The default value is 100ms.

### :handshake: Return Value

This function does not return a value, but instead executes the callback function once all conditions are true.

### :red_circle: Errors

This function may throw the following errors:

* TypeError: If the conditions parameter is not an array, or the callback parameter is not a function, or the timeout parameter is not a number greater than or equal to 1000.
* Error: If a condition function throws an error or times out, or if the getElement function throws an error when trying to find an element.

### :scroll: Usage

```js

import { waitForConditions } from 'pageutilities';

// Wait for two elements with class 'my-class' and an element with ID 'my-id'
waitForConditions(['.my-class', '.my-class', '#my-id'], (elements) => {
  console.log(`Found ${elements['.my-class'].length} elements with class 'my-class'`);
  console.log(`Found element with ID 'my-id': ${elements['#my-id'][0].outerHTML}`);
  // Do something with the found elements
}, 10000, 500);
```

## :gem: pollerLite

```js
pollerLite(conditions, callback, maxTime = 10000)
```

This is a light-weight version of 'waitForConditions'
This function polls the DOM for a set of conditions to be met before executing a callback. It takes an array of conditions to check for, a callback function to execute when all conditions are true, and an optional maximum time limit for the polling.

### :gear: Parameters

* ```conditions``` (Array): An array of conditions to check for. Each element can either be a string selector or a function that returns a boolean value.
* ```callback``` (Function): The function to execute when all conditions are met.
* maxTime (Number, optional): The maximum time to wait in milliseconds. Default is 10000 (10 seconds).

### :scroll: Usage

```js
import { pollerLite } from 'pageutilities';

// Poll for two elements with class 'my-class'
pollerLite(['.my-class', '.my-class'], () => {
  console.log('Both elements found');
  // Do something when both elements are found
}, 5000);

```

## :gem: onUrlChange

```js
onUrlChange(callback)
```

This function allows you to execute a callback function whenever the URL changes in a single page application (SPA). It uses a MutationObserver to observe changes to the document body and detect URL changes.

### :gear: Parameters

* ```callback``` (required): The callback function to execute when the URL changes. This function should accept two parameters: oldHref and mutation. oldHref is a string that contains the URL before it changed. mutation is an object that describes the change that triggered the callback.

### :red_circle: Errors

* It should throw an error if callback is not a function and if any error is caused by the callback itself.

### :scroll: Usage

```js
onUrlChange((oldHref, mutation) => {
  console.log(`URL changed from ${oldHref} to ${window.location.href}`);
  console.log(mutation);
});
```

## Contributing

Contributions are welcome! If you have any issues, suggestions or improvements, please submit a pull request or open an issue.

## License

This package is licensed under the MIT license.
