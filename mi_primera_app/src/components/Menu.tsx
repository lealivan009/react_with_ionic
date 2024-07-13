import React from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonMenu, IonIcon } from '@ionic/react';
import {  personCircle, helpCircle, home,person } from 'ionicons/icons';


const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonContent>
        <IonList>
          <IonItem button routerLink="/home">
            <IonLabel>Home</IonLabel>
            <IonIcon slot="start" icon={home}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/support">
            <IonLabel>Support</IonLabel>
            <IonIcon slot="start" icon={helpCircle}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/contact">
            <IonLabel>Contact</IonLabel>
            <IonIcon slot="start" icon={personCircle}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/about">
            <IonLabel>About</IonLabel>
            <IonIcon slot="start" icon={person}></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
