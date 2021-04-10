import { useEffect, useState } from 'react';

export enum BREAKPOINT {
    TOO_SMALL = 0,
    SMARTPHONE_PORTRAIT = 320,
    SMARTPHONE_LANDSCAPE = 481,
    TABLET = 768,
    DESKTOP = 1025,
    HIGH_RES_DESKTOP = 1281,
}

function getDeviceConfig(width: number) {
    if (width >= 320 && width <= 480) {
        // Most of the Smartphones Mobiles (Portrait)
        return BREAKPOINT.SMARTPHONE_PORTRAIT;
    }

    if (width >= 481 && width <= 767) {
        // Low Resolution Tablets, Mobiles (Landscape)
        return BREAKPOINT.SMARTPHONE_LANDSCAPE;
    }

    return BREAKPOINT.TOO_SMALL;
}

function useBreakpoint() {
    const [breakPoint, setBreakpoint] = useState(getDeviceConfig(window.innerWidth));

    useEffect(() => {
      function onResize() {
        setBreakpoint(getDeviceConfig(window.innerWidth));
      }

      window.addEventListener('resize', onResize);

      return window.removeEventListener('resize', onResize);
    }, []);

    return breakPoint;
}

export default useBreakpoint;
