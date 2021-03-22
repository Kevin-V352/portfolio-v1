/* <---React---> */
import React, { FC, useEffect, useState } from 'react';

/* <---Global styles---> */
import GlobalStyles from './shared/styles/global-styles';

/* <---Components---> */
import NavBar from './components/nav-bar/nav-bar';
import Homepage from './components/homepage/container/homepage';

const App: FC = () => {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = document.getElementById("loader-container");
    if(loader) {
      loader.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          loader.remove();
        }, 2000);
      setLoading(false);
    };
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <NavBar/>
      <Homepage/>
      <GlobalStyles/>
    </>
  );
};

export default App;


