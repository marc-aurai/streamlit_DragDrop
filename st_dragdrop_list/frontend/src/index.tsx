import React from "react"
import ReactDOM from "react-dom"
import { RenderData } from "streamlit-component-lib";
import { useRenderData, StreamlitProvider } from "streamlit-component-lib-react-hooks"
import ST_DragDropList from "./ST_DragDropList"

const ST_DragDropListComponent: React.VFC = () => {
  const renderData: RenderData = useRenderData();
  return (
    <ST_DragDropList {...{ ...renderData.args, "theme": renderData.theme }} />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <ST_DragDropListComponent />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
