import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const MainNet = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get(requests.requestsPopular).then((response) => {
          setMovies(response.data);
        });
    }, [])
    console.log(movies)

  return (
    <div>MainNet</div>
  )
}

export default MainNet