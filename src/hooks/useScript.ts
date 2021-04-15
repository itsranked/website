import { useLayoutEffect, useRef } from 'react';

export default function useScript<T extends HTMLElement>(attrs: object) {
  const elementRef = useRef<T>(null);

  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-cfasync', 'false');

    Object.keys(attrs).forEach((attr) => {
      script.setAttribute(attr, attrs[attr as keyof typeof attrs]);
    });
    elementRef.current?.appendChild(script);
  });

  return elementRef;
}
