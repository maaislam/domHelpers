# A/B Test Helpers

This is a small library of helper functions for running A/B tests on web pages. It provides utility functions for checking and waiting for conditions on a page, and finding DOM elements.
Installation

You can install the package using npm:

```bash
npm install abtesthelpers
```

## Usage

The library exposes three functions:

```js
getElement(cssSelector, outTimer = 10000)
```

This function returns a Promise that resolves with an object containing all elements that match a given CSS selector. If no elements are found, it will wait for mutations on the document body and retry until elements matching the selector are found or a timeout is reached.

```js
import { getElement } from 'abtesthelpers';

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

```js
waitForConditions(conditions, callback, timeout = 10000, pollFreq = 100)
```

This function waits for a set of conditions to be true before executing a callback function. It takes an array of conditions to be checked, a callback function to execute once all conditions are true, and an optional timeout and polling frequency.

```js

import { waitForConditions } from 'abtesthelpers';

// Wait for two elements with class 'my-class' and an element with ID 'my-id'
waitForConditions(['.my-class', '.my-class', '#my-id'], (elements) => {
  console.log(`Found ${elements['.my-class'].length} elements with class 'my-class'`);
  console.log(`Found element with ID 'my-id': ${elements['#my-id'][0].outerHTML}`);
  // Do something with the found elements
}, 10000, 500);
```

```js
pollerLite(conditions, callback, maxTime = 10000)
```

This is a light-weight version of 'waitForConditions'
This function polls the DOM for a set of conditions to be met before executing a callback. It takes an array of conditions to check for, a callback function to execute when all conditions are true, and an optional maximum time limit for the polling.

```js
import { pollerLite } from 'abtesthelpers';

// Poll for two elements with class 'my-class'
pollerLite(['.my-class', '.my-class'], () => {
  console.log('Both elements found');
  // Do something when both elements are found
}, 5000);

```

## License

This package is licensed under the MIT license.
