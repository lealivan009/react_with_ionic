import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { call, mail, helpCircle } from 'ionicons/icons';

const Support: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Support</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>How can we help you?</IonCardSubtitle>
          <IonCardTitle>Support</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonText>
            <p>
              Welcome to the Medife Support Page. Our team is here to assist you with any questions or issues you may have. Below you will find several ways to get in touch with our support team.
            </p>
          </IonText>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Contact Methods</IonCardSubtitle>
          <IonCardTitle>Get in Touch</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonIcon icon={call} slot="start" />
              <IonLabel>Phone Support</IonLabel>
              <IonText>
                <p>Call us at: 0800-123-456</p>
              </IonText>
            </IonItem>
            <IonItem>
              <IonIcon icon={mail} slot="start" />
              <IonLabel>Email Support</IonLabel>
              <IonText>
                <p>Email us at: support@medife.com</p>
              </IonText>
            </IonItem>
            <IonItem>
              <IonIcon icon={helpCircle} slot="start" />
              <IonLabel>FAQ</IonLabel>
              <IonText>
                <p>Visit our FAQ section for common questions and answers.</p>
              </IonText>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Support;
