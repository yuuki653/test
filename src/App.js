import React, { useState } from "react";
import Sheet from "./sheet";

const App = () => {
  // const bingo_Arr = [
  //   { word: "B", key: "B" },
  //   { word: "I", key: "I" },
  //   { word: "N", key: "N" },
  //   { word: "G", key: "G" },
  //   { word: "O", key: "O" },
  // ];

  // let arr = [];
  // for (let col = 0; col < 5; col++) {
  //   let array = [];
  //   while (array.length < 5) {
  //     let num = Math.floor(Math.random() * 15 + (15 * col + 1));
  //     if (!array.includes(num)) {
  //       array.push(num);
  //     }
  //   }
  //   arr.push(array);
  // }

  // arr[2][2] = "free";

  // const [value, setValue] = useState([
  //   arr.flat().map((data) => {
  //     return { number: data, key: data, id: data, active: false };
  //   }),
  // ]);

  // value.flat()[12].active = true;
  // console.log(value.flat()[1]);

  return (
    <>
      <h1>Bingo App</h1>
      <Sheet />
    </>
  );
};

export default App;
