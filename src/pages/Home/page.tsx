import useBreakpoint, { BREAKPOINT } from "src/hooks/useBreakpoint";
import HomePageMobile from './breakpoints/Mobile';

function HomePage() {

  const breakpoint = useBreakpoint();

  return <>
    {breakpoint === BREAKPOINT.SMARTPHONE_PORTRAIT && <HomePageMobile />}
  </>;
}

export default HomePage;
