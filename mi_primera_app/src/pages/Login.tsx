import React from 'react';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton, IonLabel } from "@ionic/react";

const Login: React.FC = () => {

    const onSubmit = async () => {
        localStorage.setItem("username", 'lealivan009');
    }

    return (
        <IonCard style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
            <IonImg
                src="https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-perfil-an%C3%B3nimo-icono-de-la-cara-persona-silueta-gris-avatar-masculino-por-defecto-foto-de.jpg"
                alt="Login"
                style={{ borderRadius: '50%', width: '100px', height: '100px', margin: '20px auto' }}
            />
            <IonCardHeader>
                <IonCardTitle className="ion-text-center">Login</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <IonItem>
                    <IonInput placeholder="Enter your username"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput type="password" placeholder="Enter your password"></IonInput>
                </IonItem>
                <IonButton expand="full" color="primary" routerLink="/home" onClick={() => { onSubmit() }}>Accept</IonButton>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    <a href="/forgotpassword" style={{ color: '#3880ff', textDecoration: 'none' }} >Forgot your password? Click here!</a>
                </p>
            </IonCardContent>
        </IonCard>
    );
};

export default Login;
