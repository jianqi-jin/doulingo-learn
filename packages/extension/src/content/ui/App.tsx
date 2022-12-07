/**
 * @file App.tsx
 * @author jjq
 * @description App.tsx
 */

import React from 'react';
import { play, pause } from '../utils/audio';
import styles from './App.module.scss';
import { Button } from '@douyinfe/semi-ui';
import { createRoot } from 'react-dom/client';
import ListenCenter from './ListenCenter';
const App = () => {
  return (
    <div className={styles.app}>
      <Button onClick={play}>play</Button>
      <Button onClick={pause}>pause</Button>
    </div>
  );
};

export const init = (root: HTMLDivElement) => {
  createRoot(root).render(<App />);
}
export const initListenCenter = (root: HTMLDivElement) => {
  createRoot(root).render(<ListenCenter />);
}

export default App;
