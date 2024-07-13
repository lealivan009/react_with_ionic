import React from 'react';
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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Welcome to Medife</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center ion-padding">
            <IonCol size="12" size-md="8">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Your Health Partner</IonCardSubtitle>
                  <IonCardTitle>Medife</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Medife is a leading healthcare mutual in Argentina, committed to providing comprehensive and high-quality medical services to our members.
                  </p>
                  <p>
                    Our mission is to promote health and well-being through a variety of services, including preventive care, emergency services, and specialized treatments.
                  </p>
                  <IonButton expand="full" color="secondary" routerLink="/about">
                    Learn More About Us
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-padding">
            <IonCol size="12" size-md="8">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Contact Us</IonCardSubtitle>
                  <IonCardTitle>We are here to help</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Whether you have a question about your membership, need assistance with a medical service, or want to provide feedback, our team is here to support you.
                  </p>
                  <IonButton expand="full" color="secondary" routerLink="/contact">
                    Get in Touch
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
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
