import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import NetflixPage from "./pages/NetflixPage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import CreateUser from "./components/users/CreateUser";
import UserDetails from "./components/users/UserDetails";
import { ErrorBoundary } from "react-error-boundary";
import CounterPage from "./pages/CounterPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditUser from "./components/users/EditUser";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/netflix" element={<NetflixPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/create" element={<CreateUser />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/edit-user/:id" Component={EditUser} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/counter" element={<CounterPage />} />
              <Route path="/todos" element={<TodosPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
