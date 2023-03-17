import axios from 'axios';
export const getRandomImage = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    return response
}
  