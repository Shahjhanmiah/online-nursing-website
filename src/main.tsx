import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/route.tsx'
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    <App />
    </Provider>
 
  </React.StrictMode>,
)
