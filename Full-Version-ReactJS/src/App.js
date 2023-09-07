import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import DefaultLayout from './layouts/DefaultLayout'
import configureStore from './store'
import './App.scss'

const { store, persistor } = configureStore()

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />
  },
  {
    path: 'about',
    element: <div>About</div>
  }
])

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
