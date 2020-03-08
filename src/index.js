import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import route from './routes';
import './assets/style/index.scss'

import { Helmet } from 'react-helmet';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme'

ReactDOM.render(<BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Newgate</title>
    </Helmet>
    {
        route.map((e, i) => (
          <Switch key={`pages-${i}`}>
            <Route exact={e.exact || false} path={e.url}>
              {e.page}
            </Route>
          </Switch>
        ))
      }
    </ThemeProvider>
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
