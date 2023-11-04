import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./page/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProfilePage />
    </div>
  );
}

export default App;
