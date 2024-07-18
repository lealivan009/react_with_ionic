import React from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonMenu, IonIcon } from '@ionic/react';
import { personCircle, helpCircle, home, person, bug, logIn, logOut, navigate } from 'ionicons/icons';


const Menu: React.FC = () => {

  const handleLogout = () => {
    localStorage.removeItem("username"); // Eliminar el valor del localStorage al hacer logout
  };

  return (
    <IonMenu contentId="main-content">
      <IonContent>
        <IonList>
          <IonItem button routerLink="/home">
            <IonLabel>Home</IonLabel>
            <IonIcon slot="start" icon={home}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/listitem">
            <IonLabel>List</IonLabel>
            <IonIcon slot="start" icon={person}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/support">
            <IonLabel>Support</IonLabel>
            <IonIcon slot="start" icon={helpCircle}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/login">
            <IonLabel>LogIn</IonLabel>
            <IonIcon slot="start" icon={logIn}></IonIcon>
          </IonItem>
          <IonItem button routerLink="/login" onClick={() => { handleLogout() }}>
            <IonLabel>LogOut</IonLabel>
            <IonIcon slot="start" icon={logOut}></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
