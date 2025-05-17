import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./contexts/AppContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);
