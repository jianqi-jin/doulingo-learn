/**
 * @file App.tsx
 * @author jjq
 * @description App.tsx
 */

import React, { useState } from 'react';
import { play, pause } from '../utils/audio';
import styles from './App.module.scss';
import { Button, Input, TextArea, Toast } from '@douyinfe/semi-ui';
import { createRoot } from 'react-dom/client';
import ListenCenter from './ListenCenter';
const App = () => {
  const [selector, setSelector] = useState('#listBox > ul > li.item-active.order-item.fd-clr.first > div.order-detail > div:nth-child(2) > table > tbody > tr > td.detail > table');
  const [list, setList] = useState<any[]>([]);
  const handleCopy = () => {
    const output = list.map(item => `${item.name}	${item.highPrice}	${item.price}	${item.info}		${item.class}	${item.picture}`.replace('\n', ' ')).join('\n');
    navigator.clipboard.writeText(output).then(() => {
      Toast.success('复制成功');
    }).catch(e => {
      Toast.error('复制失败');
    });
  };
  const handleExtra = () => {
    const idoc = document; //.querySelectorAll('iframe')[0].contentWindow.document;
    const dom = idoc.querySelector(selector);
    const trs = dom?.querySelectorAll('tr');
    let res = [];
    trs?.forEach(item => {
      const title = item.querySelector('.productName').innerText.trim();
      const color = item.querySelector('.spec-item-color').querySelector('span').innerText.trim();
      const price = item.querySelector('.s3').innerText * 3;
      const number = item.querySelector('.s4').innerText.trim();
      res.push({
        title,
        color,
        price,
        number
      });
    });
    console.log(res.map(item => `		${item.title}	${item.color}	${item.price}	${item.number}	 	无	200	 		性感战袍									`).join('\n'));
  };
  return (
    <div className={styles.app}>
      {/* <TextArea value={val} onChange={setVal} /> */}
      <Input value={selector} onChange={v => setSelector(v)} />
      当前条数：{list.length}
      <Button onClick={() => setList([])}>清空</Button>
      <Button onClick={handleExtra}>提取</Button>
      <Button onClick={handleCopy}>复制</Button>
    </div>
  );
};

export const init = (root: HTMLDivElement) => {
  createRoot(root).render(<App />);
}

export default App;
