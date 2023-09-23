import React from 'react';

// Components
import AppLogo from './components/AppLogo/AppLogo';
import TextInput from './components/TextInput/TextInput';

const App = (): React.JSX.Element => {
  return (
    // App Container
    <div className="text-center">
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-[#051D3B] text-lg text-white">
        <AppLogo />

        <br />

        <TextInput />
      </div>
    </div>
  );
};

export default App;
