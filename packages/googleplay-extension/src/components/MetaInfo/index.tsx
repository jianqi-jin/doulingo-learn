// By Jianqi Jin

import React, { useState } from "react";
import { useLocalStorageState } from "ahooks";

import styles from "./index.module.scss";
import { Button, Input } from "@douyinfe/semi-ui";
const MetaInfo = () => {
  const [domStr, setDomStr] = useState("w7Iutd");
  const [IconStr, setIconDomStr] = useState("Il7kR");
  const [storageData, setStorageData] = useLocalStorageState("extStorageData", {
    defaultValue: [],
  });
  let totalRes = {};
  const handleExtra = () => {
    try {
      const children = document.getElementsByClassName(domStr)?.[0]?.children;
      const tags = [];
      for (const item of children) {
        const tmp = [];
        tmp.push(item.firstChild?.innerText);
        tmp.push(item.lastChild?.innerText);
        tags.push(tmp);
      }
      let iconDom;
      iconDom = document.getElementsByClassName(IconStr)?.[0] || document.getElementsByClassName("qxNhq")?.[0];
      const icon = iconDom.firstChild.src;
      let pkgId = "";
      location.href.replace(/id=(.*?)(&|$)/, (target, $1) => (pkgId = $1));
      const pkgName = document.getElementsByClassName("Fd93Bb")[0].innerText;
      const category =
        document.getElementsByClassName("Uc6QCc")[0].lastChild.innerText;
      const price =
        document.getElementsByClassName("VfPpkd-vQzf8d")[0].innerText ===
        "Install on more devices"
          ? "Free"
          : "";
      const rating = document.getElementsByClassName("jILTFe")[0].innerText;
      const developer =
        document.getElementsByClassName("Vbfug auoIOc")[0].innerText;
      const age = "Teen";
      totalRes = {
        icon,
        pkgId,
        pkgName,
        version: "",
        download: tags[1][0],
        age,
        category,
        price,
        rating,
        developer,
        ios_url: "",
        tags,
        googleplay_url: location.href,
        isnot_big: false,
      };
      setStorageData((val: any[]) => {
        const exists = val?.find((item) => item.pkgId === totalRes.pkgId);
        if (exists) {
            console.log(exists);
          return val;
        }
        val?.push(totalRes);
        return [...val];
      });
      console.log(totalRes);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.MetaInfoWrapper}>
      MetaClass: <Input value={domStr} onChange={(v) => setDomStr(v)}></Input>
      IconClass:{" "}
      <Input value={IconStr} onChange={(v) => setIconDomStr(v)}></Input>
      <Button onClick={() => handleExtra()}>提取Meta</Button>
    </div>
  );
};

export default MetaInfo;
