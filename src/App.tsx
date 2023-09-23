import React from 'react';

// Components
import AppLogo from './components/AppLogo/AppLogo';
import TextInput from './components/TextInput/TextInput';
import ProfileButton from './components/ProfileButton/ProfileButton';

// Assets
import ProfileImage from './assets/images/terry_crews.jpg';

const App = (): React.JSX.Element => {
  return (
    // App Container
    <div className="text-center">
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-[#051D3B] text-lg text-white">
        <AppLogo />

        <br />

        <TextInput />

        <br />

        <ProfileButton name="Terry Crews" imageSrc={ProfileImage} />
      </div>
    </div>
  );
};

export default App;
