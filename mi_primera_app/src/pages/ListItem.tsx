import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
  IonContent,
  IonIcon,
  IonRouterLink
} from '@ionic/react';
import { getAllCharacters } from '../services/rickmorti.service';
import { informationCircleOutline } from 'ionicons/icons';

const ListItem: React.FC = () => {

  const [characters, setCharacters] = useState<RickMorti[]>([]);

  const fetchCharacters = async () => {
    const data = await getAllCharacters();
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Members</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {characters.map((character) => (
            <IonItem key={character.id}>

              <IonAvatar slot="start">
                <img alt={character.name} src={character.image} />
              </IonAvatar>

              <IonLabel>{character.name}</IonLabel>

              {/* Envolver IonIcon con IonRouterLink para la navegación */}
              <IonRouterLink slot="end" href={`/user/${character.id}`}>
                <IonIcon icon={informationCircleOutline} color="primary" size="large" />
              </IonRouterLink>

            </IonItem>
          ))}
        </IonList>
      </IonContent>

    </IonPage>
  )
};

export default ListItem;
