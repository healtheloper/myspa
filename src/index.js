/** @jsx createElement */
import { createElement } from './core.js';
import App from './app.js';

const $root = document.querySelector('body');

$root.appendChild(<App />);
