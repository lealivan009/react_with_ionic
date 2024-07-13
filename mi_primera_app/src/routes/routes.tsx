import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Support from '../pages/Support';
import RickApi from '../pages/RickApi';

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet id="main-content">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/support" component={Support} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/api" component={RickApi} exact={true} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>

  );
};

export default Routes;
