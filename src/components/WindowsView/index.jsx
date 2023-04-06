import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { MyWindow, WindowsGroup } from "./components";
import "./style.css";
function WindowsView() {

  const [windowGroups, setWindowGroups] = useState([
    {
      id: 1,
      windows: [
        {
          name: "first window",
        },
        {
          name: 'second window'
        },
        {
          name: 'third window'
        },
      ],
    },
    {
      id: 2,
      windows: [
        {
          name: "fourth window",
        },
        {
          name: 'fifth window'
        },
        {
          name: 'sixth window'
        },
      ],
    },
    {
      id: 3,
      windows: [
        {
          name: "seventh window",
        },
        {
          name: 'height window'
        },
        {
          name: 'Ninth window'
        },
      ],
    },
  ]);

  return (
    <div className="windows-view">
      <PanelGroup className="windows-panel" direction="horizontal">
        {windowGroups.length > 0
          ? windowGroups.map((group, index) => {
              return (
                <>
                  <Panel>
                    <WindowsGroup windows={group.windows}/>
                  </Panel>
                  {index < windowGroups.length - 1 ? (
                    <PanelResizeHandle className="handle vertical" />
                  ) : null}
                </>
              );
            })
          : "no windows available"}
      </PanelGroup>
    </div>
  );
}

export default WindowsView;
