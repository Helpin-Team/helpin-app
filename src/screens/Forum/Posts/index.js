import React, { useState } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

import {
  FloatChat, Button, Post, Select,
} from '../../../components';

import {
  Container, Chat, Tabs, styles,
} from '../styles';
import { SelectContainer } from './styles';

function Posts({ navigation }) {
  const initialType = navigation.getParam('type');
  const [typeTab, setTypeTab] = useState(initialType);

  return (
    <Container>
      <Transition shared="Header">
        <View>
          <Chat>
            <FloatChat />
          </Chat>

          <Tabs>
            <Button
              text="ajudar"
              color="secondary"
              disabled={typeTab === 'ask'}
              onPress={() => navigation.navigate('Forum', { type: 'help' })}
              stylesContainer={[styles.ButtonCustom, styles.ButtonLeft]}
            />

            <Button
              text="perguntar"
              disabled={typeTab === 'help'}
              onPress={() => navigation.navigate('Forum', { type: 'ask' })}
              stylesContainer={[styles.ButtonCustom, styles.ButtonRight]}
            />
          </Tabs>
        </View>
      </Transition>

      <SelectContainer>
        <Select items={['teste', 'test2']} />
      </SelectContainer>

      <Post
        status={false}
        date="21 jan 2019 15:24"
        title="Problema para configurar react native"
        course="Análise e desenvolvimento de sistemas"
      />

      <Post
        status={false}
        date="21 jan 2019 15:24"
        title="Problema para configurar react native"
        course="Análise e desenvolvimento de sistemas"
      />

      <Post
        status={false}
        date="21 jan 2019 15:24"
        title="Problema para configurar react native"
        course="Análise e desenvolvimento de sistemas"
      />
    </Container>
  );
}

export default withNavigation(Posts);
