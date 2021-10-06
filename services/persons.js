import axios from 'axios';

const baseURL = "https://pacific-everglades-02712.herokuapp.com/api/persons";

const getAll = () => {
    const promise = axios.get(baseURL);
    return  promise.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
  }

const remove = id =>  axios.delete(`${baseURL}/${id}`);

const update = (newObject,id) => {
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request.then(response => response.data)
}    
      
  

const personService = {getAll,create,remove,update}

export default personService;