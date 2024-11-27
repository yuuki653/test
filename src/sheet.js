import React, { useState } from "react";
import styles from "./styles.module.css";

import Number from "./number";

const Sheet = ({}) => {
  const bingo_Arr = ["B", "I", "N", "G", "O"];

  let arr = [];
  for (let col = 0; col < 5; col++) {
    let array = [];
    while (array.length < 5) {
      let num = Math.floor(Math.random() * 15 + (15 * col + 1));
      if (!array.includes(num)) {
        array.push(num);
      }
    }
    arr.push(array);
  }
  arr[2][2] = "free";

  const chooseArr = [...Array(75)].map((_, i) => i + 1);
  // console.log(chooseArr);
  // console.log(value);

  const handleClick = () => {
    //   // if (chooseArr.length > 0) {
    //   //   let index = Math.floor(Math.random() * chooseArr.length);
    //   //   let searchNum = chooseArr[index];
    //   //   alert(`${searchNum}番`);
    //   //   chooseArr.splice(index, 1);
    //   //   console.log(chooseArr);
    //   // }
    // const searchNum = 10;
    // alert(`${searchNum}番`);
    // const foundNum = arr.flat().find((num) => num === searchNum);
    // console.log(foundNum);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            {/* {bingo_Arr.map((data) => {
              return (
                <td className={styles.bingo} key={data.key}>
                  {data.word}
                </td>
              );
            })} */}
            {bingo_Arr.map((data) => {
              return (
                <td key={data} className={styles.bingo}>
                  {data}
                </td>
              );
            })}
          </tr>

          {/* {[...Array(5)].map(() => {
            return (
              <tr>
                {value.map((data, i) => {
                  return <Number value={data[i]} />;
                })}
              </tr>
            );
          })} */}

          {arr.map((_, i) => {
            return (
              <tr>
                {arr.map((data) => {
                  return <Number data={data[i]} key={data[i]} id={data[i]} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button onClick={handleClick}>セット</button>
    </>
  );
};

export default Sheet;
