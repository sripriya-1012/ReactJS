import { BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { ErrorBoundary } from "react-error-boundary";
import MainRoutes from "./routes/MainRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
           <MainRoutes/>
          </ErrorBoundary>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
