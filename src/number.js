import React, { useState } from "react";
import styles from "./styles.module.css";

const Number = ({ data, id, value }) => {
  const [active, setActive] = useState(data === "free" ? true : false);
  // console.log(value.number);

  return (
    <>
      <td className={active ? styles.opened : ""}>{data}</td>
    </>
  );
};

export default Number;
