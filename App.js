import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import InternshipsScreen from './screens/InternshipsScreen';
import RegisterScreen from './screens/RegisterScreen';
import SuccessScreen from './screens/SuccessScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Splash');
  const [registrationData, setRegistrationData] = useState(null);

  const navigate = (screen, data = null) => {
    if (data) setRegistrationData(data);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen navigate={navigate} />;
      case 'Home':
        return <HomeScreen navigate={navigate} />;
      case 'About':
        return <AboutScreen navigate={navigate} />;
      case 'Internships':
        return <InternshipsScreen navigate={navigate} />;
      case 'Register':
        return <RegisterScreen navigate={navigate} />;
      case 'Success':
        return <SuccessScreen navigate={navigate} data={registrationData} />;
      default:
        return <HomeScreen navigate={navigate} />;
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a237e" />
      {renderScreen()}
    </>
  );
}
