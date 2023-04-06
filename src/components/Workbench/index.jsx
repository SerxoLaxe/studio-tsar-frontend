import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import WindowsView from "../WindowsView";
import "./style.css";
function Workbench() {
  return (
    <div className="workbench">
      <PanelGroup autoSaveId="main-panel" direction="horizontal">
        <Panel>Left</Panel>
        <PanelResizeHandle className="handle horizontal-handle"/>
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <WindowsView/>
            </Panel>
            <PanelResizeHandle className="handle vertical-handle"/>
            <Panel>Right Bottom</Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default Workbench;
