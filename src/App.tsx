import { DashProvider } from "./hooks/useDash.tsx";
import { AppRoutes } from "./routes.tsx";
import { Global } from "./styles/global.ts";

function App() {
  return (
    <DashProvider>
      <AppRoutes />
      <Global />
    </DashProvider>
  );
}

export default App;
