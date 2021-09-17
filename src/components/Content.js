import React from "react";
import CryptodashImage from "../images/cryptodash.png";
import SlackImage from "../images/react-slack.png";
import Product from "./Product";
const datas = [
  {
    id: 1,
    name: "虛擬貨幣圖表",
    desc: "選擇查詢的虛擬貨幣並觀察他的升跌狀態",
    image: CryptodashImage,
  },
  {
    id: 2,
    name: "模擬slack",
    desc: "模擬Slack 利用 SemanticUI、Firebase等製作",
    image: SlackImage,
  },
  {
    id: 3,
    name: "虛擬貨幣圖表",
    desc: "選擇查詢的虛擬貨幣並觀察他的升跌狀態",
    image: CryptodashImage,
  },
  {
    id: 4,
    name: "模擬slack",
    desc: "模擬Slack 利用 SemanticUI、Firebase等製作",
    image: SlackImage,
  },
  {
    id: 5,
    name: "虛擬貨幣圖表",
    desc: "選擇查詢的虛擬貨幣並觀察他的升跌狀態",
    image: CryptodashImage,
  },
  {
    id: 6,
    name: "模擬slack",
    desc: "模擬Slack 利用 SemanticUI、Firebase等製作",
    image: SlackImage,
  },
];
const Content = () => {
  return (
    <>
      <div className="flex flex-wrap mt-12">
        {datas.map((item) => {
          const { id, image, name, desc } = item;
          return <Product key={id} image={image} name={name} desc={desc} />;
        })}
      </div>
    </>
  );
};

export default Content;
