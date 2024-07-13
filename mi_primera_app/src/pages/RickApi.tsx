import React, { useState, useEffect } from "react";
import { getAllCharacters } from "../services/rickmorti.service";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonApp, IonContent, IonImg } from '@ionic/react';

const RickApi: React.FC = () => {
    const [characters, setCharacters] = useState<any[]>([]);

    const fetchCharacters = async () => {
        const { data } = await getAllCharacters();
        setCharacters(data.results);
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <IonApp>
            <IonContent className="ion-padding">
                {characters.map((character) => (
                    <IonCard key={character.id}>
                        <IonCardHeader>
                            <IonCardTitle>{character.name}</IonCardTitle>
                            <IonCardSubtitle>{character.species} - {character.status}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonImg src={character.image} alt={character.name} />
                            <p>Gender: {character.gender}</p>
                            <p>Origin: {character.origin.name}</p>
                            <p>Location: {character.location.name}</p>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonApp>
    );
};

export default RickApi;
