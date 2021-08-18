export const APP_ID = `1a215f70`;
export const APP_KEY = "6964d098260372fd7c5ecf6732cc18c7";
export const API_URL = "https://api.edamam.com/api/recipes/v2"

export const TOKEN = localStorage.getItem('token');
export const HEADERS = {'Content-Type': 'application/json', 'Authorization': `Token ${TOKEN}`};
export const REST_API_IP = `http://127.0.0.1:8000/api`