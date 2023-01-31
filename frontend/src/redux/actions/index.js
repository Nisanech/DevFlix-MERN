//axios dependency to make API calls
import axios from "axios";

//variables defined in the type file
import{
    ADDNEW_MOVIE,
    GETALL_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE,
} from "./type";

// URL from where the API will be consumed

const API_URL = "http://localhost:5000/movies";

//Add new task

export const addNewMovie = (data) => async (dispatch) =>{
    try{
        // Access to the API path that executes the function of a new movie from the controller
        const res = await axios.post(`${API_URL}/movie/new`,{data});

        //The type of action and the data it receives are referenced
        dispatch({type:ADDNEW_MOVIE, payload: res.data});
    }catch (error){
        //error in case movie cannot be added
        console.log("error al agregar una nueva pelicula", error.message);
    }
};

//Get all movies
export const getAllMovies = () => async (dispatch) => {
    try{
        //Access to the API route that executes the list all movies function
    const res = await fetch(`${API_URL}/movies`,{
        headers:{
            'Access-Control-Allow-Origin': 'http://localhost:5000/movies'
        }
    })

    const json = await res.json()
    dispatch({type: GETALL_MOVIE, payload: json});
    }catch(error){
        //error in case the movies cannot be obtained
        console.log("Error al cargar las peliculas", error.message);
    }
};

//Edit movie
export const updateMovie = (id, data) => async (dispatch) => {
    try{
        // Access to the API route that executes the function to update the movie
        const res = await axios.put(`${API_URL}/movie/editMovie/${id}`, {data});

        // The type of action and the data it receives are referenced
        dispatch({type: UPDATE_MOVIE, payload: res.data});  
    }catch(error){
        // The error is caught in case the movie cannot be updated
        console.log("Error al editar la pelicula", error.message);
    }
};

//Deleted movie
export const deleteMovie = (id) => async (dispatch) => {
    try{
        // Access to the API route that executes the delete movie function
        const res = await axios.get(`${API_URL}/movie/toggleDelete/${id}`);

        // The type of action and the data it receives are referenced
        dispatch({type: DELETE_MOVIE, payload: res.data});
    }catch(error){
        // error in case the task cannot be deleted
        console.log("Error al eliminar la pelicula", error.message);
    }
};