import React, { useCallback, useMemo, useState } from "react";
import { ReadsSampler } from "./ReadsSampler";
import { DeBrujinGraphNodeCreator } from "./DeBrujinGraphNodeCreator";

const flexStyle = { display: "flex" as const, flexDirection: "column" as const };

const App: React.FunctionComponent = () => {
  const [overlapSize, setOverlapSize] = useState(8);
  const [message, setMessage] = useState(
    "u9reng9uh2349827thgjaiuen0s87w34oq984q374hqagh88a7q2h4tbwfejhdv98w5obawhjszdxgv98b4ahsuzy98deo4bh3yZ8gdvsbeh4ayoszidxbvsdhea8ozzkhjdve83oaiubawoeeehdbaiwbvebhzxcvbzxvkbaeagug2478e7828484gewfbasdvvvvbcnmxvkzjsdaugehwo4837oawiyegszdbhczjvsadiewhqoq4alewzsschj"
  );

  const setRandomMessage = useCallback(() => {
    const c = "abcdefghijklmnopqrstuvwxyz0123456789";
    const baseLength = 150;
    const additionalLength = Math.floor(Math.random() * 500);

    let message = "";
    for (let i = 0; i < baseLength + additionalLength; i++) {
      message += c[Math.floor(Math.random() * c.length)];
    }

    setMessage(message);
  }, [setMessage]);

  const reads = useMemo(() => {
    return new ReadsSampler(message).createReads(overlapSize);
  }, [message, overlapSize]);

  const graphNodes = useMemo(() => {
    return new DeBrujinGraphNodeCreator(reads).createNodes(Math.floor(overlapSize / 2));
  }, [reads, overlapSize]);

  return (
    <div className="App">
      <div style={flexStyle}>
        <label>read overlap size</label>
        <input type="number" value={overlapSize} onChange={e => setOverlapSize(Number(e.target.value))}/>
      </div>
      <div style={flexStyle}>
        <label>input alphabets</label>
        <textarea
          rows={30}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={setRandomMessage}>Generate random</button>
      </div>

      <div style={flexStyle}>
        <label>reads</label>
        <textarea
          disabled={true}
          rows={30}
          value={reads.join("\n")}
        />
      </div>

      <div style={flexStyle}>
        <label>de-Bruijn graph nodes</label>
        <textarea
          disabled={true}
          rows={30}
          value={graphNodes.map(nodes => nodes.join(" => ")).join("\n")}
        />
      </div>

      <div style={flexStyle}>
        <label>assembled reads</label>
        <textarea disabled={true} cols={10} />
      </div>
    </div>
  );
};

export default App;
