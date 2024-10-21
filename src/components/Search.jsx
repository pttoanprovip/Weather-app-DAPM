import { useState } from "react";
import "./styles.css";

function Search() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function keyPress(event) {
    if (event.key === "Enter") {
      console.log("HEllo");
      setInput("");
    }
  }

  return (
    <div className=" flex justify-center items-center">
      <input
        type="text"
        placeholder="Enter Your City"
        className="p-2 rounded-md w-full max-w-md my-8"
        onChange={handleChange}
        onKeyPress={keyPress}
        value={input}
        name="Input"
      />
    </div>
  );
}

export default Search;
