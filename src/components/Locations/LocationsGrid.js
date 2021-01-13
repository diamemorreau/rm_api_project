import React from 'react'
import LocationsItem from './LocationsItem'
import Spinner from '../ui/Spinner'

const LocationsGrid = ({locations, IsLoading}) => {
    return IsLoading ? (
      <Spinner />
      
    ) : (
        <section className='cards'>
        {locations.results.map((location) => (
          <LocationsItem key={location.id} location={location}></LocationsItem>
        ))}
      </section>
    )
}

export default LocationsGrid