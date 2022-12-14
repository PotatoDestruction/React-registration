import { Routes, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.css'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Add from './components/Add/Add';


function App() {

  const routes = [
    {
      path: '/',
      element: <Layout pages={['login', 'register']} ><Register /></Layout>
    },
    {
      path: '/register',
      element: <Layout pages={['login', 'register']} ><Register /></Layout>
    },
    {
      path: '/login',
      element: <Layout pages={['login', 'register']} ><Login /></Layout>
    },
    {
      path: '/home',
      element: <Layout pages={['home', 'add']} ><Home /></Layout>
    },
    {
      path: '/add',
      element: <Layout pages={['home', 'add']} ><Add /></Layout>
    },
    {
      path: '*',
      element: <div>Wrong address</div>
    },

  ]

  return (
    <Routes>
      {routes.map((route, num) => {
        return (
          <Route key={num} path={route.path} element={route.element} />
        )
      })}
    </Routes>
  );
}

export default App;
