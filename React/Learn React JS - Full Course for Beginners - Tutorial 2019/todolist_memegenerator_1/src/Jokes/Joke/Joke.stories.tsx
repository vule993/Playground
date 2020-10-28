/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Joke from './Joke';

storiesOf('Joke', module).add('default', () => <Joke question="story question" punchline="story punchline" />);
