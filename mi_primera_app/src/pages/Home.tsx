import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
} from '@ionic/react';

const Home: React.FC = () => {
  const username = localStorage.getItem("username"); // Obtener userId del localStorage


  return (
    <IonPage>
      {username && (
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Welcome {username}!</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}

      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-padding">
            <IonCol size="12" size-md="8">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Need Assistance?</IonCardSubtitle>
                  <IonCardTitle>Support</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Our support team is available 24/7 to help you with any issues or questions you may have regarding our services.
                  </p>
                  <IonButton expand="full" color="secondary" routerLink="/support">
                    Visit Support Page
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default Home;
