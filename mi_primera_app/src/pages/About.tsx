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
  IonCardTitle
} from '@ionic/react';
import Calendar from '../components/Calendar';

const About: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>About Medife</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Our Mission</IonCardSubtitle>
          <IonCardTitle>Welcome to Medife</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonText>
            <p>
              Medife is a leading healthcare mutual in Argentina, committed to providing comprehensive and high-quality medical services to our members. With a vast network of healthcare providers and facilities, Medife ensures access to the best medical care across the country.
            </p>
            <p>
              Our mission is to promote health and well-being through a variety of services, including preventive care, emergency services, and specialized treatments. We pride ourselves on our personalized approach to healthcare, ensuring that each member receives the attention and care they deserve.
            </p>
            <p>
              At Medife, we believe in continuous improvement and innovation in healthcare services. Our dedicated team of professionals works tirelessly to stay ahead in the ever-evolving healthcare landscape, providing our members with the latest in medical advancements and technology.
            </p>
            <p>
              Thank you for choosing Medife as your trusted healthcare partner. We are here to support you and your family on your journey to better health.
            </p>
          </IonText>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default About;
