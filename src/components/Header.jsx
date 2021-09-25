import  React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {


  return (
    <Appbar.Header>

      <Appbar.Content title="COVID-STATS" subtitle="covid stats app" />

    </Appbar.Header>
  );
};

export default Header;