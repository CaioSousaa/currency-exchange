import { DashProvider } from "./hooks/useDash.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";
import { AppRoutes } from "./routes.tsx";
import { Global } from "./styles/global.ts";

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
