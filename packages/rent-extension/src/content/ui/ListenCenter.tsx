/**
 * @file App.tsx
 * @author jjq
 * @description App.tsx
 */

import React, { useEffect, useState } from 'react';
import { play, pause, initAudio } from '../utils/audio';
import styles from './ListenCenter.module.scss';
import { Button } from '@douyinfe/semi-ui';
import { createRoot } from 'react-dom/client';

const ListenCenter = () => {
  const [times, setTimes] = useState(0);
  const [transText, setTransText] = useState('');
  useEffect(() => {
    setTransText(document.getElementsByClassName('el-collapse-item__content')[1].innerText);
  }, []);
  const handleEnded = () => {
    setTimes(times => times + 1);
  };
  useEffect(() => {
    const cb = initAudio({
      onended: () => handleEnded()
    });
    return () => {
      cb();
    };
  }, []);
  return (
    <div className={styles.listenCenter}>
      <div>{transText}</div>
      <br/><br/>
      <Button onClick={play}>play</Button>
      times: {times}
      <Button onClick={pause}>pause</Button>
    </div>
  );
};

export default ListenCenter;
