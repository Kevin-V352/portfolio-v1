/* <---React---> */
import React, { FC } from 'react';

/* <---Global styles---> */
import GlobalStyles from './shared/styles/global-styles';

/* <---Components---> */
import NavBar from './components/nav-bar/nav-bar';
import Homepage from './components/homepage/container/homepage';

const App: FC = (): JSX.Element => {
  return (
    <>
      <NavBar/>
      <Homepage/>
      <GlobalStyles/>
    </>
  );
}

export default App;
