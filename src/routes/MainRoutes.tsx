import React, { lazy,Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// implementing lazy loading of the components
const NetflixPage = lazy(() => import("../pages/NetflixPage"));
const CreateUser = lazy(() => import("../components/users/CreateUser"));
const EditUser = lazy(() => import("../components/users/EditUser"));
const UserDetails = lazy(() => import("../components/users/UserDetails"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const CounterPage = lazy(() => import("../pages/CounterPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const TodosPage = lazy(() => import("../pages/TodosPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));


const MainRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
            </Suspense>
  )
}

export default MainRoutes
