import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';


configure(() => require('./stories'), module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

// This was required to enable hot module loading Ref: https://github.com/storybooks/storybook/issues/2081
export default class StorybookUIRootWrapper extends React.PureComponent {
  render() {
    return <StorybookUIRoot />;
  }
}
