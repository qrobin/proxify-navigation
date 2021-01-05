import './common.css';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Layout } from './components/Layout';

const history = createBrowserHistory()

function AppMain() {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  )
}

export default AppMain;
