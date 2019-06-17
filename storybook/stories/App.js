import React from 'react';
import { storiesOf } from '@storybook/react-native';
import App from '../../App';


const stories = storiesOf('App', module);
stories.add('default', () => <App />);
