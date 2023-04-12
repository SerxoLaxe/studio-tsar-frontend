import { useState } from "react";
import { LandingPage } from "../../pages";
function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
