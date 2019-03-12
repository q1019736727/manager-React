import Login from '../components/login'
import Home from '../components/home'
import App from '../App'

const router = [
  {
    path: '/',
    component: App,
    // childRoutes: [
    //     { path: 'login', component: Login },
    //     { path: 'home', component: Home },
    // ]
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  }
]
export default router