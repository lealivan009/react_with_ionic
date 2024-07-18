import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async (): Promise<RickMorti[]> => {
    const response = await axios.get(API_URL);
    return response.data.results as RickMorti[];
};

export const getOneCharacter = async (id: string): Promise<RickMorti> => {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(response);
    return response.data as RickMorti; // Adjust to return the character directly
}
