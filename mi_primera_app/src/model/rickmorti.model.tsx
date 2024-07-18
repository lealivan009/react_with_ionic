interface RickMorti {
    id: number;
    name: string;
    status: string;
    species: string;
    type?: string; // Puede ser opcional si no siempre está presente
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}
