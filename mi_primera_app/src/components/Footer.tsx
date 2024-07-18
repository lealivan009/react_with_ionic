
import React from 'react';
import {
    IonBackButton,
    IonButtons,
    IonFooter,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';

// Definir una interfaz para las props que acepta el componente Toolbar
interface ToolbarProps {
    mode?: 'ios' | 'md';  // Define el tipo de `mode` con valores posibles 'ios' o 'md'
    color?: 'danger' | 'dark' | 'light' | 'medium' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning'; // Define el tipo de `color` con valores posibles para los colores de Ionic
}

// Componente funcional Toolbar con props para mode y color
const Toolbar: React.FC<ToolbarProps> = ({ mode = 'ios', color = 'dark' }) => {
    return (

        <IonFooter>
            <IonToolbar color={color} mode={mode}>
                <IonTitle>Footer</IonTitle>
            </IonToolbar>
        </IonFooter>
    );
};

export default Toolbar;
