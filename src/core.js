export const createElement = (tag, props, ...children) => {
  const $children = children.flat();

  if (typeof tag === 'function') {
    return tag({ ...props, children: $children });
  }
  const $element = document.createElement(tag);

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.slice(0, 2) === 'on') {
        $element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        $element.setAttribute(key, value);
      }
    });
  }

  $children.forEach((child) => {
    if (!child) return;
    if (typeof child === 'string') {
      $element.appendChild(document.createTextNode(child));
    } else {
      $element.appendChild(child);
    }
  });

  return $element;
};
