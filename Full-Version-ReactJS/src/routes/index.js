import DefaultLayout from '../layouts/DefaultLayout'
import Home from './Home'
import ROUTES from './routes'

export const createRoutes = () => ({
  path: '/',
  component: DefaultLayout,
  indexRoute: Home,
  childRoutes: ROUTES
})

export default createRoutes
