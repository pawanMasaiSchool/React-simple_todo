import { useState } from "react";
import styling from "./TodoItem.module.css";

export default function TodoItem({ title, status }) {
  const [toggle, setToggle] = useState(status);
  const [btn, setBtn] = useState(styling.green);
  const toggleStatus = (val) => {
    // console.log("before",toggle);
    if (toggle === "true") {
      setBtn(styling.green);
      setToggle("false");
    } else {
      setBtn(styling.red);
      setToggle("true");
    }
  };
  // console.log("after",toggle);
  return (
    <div className={styling.item}>
      <pre>
        {title}{" "}
        <button className={btn} onClick={() => toggleStatus(toggle)}>
          {toggle}
        </button>
      </pre>
    </div>
  );
}
