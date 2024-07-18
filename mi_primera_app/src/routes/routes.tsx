import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Support from '../pages/Support';
import ListItem from '../pages/ListItem';
import User from '../pages/User';
import Login from '../pages/Login';
import ForgotPasswordStep2 from '../pages/ForgotPasswordStep2';
import ForgotPasswordStep1 from '../pages/ForgotPasswordStep1';

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet id="main-content">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/listitem" component={ListItem} exact={true} />
        <Route path="/support" component={Support} exact={true} />
        <Route path="/user/:id" component={User} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPasswordStep1} />
        <Route path="/newpassword" component={ForgotPasswordStep2} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>

  );
};

export default Routes;
