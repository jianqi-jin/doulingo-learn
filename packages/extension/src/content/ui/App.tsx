/**
 * @file App.tsx
 * @author jjq
 * @description App.tsx
 */

import React from 'react';
import { play, pause } from '../utils/audio';
import styles from './App.module.scss';
import { Button } from '@douyinfe/semi-ui';
const App = () => {
  const handlePlayAudio = () => {
    audio();
  };
  return (
    <div className={styles.app}>
      <Button onClick={play}>play</Button>
      <Button onClick={pause}>pause</Button>
    </div>
  );
};

export default App;
