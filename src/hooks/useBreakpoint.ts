import { useEffect, useState } from 'react';

export enum BREAKPOINT {
    TOO_SMALL = 0,
    SMARTPHONE_PORTRAIT = 1,
    SMARTPHONE_LANDSCAPE = 2,
    TABLET = 4,
    DESKTOP = 8,
    HIGH_RES_DESKTOP = 16,
}

function getDeviceConfig(width: number) {

    if (width > 1024) {
      return BREAKPOINT.DESKTOP;
    }

    if (width >= 768 && width <= 1024) {
        // Tablets, Ipads (landscape)
        return BREAKPOINT.TABLET;
    }

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

        window.addEventListener('orientationchange', onResize);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('orientationchange', onResize);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return breakPoint;
}

export default useBreakpoint;
