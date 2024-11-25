// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

// clerk
import { ClerkProvider } from '@clerk/clerk-react'

// key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// redux
import { Provider } from 'react-redux'
import store from './store/store.js'

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter
([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/single_product/:productID',
        element: <SingleProductPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>
  </StrictMode>,
)
