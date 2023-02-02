// Dependencias
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import moment from 'moment';
import "./ViewMovie.css"

// Acciones de redux
import {getMovie} from '../redux/actions/movieSlice'

// Componentes
import CardMovie from '../components/CardMovie/CardMovie'
import Footer from '../components/Footer/Footer'

const ViewMovie = () => {
    // Dispatch para disparar la acción
    const dispatch = useDispatch()

    const {movie} = useSelector((state) => ({...state.movie}))

    const {id} = useParams()

    useEffect(() => {
        if(id) {
            dispatch(getMovie(id))
        }
    }, [id])

  return (
    <div className='home2'>
        <CardMovie className="cardHome2"{...movie} />
        <Footer/>
    </div>
  )
}

export default ViewMovie