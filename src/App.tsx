import { RouterProvider } from "react-router-dom";
import "./App.css";
import { createRouter } from "./routes";
import { DesignScaleProvider } from "./design/DesignScaleContext";

function App() {
  const router = createRouter();
  return (
    <DesignScaleProvider>
      <RouterProvider router={router} />
    </DesignScaleProvider>
  );
}

export default App;
