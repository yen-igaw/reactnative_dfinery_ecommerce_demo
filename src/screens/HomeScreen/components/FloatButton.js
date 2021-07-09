import React, { useState } from 'react';
import { Linking } from 'react-native';
import { FAB } from 'react-native-paper';
import Colors from '../../../utils/Colors';

export const FloatButton = () => {
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <FAB.Group
      open={open}
      icon={open ? 'send' : 'square-edit-outline'}
      color='#fff'
      fabStyle={{
        backgroundColor: Colors.blue,
        bottom: 10,
      }}
      actions={[
        {
          icon: 'phone',
          onPress: () => Linking.openURL('https://join.skype.com/invite/YLHhEqFc3cSn'),
        },
        {
          icon: 'web',
          onPress: () => Linking.openURL('https://adbrix.vn/blog/'),
        },
        {
          icon: 'facebook-messenger',
          onPress: () =>
            Linking.openURL(
              'https://www.messenger.com/t/109394577476044',
            ),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};
