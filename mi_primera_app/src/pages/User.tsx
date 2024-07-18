import React, { useEffect, useState } from 'react';
import {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonImg,
    IonLoading
} from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import { getOneCharacter } from '../services/rickmorti.service';

const User: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [character, setCharacter] = useState<RickMorti | null>(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const data = await getOneCharacter(id);
                setCharacter(data);
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };

        fetchCharacter();
    }, [id]);

    return (
        <IonPage>

            <IonContent className="ion-padding">
                <IonCard>
                    <IonImg src={character?.image} alt={character?.name} />
                    <IonCardHeader>
                        <IonCardTitle>{character?.name}</IonCardTitle>
                        <IonCardSubtitle>{character?.species} - {character?.status}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p><strong>Gender:</strong> {character?.gender}</p>
                        <p><strong>Origin:</strong> {character?.origin.name}</p>
                        <p><strong>Location:</strong> {character?.location.name}</p>
                    </IonCardContent>
                </IonCard>
                <IonButton expand="full" onClick={() => history.goBack()}>Back</IonButton>

            </IonContent>

        </IonPage>
    );
};

export default User;
