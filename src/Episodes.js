import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import EpisodeGrid from './components/Episodes/EpisodeGrid'
import Header from './components/ui/Header'

const Episodes =() => {
    const [episodes, setEpisodes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
    useEffect(() =>{
      const fetchEpisodes = async () => {
        const result = await axios(
          `https://rickandmortyapi.com/api/episode`
          )
  
        console.log(result.data)
  
        setEpisodes(result.data)
        setIsLoading(false)
      }
  
      fetchEpisodes()
    }, [query])
  
    return (
    <div className='container'>
      yo
      <Header />
      <EpisodeGrid isLoading={isLoading} episodes={episodes}/>
    </div>
    )
  }
  
  export default Episodes;