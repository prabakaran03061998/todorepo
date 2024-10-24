//create backend call with Todo save,get and delete action using axios
import axios from 'axios';

const API_URL = 'http://localhost:8080/todo';

export const saveTodo = async (todo) => {
    const response= await axios.post(API_URL+'/save', todo);
    console.log(response.data);
    return response.data;
}

export const getTodo = async () => {
    const response= await axios.get(API_URL+'/get');
    
    return response.data;
}
export const deleteTodo = async (id) => {
    const response= await axios.delete(API_URL+'/delete/'+id);
    return response.data;
}
