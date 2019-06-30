import React from 'react';
import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import LinearGradient from 'react-native-linear-gradient';

import {
  UserInfo, FloatChat, Button, Issues,
} from '~/components';
import CarouselComponent from './components/Carousel';

import {
  Container, styles, Buttons,
} from './styles';
import { colors } from '~/theme';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <StatusBar background={colors.lightBlue} />

        <LinearGradient style={[styles.Banner, { paddingTop: 40 }]} colors={[colors.primary, colors.lightBlue]}>
          <UserInfo />

          <CarouselComponent customStyles={styles.Carousel} />

          <FloatChat />
        </LinearGradient>

        <Buttons>
          <Button
            onPress={() => navigation.navigate('Forum', { type: 'help' })}
            textSize={20}
            text="ajudar"
            color="secondary"
            stylesContainer={styles.button}
          />

          <Button
            onPress={() => navigation.navigate('Forum', { type: 'ask' })}
            textSize={20}
            text="perguntar"
            stylesContainer={styles.button}
          />

        </Buttons>

        <Issues />
      </Container>
    );
  }
}

export default withNavigation(Home);
