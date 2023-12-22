import React, { useState } from "react";
import data from "../data";
import "../App.css";

const Acc = () => {
  const [selected, setselected] = useState(null);
  const [enableMultislection, setenableMultislection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = (qId) => {
    setselected(qId === selected ? null : qId);
  };

  const handleEnable = () => {
    setenableMultislection(!enableMultislection);
  };

  const hanldeMultiple = (qId) => {
    let myMultiple = [...multiple];
    let index = myMultiple.indexOf(qId);

    if (index === -1) {
      myMultiple.push(qId);
    } else {
      myMultiple.splice(index, 1);
    }

    setMultiple(myMultiple);
  };

  const enable = "Enable Multi Selection";
  const disable = "disable Multi Selection";

  return (
    <div className="accordian">
      <button className="enablebtn" onClick={handleEnable}>
        {enableMultislection ? disable : enable}
      </button>
      {data && data.length > 0 ? (
        data.map((d) => (
          <div className="elem">
            <div
              className="ques"
              key={d.id}
              onClick={
                enableMultislection
                  ? () => hanldeMultiple(d.id)
                  : () => handleSelection(d.id)
              }
            >
              <p>{d.question}</p>
              <span>+</span>
            </div>
            {enableMultislection
              ? multiple.indexOf(d.id) !== -1 && (
                  <div className="content">{d.answer}</div>
                )
              : selected === d.id && <div className="content">{d.answer}</div>}
            {/* {selected === d.id ? (
              <div className="content">{d.answer}</div>
            ) : null} */}
          </div>
        ))
      ) : (
        <div> no data found</div>
      )}
    </div>
  );
};

export default Acc;
