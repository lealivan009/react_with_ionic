import React from 'react';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton, IonLabel } from "@ionic/react";

const ForgotPasswordStep2: React.FC = () => {
    return (
        <IonCard style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
            <IonImg
                src="https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-perfil-an%C3%B3nimo-icono-de-la-cara-persona-silueta-gris-avatar-masculino-por-defecto-foto-de.jpg"
                alt="Login"
                style={{ borderRadius: '50%', width: '100px', height: '100px', margin: '20px auto' }}
            />
            <IonCardHeader>
                <IonCardTitle className="ion-text-center">Change password!</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <IonItem>
                    <IonInput placeholder="New Password"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput type="password" placeholder="New password again"></IonInput>
                </IonItem>
                <IonButton expand="block" color="primary" style={{ marginTop: '20px' }} routerLink="/login">Change</IonButton>
            </IonCardContent>
        </IonCard>
    );
};

export default ForgotPasswordStep2;
