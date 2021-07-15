import React, { useState } from 'react';

import Navigation from './Navigation/Navigation';

const MainPage = () => {
  const [openState, setOpenState] = useState<boolean>(false);
  return (
    <>
      <Navigation openState={openState} setOpenState={setOpenState} />
      <section
        className="contents-area"
        onMouseOver={() => {
          setOpenState(false);
        }}
      ></section>
    </>
  );
};

export default MainPage;
