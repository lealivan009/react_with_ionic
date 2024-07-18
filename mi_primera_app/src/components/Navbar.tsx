import React from 'react';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenuButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { home } from 'ionicons/icons';

// Definir una interfaz para las props que acepta el componente Toolbar
interface ToolbarProps {
    // Define el tipo de `mode` con valores posibles 'ios' o 'md'
    mode?: 'ios' | 'md';

    // Define el tipo de `color` con valores posibles para los colores de Ionic
    color?: 'danger' | 'dark' | 'light' | 'medium' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
}

// Componente funcional Toolbar con props para mode y color
const Toolbar: React.FC<ToolbarProps> = ({ mode = 'ios', color = 'dark' }) => {
    return (
        <IonHeader>
            <IonToolbar color={color} mode={mode}>

                <IonButtons slot="start">
                    <IonButton fill="clear" routerLink="/home">
                        <IonIcon icon={home} />
                    </IonButton>
                </IonButtons>

                <IonButtons slot="end">
                    <IonMenuButton autoHide={false} />
                </IonButtons>

                <IonTitle>Navbar</IonTitle>

            </IonToolbar>
        </IonHeader>
    )
};

export default Toolbar;
