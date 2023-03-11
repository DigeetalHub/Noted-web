import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [whiteNav, setWhiteNav] = useState(false);
  const [scrollToFeatures, setScrollToFeatures] = useState(false);

  const scroll = () => {
    scrollBy(0, 80);
    setWhiteNav(!whiteNav);
  };

  const scrollNav = useCallback(() => {
    if (document.documentElement.scrollTop > 20) {
      setWhiteNav(true);
    } else {
      setWhiteNav(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", scrollNav);
    //eslint-disable-next-line
  }, []);

  const values = {
    whiteNav,
    setWhiteNav,
    scroll,
    scrollNav,
    scrollToFeatures,
    setScrollToFeatures,
  };

  return (
    <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
  );
};

const useScroll = () => useContext(ScrollContext);

export { ScrollProvider, useScroll };
