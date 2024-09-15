# api-call-control

<b>api-call-control </b> is an npm package designed to optimize how frontend applications interact with APIs. It helps manage API request rates by implementing debouncing and throttling techniques, which improve performance and prevent issues like exceeding API rate limits.

## ✨ Features

- **Debouncing**: Delays the execution of a function until a specific time has passed since its last call. Ideal for reducing unnecessary API calls triggered by frequent events, such as user input in a search field.

- **Throttling**: Limits how often a function can be called within a set timeframe. Useful for handling high-frequency actions like scrolling or mouse movements.

### By using api-call-control, you can:

- 🚀 Boost application performance by reducing unnecessary API requests.

- ⚡ Prevent API rate limits from being reached and improve the overall user experience.

- 💡 Optimize resource usage by managing network traffic and CPU load more efficiently.

## 🛠️ Installation

You can install `api-call-control` via npm:

```bash
npm install api-call-control
```

## 📚 Usage

Here's how you can use the debounce and throttle functions in your frontend application:

### Debouncing Example

```javascript
import { debounce } from 'api-call-control';

const fetchData = () => {
  // Function that makes an API call
  console.log('API called');
};

// Create a debounced version of fetchData with a 500ms delay
const debouncedFetch = debounce(fetchData, 500);

// Call debounced function (e.g., after user input)
debouncedFetch();
```

### Throttling Example

```javascript
import { throttle } from 'api-call-control';

const handleScroll = () => {
  // Function that handles scroll event and makes API calls
  console.log('API called on scroll');
};

// Create a throttled version of handleScroll with a 1000ms delay
const throttledScroll = throttle(handleScroll, 1000);

// Attach the throttled function to a scroll event listener
window.addEventListener('scroll', throttledScroll);
```

## 📋 API

### `debounce(function: Function, debounceDelay: number): Function`

- `function`: The function to debounce.
- `debounceDelay`: The number of milliseconds to delay execution.

This method returns a new function that postpones the execution of the original function until after a wait time.

### `throttle(function: Function, throttleDelay: number): Function`

- `function`: The function to throttle.
- `throttleDelay`: The number of milliseconds to wait before calling the function again.

This method returns a throttled function that executes no more frequently than the specified delay.

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

This project is licensed under the ISC License.

## 👤 Author

Developed by [Anurag Kumar](https://linktr.ee/anuragkmr45).

- Email: [anuragkmr45@gmail.com](mailto:anuragkmr45@gmail.com)
