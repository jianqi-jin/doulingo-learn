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
export const initListenCenter = () => {
  setTimeout(() => {
    const rootListenCenter = document.createElement('div');
    rootListenCenter.id = 'doulingo-ext-root-listen-center';
    document.getElementsByClassName('popoverDom')[0].appendChild(rootListenCenter);
    createRoot(rootListenCenter).render(<ListenCenter />);
  }, 1e3);
}

export default App;
