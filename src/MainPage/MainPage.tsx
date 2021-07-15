import React, { useState } from 'react';

import Navigation from '../Navigation/Navigation';

const MainPage = () => {
  const [openState, setOpenState] = useState<boolean>(false);
  return (
    <>
      <Navigation openState={openState} setOpenState={setOpenState} />
      <section
        className="contents-area"
        onMouseOver={() => {
          setOpenState(false);
          document.querySelector('.contents-area')?.classList.remove('blur');
        }}
      ></section>
    </>
  );
};

export default MainPage;
