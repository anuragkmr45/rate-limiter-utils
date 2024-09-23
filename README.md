# rate-limiter-utils

<b>rate-limiter-utils </b> is an npm package designed to optimize how frontend applications interact with APIs. It helps manage API request rates by implementing debouncing and throttling techniques, which improve performance and prevent issues like exceeding API rate limits.

## ✨ Features

- **Debouncing**: Delays the execution of a function until a specific time has passed since its last call. Ideal for reducing unnecessary API calls triggered by frequent events, such as user input in a search field.

- **Throttling**: Limits how often a function can be called within a set timeframe. Useful for handling high-frequency actions like scrolling or mouse movements.

### By using rate-limiter-utils, you can:

- 🚀 Boost application performance by reducing unnecessary API requests.

- ⚡ Prevent API rate limits from being reached and improve the overall user experience.

- 💡 Optimize resource usage by managing network traffic and CPU load more efficiently.

## 🛠️ Installation

You can install `rate-limiter-utils` via npm:

```bash
npm install rate-limiter-utils
```

## 📚 Usage

Here's how you can use the debounce and throttle functions in your frontend application:

### Debouncing Example

 - <b>Standard debounce (function executes after delay):</b>
 <br>

```javascript
import { debounce } from 'rate-limiter-utils';

const debouncedFunction = debounce(() => console.log('Executed!'), 300);

debouncedFunction();  // Will log "Executed!" after 300ms

```

 - <b>Immediate execution (executes immediately and then debounced):</b>
 <br>
<small>If immediate is true, the function is executed at the start and then debounced. If false, it behaves like a standard debounce function.</small>


```javascript
import { debounce } from 'rate-limiter-utils';

const debouncedFunction = debounce(() => console.log('Executed!'), 300, true);

debouncedFunction();  // Will log "Executed!" after 300ms

```

### Throttling Example

 - <b>Standard throttle (function is invoked every delay ms at most):</b>
 <br>

```javascript
import { debounce } from 'rate-limiter-utils';

const throttledFunction = throttle(() => console.log('Throttled function!'), 300);

throttledFunction();  // Will log "Throttled function!" if enough time has passed since the last call


```

 - <b>Immediate execution (function is executed immediately, and then throttled):</b>
 <br>
<small>If immediate is true, the function is executed at the start and then throttled. If false, it behaves like a standard throttling function.</small>


```javascript
import { debounce } from 'rate-limiter-utils';

const throttledImmediateFunction = throttle(() => console.log('Throttled function!'), 300, true);

throttledImmediateFunction();  // Will log immediately on the first call, and throttle subsequent calls


```

<!-- ## 📋 API

### debounce
 <h3>standard debounce ```debounce(function: Function, debounceDelay: number): Function```

- `function`: The function to debounce.
- `debounceDelay`: The number of milliseconds to delay execution.

This method returns a new function that postpones the execution of the original function until after a wait time.

### `throttle(function: Function, throttleDelay: number): Function`

- `function`: The function to throttle.
- `throttleDelay`: The number of milliseconds to wait before calling the function again.

This method returns a throttled function that executes no more frequently than the specified delay. -->

<!-- ## 🚧 Scripts

- `npm run build`: Compiles the TypeScript source into JavaScript.
- `npm run start`: Starts the application.
- `npm run dev`: Runs the app in development mode with nodemon. -->

## 🛠️ Technologies

- **TypeScript**: Ensures type safety and better developer experience.
- **Node.js**: Runtime for building the package.

<!-- ## 🔗 Repository

Find the repository on GitHub:

- [GitHub Repo](#)
- [Issues](#) -->

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Developed by [Anurag Kumar](https://linktr.ee/anuragkmr45).

- Email: [anuragkmr45@gmail.com](mailto:anuragkmr45@gmail.com)
