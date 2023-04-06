import { useState } from "react";
import { MainPage } from "../../pages";
function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
