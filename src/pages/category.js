import React from "react";
import Man from "../images/c-1.jpeg";
import Women from "../images/c-2.jpeg";
import Kids from "../images/c-3.jpeg";
const datas = [
  {
    id: 1,
    image: Man,
    text: "Man",
  },
  {
    id: 2,
    image: Women,
    text: "Women",
  },
  {
    id: 3,
    image: Kids,
    text: "Kids",
  },
];
const Category = () => {
  return (
    <div className="flex flex-wrap mt-12">
      {datas.map((item) => (
        <div key={item.id} className="product-item">
          <img
            src={item.image}
            alt=""
            className="rounded mb-6 shadow cursor-pointer"
          />
          <h2 className="text-2xl mb-2 text-center">{item.text}</h2>
        </div>
      ))}
      <div className="w-full text-center text-gray-600">
        參考圖片資料(此網頁只做demo用途):https://www.lativ.com.tw/
      </div>
    </div>
  );
};

export default Category;
