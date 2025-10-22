import React, { useState } from "react";
import "./../styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const handleUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleProcess = async () => {
    // pretend AI magic here 😎
    setOutput(image);
  };

  return (
    <div className="app-container">
      <h1>MangaFix 🖋️</h1>
      <input type="file" accept="image/*" onChange={handleUpload} />
      <textarea
        placeholder="Paste your translation text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleProcess}>✨ Fix Bubble</button>

      <div className="preview">
        {output && <img src={output} alt="preview" />}
      </div>
    </div>
  );
}
