import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";

export function App() {
  return (
    <div>
      <AppLayout>
        <Home />
      </AppLayout>
    </div>
  )
}