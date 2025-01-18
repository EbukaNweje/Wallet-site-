import React from 'react';
import { SyncLoader } from 'react-spinners';

const Loading = () => {

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SyncLoader color='#2a64f1' />
    </div>
  );
};

export default Loading;
