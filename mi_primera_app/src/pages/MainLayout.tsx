import React from 'react';
import { IonApp, IonContent } from '@ionic/react';
import Toolbar from '../components/Toolbar';
import Menu from '../components/Menu';
import Routes from '../routes/routes';

const MainLayout: React.FC = () => (
  <IonApp>
    <Menu />
    <Toolbar mode='md' color='secondary' />
    <IonContent id="main-content">
      <Menu />
      <Routes />
    </IonContent>
  </IonApp>
);

export default MainLayout;
