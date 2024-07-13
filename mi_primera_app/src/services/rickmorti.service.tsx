import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
    return await axios.get(API_URL);
};
