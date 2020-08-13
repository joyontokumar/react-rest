import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';
export default {
    getallphoto: () =>
        axios.get(`${BASE_URL}/photos`),
    addPhoto: (photo) =>
        axios.post(`${BASE_URL}/photos`, photo),
    editPhoto: (photoId) =>
        axios.get(`${BASE_URL}/photos/${photoId}`),
    updatePhoto: (photo) =>
        axios.put(`${BASE_URL}/photos/${photo.photoId}`, photo),
    deletePhoto: (id) =>
        axios.delete(`${BASE_URL}/photos/${id}`)
}