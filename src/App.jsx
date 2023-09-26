import React, { useState } from "react";
import "./App.css";
import { OpeningJSX } from "./components/ReactJSX";
import CompAndProps from "./components/CompAndProps";
import Button from "./elements/Button";
import TextInput from "./elements/TextInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hasil, setHasil] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const tampilkanHasil = (event) => {
    event.preventDefault();
    setHasil(inputValue);
  };

  const hapusHasil = (event) => {
    event.preventDefault();
    setHasil("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <OpeningJSX />
        <div className="Components">
          <CompAndProps bgColor="snow" bgbgColor="skyblue" />
          <form onSubmit={tampilkanHasil}>
            <TextInput
              border="red"
              placeholder="Nama"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button background="blue" type="submit">
              Submit
            </Button>
            <Button background="red" type="submit" onClick={hapusHasil}>
              Delete
            </Button>
            <div>{hasil}</div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
