/**
 * @file App.tsx
 * @author jjq
 * @description App.tsx
 */

import "./style.css";
import React, { useState } from "react";
import { play, pause } from "../utils/audio";
import styles from "./App.module.scss";
import { Button, TextArea, Toast } from "@douyinfe/semi-ui";
import { createRoot } from "react-dom/client";
import ListenCenter from "./ListenCenter";
import MetaInfo from "../../components/MetaInfo";
const App = () => {
  const [val, setVal] = useState("");
  const [list, setList] = useState<any[]>([]);
  const handleCopy = () => {
    const output = list
      .map((item) =>
        `${item.name}	${item.highPrice}	${item.price}	${item.info}			${item.class}			${item.picture}`.replace(
          "\n",
          " "
        )
      )
      .join("\n");
    navigator.clipboard
      .writeText(output)
      .then(() => {
        Toast.success("复制成功");
      })
      .catch((e) => {
        Toast.error("复制失败");
      });
  };
  const handleExtra = () => {
    const tmpListDOM = document
      .querySelectorAll("iframe")[1]
      .contentWindow.document.querySelectorAll("u-spuitem");
    const tmpList: any[] = [];
    tmpListDOM.forEach((itemDOM) => {
      let tmpItem = {};
      tmpItem = {
        id: itemDOM.getAttribute("id"),
        class: document
          .querySelectorAll("iframe")[1]
          .contentWindow.document.querySelector("#tab-header > mt-view")
          .innerText,
        name: itemDOM.querySelector(
          ".spuitem-spuitem-components-food-item-header"
        )?.innerText,
        price: itemDOM.querySelector(".index-flashprice-price")?.innerText,
        info: itemDOM
          .querySelector(".spuitem-spuitem-components-spu-tag-container")
          ?.innerText?.trim(),
        highPrice: itemDOM.querySelector(".index-flashprice-originPrice")
          ?.innerText,
        picture:
          itemDOM
            .querySelector(".mt-image")
            ?.getAttribute("style")
            ?.split?.('url("')?.[1]
            ?.split('")')?.[0] || "",
      };
      tmpList.push(tmpItem);
    });
    setList((list) => {
      let newl = [...list, ...tmpList];
      let newlUnique: any[] = [];
      newl.reduce((chain, item) => {
        if (!chain[item.id]) {
          newlUnique.push(item);
          chain[item.id] = true;
        }
        return chain;
      }, {});
      return newlUnique;
    });
  };
  return (
    <div className={styles.app}>
      {/* <TextArea value={val} onChange={setVal} /> */}
      {/* 当前条数：{list.length}
      <Button onClick={() => setList([])}>清空</Button>
      <Button onClick={handleExtra}>提取</Button>
      <Button onClick={handleCopy}>复制</Button> */}
      {/* <div className="flex flex-row">
        <h1 className="text-4xl text-blue-700">My Webpack + Tailwind App</h1>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div> */}
      <MetaInfo />
    </div>
  );
};

export const init = (root: HTMLDivElement) => {
  createRoot(root).render(<App />);
};
export const initListenCenter = () => {
  setTimeout(() => {
    const rootListenCenter = document.createElement("div");
    rootListenCenter.id = "doulingo-ext-root-listen-center";
    document
      .getElementsByClassName("popoverDom")[0]
      .appendChild(rootListenCenter);
    createRoot(rootListenCenter).render(<ListenCenter />);
  }, 1e3);
};

export default App;
