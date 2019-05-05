import axios from 'axios';
 export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 240cd8b3593094a2ba842e0795d12df9eb3daf43ec0c4a1b7b66e1f6b2e89a2e'
    }
 })