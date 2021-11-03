import  React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({goBack,dis}) => {


  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} disabled={dis}/>
      <Appbar.Content title="COVID-app" subtitle="covid app" />

    </Appbar.Header>
  );
};

export default Header;