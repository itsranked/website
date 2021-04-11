import { useEffect, useState } from 'react';
import useBreakpoint, { BREAKPOINT } from 'src/hooks/useBreakpoint';
import useInternationalization from 'src/hooks/useInternationalization';
import HomePageMobile from './breakpoints/Mobile';
import HomePageTablet from './breakpoints/Tablet';
import HomePageDesktop from './breakpoints/Desktop';
import FontFaceObserver from 'fontfaceobserver';

import './styles.css';

function HomePage() {
    const breakpoint = useBreakpoint();
    const { _ } = useInternationalization();

    const isMobile = breakpoint & (BREAKPOINT.SMARTPHONE_PORTRAIT | BREAKPOINT.SMARTPHONE_LANDSCAPE);
    const isTabletOrMobileHighResLandscape = breakpoint & (BREAKPOINT.TABLET);
    const isDesktop = breakpoint & BREAKPOINT.DESKTOP;

    const [isEverythingReady, setIsEverythingReady] = useState(false);

    useEffect(() => {
      const font = new FontFaceObserver('Roboto', { weight: 500});

      font.load().then(function() {
        setIsEverythingReady(true);
      })
    }, []);

    if (!isEverythingReady) {
        return <div id="loading"><div className="box-shadow">{_('loading')}...</div></div>;
    }

    return <>
    {!!isMobile && <HomePageMobile />}
    {!!isTabletOrMobileHighResLandscape && <HomePageTablet />}
    {!!isDesktop && <HomePageDesktop />}
    </>;
}

export default HomePage;
