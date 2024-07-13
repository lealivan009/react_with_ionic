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
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

const Contact: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Contact Us</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow className="ion-justify-content-center ion-padding">
          <IonCol size="12" size-md="8">
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Get in Touch</IonCardSubtitle>
                <IonCardTitle>Contact Medife</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Whether you have a question about your membership, need assistance with a medical service, or want to provide feedback, our team is here to support you.
                </p>
                <form>
                  <IonItem>
                    <IonLabel position="floating">Name</IonLabel>
                    <IonInput required></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" required></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Message</IonLabel>
                    <IonTextarea required></IonTextarea>
                  </IonItem>
                  <IonButton expand="block" color="secondary" type="submit" className="ion-margin-top">
                    Send Message
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center ion-padding">
          <IonCol size="12" size-md="8">
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Contact Information</IonCardSubtitle>
                <IonCardTitle>How to Reach Us</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  <strong>Phone:</strong> +54 11 1234 5678<br />
                  <strong>Email:</strong> contact@medife.com.ar<br />
                  <strong>Address:</strong> 123 Health Street, Buenos Aires, Argentina
                </p>
                <IonButton expand="block" color="secondary" routerLink="/support">
                  Visit Support Page
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default Contact;
