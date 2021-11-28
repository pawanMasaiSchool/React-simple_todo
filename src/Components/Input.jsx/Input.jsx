import { useState } from "react";
import styling from "./Input.module.css";

export default function Input({ CreatingTask }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddingTask = () => {
    CreatingTask(text);
    // console.log(text)
  };

  // console.log(text);
  return (
    <>
      <input
        value={text}
        placeholder="Write Something"
        onChange={handleChange}
        className={styling.myInput}
      />
      <button className={styling.addBtn} onClick={handleAddingTask}>
        {" "}
        +{" "}
      </button>
    </>
  );
}
