const data = [
  {
    id: 23,
    icon: "https://play-lh.googleusercontent.com/YAKMX5YFcuE8_NogkbM7gkqrhBY6CUefbpULAVnNZLSitbo9S3Dw2FIYNqhW0d5G94Y=w240-h480-rw",
    pkgId: "com.venmo",
    pkgName: "Venmo",
    version: "",
    download: "50M+",
    age: "Teen",
    category: "Finance",
    price: "",
    rating: "4.2",
    developer: "PayPal, Inc.",
    ios_url: "",
    tags: [
      ["4.2\nstar", "720K reviews"],
      ["50M+", "Downloads"],
      ["", "Everyone\ninfo"],
    ],
    googleplay_url: "https://play.google.com/store/apps/details?id=com.venmo",
    isHighlight: false,
  },
  {
    id: 24,
    icon: "https://play-lh.googleusercontent.com/Vw1lnV8h7LKV9P4MNfx6GJbVRMj8rl14R0Yxo1eE_UqYPk-7g6pw3RGil19kbpU3WmY=w240-h480-rw",
    pkgId: "gov.irs",
    pkgName: "IRS2Go",
    version: "",
    download: "10M+",
    age: "Teen",
    category: "Finance",
    price: "",
    rating: "3.9",
    developer: "Internal Revenue Service",
    ios_url: "",
    tags: [
      ["3.9\nstar", "72.4K reviews"],
      ["10M+", "Downloads"],
      ["", "Everyone\ninfo"],
    ],
    googleplay_url: "https://play.google.com/store/apps/details?id=gov.irs",
    isHighlight: false,
  },
  {
    id: 25,
    icon: "https://play-lh.googleusercontent.com/laKlxh3GNIID9sdt8hIqmj12zK9z6Nqb-04wqogYkQxuA2bwFIYnbcBs5FuF7SmcnQ=w240-h480-rw",
    pkgId: "com.brisk.jpay",
    pkgName: "JPay",
    version: "",
    download: "5M+",
    age: "Teen",
    category: "Finance",
    price: "",
    rating: "4.1",
    developer: "Jpay Mobile",
    ios_url: "",
    tags: [
      ["4.1\nstar", "102K reviews"],
      ["5M+", "Downloads"],
      ["", "Everyone\ninfo"],
    ],
    googleplay_url:
      "https://play.google.com/store/apps/details?id=com.brisk.jpay",
    isHighlight: false,
  },
  {
    id: 26,
    icon: "https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk=w240-h480-rw",
    pkgId: "com.google.android.apps.nbu.paisa.user",
    pkgName: "Google Pay: Save and Pay",
    version: "",
    download: "1B+",
    age: "Teen",
    category: "Finance",
    price: "",
    rating: "4.1",
    developer: "Google LLC",
    ios_url: "",
    tags: [
      ["4.1\nstar", "9.84M reviews"],
      ["1B+", "Downloads"],
      ["", "Everyone\ninfo"],
    ],
    googleplay_url:
      "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user",
    isHighlight: false,
  },
  {
    id: 27,
    icon: "https://play-lh.googleusercontent.com/awnVMi-BtmYLp6lgF19Qv0McVObf53HW7HQX7XY_cE7P6F9C6D7boWEtWqsmpaUTI68=w240-h480-rw",
    pkgId: "com.creditkarma.mobile",
    pkgName: "Intuit Credit Karma",
    version: "",
    download: "10M+",
    age: "Teen",
    category: "Finance",
    price: "",
    rating: "4.7",
    developer: "Credit Karma, LLC",
    ios_url: "",
    tags: [
      ["4.7\nstar", "2.7M reviews"],
      ["10M+", "Downloads"],
      ["", "Everyone\ninfo"],
    ],
    googleplay_url:
      "https://play.google.com/store/apps/details?id=com.creditkarma.mobile",
    isHighlight: false,
  },
  {
    id: 28,
    icon: "https://play-lh.googleusercontent.com/5kgB8U_6961ffXmwwY-rZmc354n-5gyWW4-mHOMPxKhy5MvDU7DAUYJudvdysMwtAg=w240-h480-rw",
    pkgId: "com.greendot.walmart.prepaid",
    pkgName: "Walmart MoneyCard",
    version: "",
    download: "1M+",
    age: "Teen",
    category: "Finance",
    price: "",
    rating: "3.8",
    developer: "Green Dot",
    ios_url: "",
    tags: [
      ["3.8\nstar", "49.9K reviews"],
      ["1M+", "Downloads"],
      ["", "Everyone\ninfo"],
    ],
    googleplay_url:
      "https://play.google.com/store/apps/details?id=com.greendot.walmart.prepaid",
    isHighlight: false,
  },

  {
    id: 29,
    icon: "https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8=w240-h480-rw",
    pkgId: "com.peacocktv.peacockandroid",
    pkgName: "Peacock TV: Stream TV & Movies",
    version: "",
    download: "10M+",
    age: "Teen",
    category: "Entertainment",
    price: "",
    rating: "4.5",
    developer: "Peacock TV LLC",
    ios_url: "",
    tags: [
      ["4.5\nstar", "350K reviews"],
      ["10M+", "Downloads"],
      ["", "Teen\ninfo"],
    ],
    googleplay_url:
      "https://play.google.com/store/apps/details?id=com.peacocktv.peacockandroid",
    isHighlight: false,
  },
];

const imps = [];

const res = data.map((item, idx) => {
  console.log(item.pkgId);
  imps.push(
    `import ${
      item.pkgId.split(".")[item.pkgId.split(".").length - 1]
    } from "@/icons/${item.pkgId}.png";`
  );
  return {
    ...item,
    id: idx,
  };
});

console.log(imps.join("\n"));
