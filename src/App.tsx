/* <---React---> */
import React, { FC } from 'react';

/* <---Global styles---> */
import GlobalStyles from './shared/styles/global-styles';

/* <---Components---> */
import NavBar from './components/nav-bar/nav-bar';

const App: FC = (): JSX.Element => {
  return (
    <>
      <NavBar/>
      <GlobalStyles/>
    </>
  );
}

export default App;
