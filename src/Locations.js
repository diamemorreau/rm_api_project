import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import LocationsGrid from './components/Locations/LocationsGrid'
import Header from './components/ui/Header'

const Locations =() => {
    const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
    
 useEffect(() =>{
    const fetchLocations = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/location`
        )

      console.log(result.data)

      setLocations(result.data)
      setIsLoading(false)
    }

    fetchLocations()
  }, [])

  
    return (
    <div className='container'>
      <Header />  
      yo
      <LocationsGrid isLoading={isLoading} locations={locations}/>
    </div>
    )
  }
  
  export default Locations;
