import { DashProvider } from "./hooks/useDash.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";
import { AppRoutes } from "./routes.tsx";
import { Global } from "./styles/global.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import "tippy.js/dist/tippy.css";

function App() {
  return (
    <DashProvider>
      <AuthProvider>
        <AppRoutes />
        <Global />
      </AuthProvider>
    </DashProvider>
  );
}

export default App;
