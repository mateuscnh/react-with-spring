import "./GlobalStyles.css";

import "antd/dist/antd.css";

import AppRoutes from "./routes";
import { MainProvider } from "./contexts/MainContext";

function App() {
  return (
    <MainProvider>
      <div className="app">
        <AppRoutes />
      </div>
    </MainProvider>
  );
}

export default App;
