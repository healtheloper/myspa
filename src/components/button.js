/** @jsx createElement */
import { createElement } from '../core.js';

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
