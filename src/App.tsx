import React from 'react';

// Assets
import AppLogo from './components/AppLogo/AppLogo';
import TextInput from './components/TextInput/TextInput';

const App = (): JSX.Element => {
  return (
    // App Container
    <div className="text-center">
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-800 text-lg text-white">
        <AppLogo />
      </div>
    </div>
  );
};

export default App;
