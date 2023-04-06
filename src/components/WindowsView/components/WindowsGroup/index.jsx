import { useState } from "react";
import { Panel } from "react-resizable-panels";
import MyWindow from "../MyWindow";
import "./style.css";

function WindowsGroup({ windows }) {
  const [activeWindow, setactiveWindow] = useState(0);
  return (
    <div className="windows-group-container">
      <div className="windows-group-bar">
        <div className="windows-group-bar-tabs">
          {windows.length > 0
            ? windows.map((window, index) => {
                return (
                  <div
                    key={index}
                    className={`windows-group-bar-tab ${index == activeWindow ? "active" : null }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setactiveWindow(index);
                    }}
                  >
                    <div>{window.name}</div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Close
                    </button>
                  </div>
                );
              })
            : null}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Close
        </button>
      </div>
      <div className="windows-group-active-window">
        <MyWindow name={windows[activeWindow].name} />
      </div>
    </div>
  );
}

export default WindowsGroup;
