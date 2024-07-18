import React from 'react';
import { IonApp, IonContent } from '@ionic/react';
import Menu from '../../components/Menu';
import Routes from '../../routes/routes';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainLayout: React.FC = () => (
  <IonApp>
    <Menu />
    <Navbar color='secondary' />
    {/* <Footer color='secondary' /> */}
    <IonContent id="main-content">
      <Routes />
    </IonContent>
  </IonApp>
);

export default MainLayout;
