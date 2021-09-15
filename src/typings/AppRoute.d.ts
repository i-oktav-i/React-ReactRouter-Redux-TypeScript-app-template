import { RouteProps } from 'react-router-dom';

interface AppRoute extends RouteProps {
  name: string
  path: string
  redirect?: string
}
