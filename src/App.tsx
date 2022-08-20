import { FC, Suspense, lazy } from 'react'
import Loading from '@src/components/loading'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// 私有路由
import ComPrivateRoute from '@src/components/private-route'

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {/*登录*/}
          <Route
            path='/login'
            component={lazy(
              () => import(/*webpackChunkName:"login"*/ '@pages/login/index')
            )}
          />
          {/*有头部的框架*/}
          <ComPrivateRoute
            isPrivate={true}
            path='/frame'
            title='框架'
            component={lazy(
              () => import(/*webpackChunkName:"frame"*/ '@pages/frame')
            )}
          />
          <Redirect path='*' exact to='/login' />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
