import  React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({goBack}) => {


  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title="COVID-STATS" subtitle="covid stats app" />

    </Appbar.Header>
  );
};

export default Header;