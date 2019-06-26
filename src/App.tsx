import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <label>input alphabets</label>
        <textarea cols={10} />
        <button>Generate random</button>
      </div>

      <div>
        <label>reads</label>
        <textarea disabled={true} cols={10} />
      </div>

      <div>
        <label>assembled reads</label>
        <textarea disabled={true} cols={10} />
      </div>
    </div>
  );
};

export default App;
