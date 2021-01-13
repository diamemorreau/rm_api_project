import React from 'react'
import EpisodeItem from './EpisodeItem'
import Spinner from '../ui/Spinner'

const EpisodeGrid = ({episodes, isLoading}) => {
    return isLoading ? (
        <Spinner />
        
    ) : (
        <section className='cards'>
        {episodes.results.map((episodes) => (
          <EpisodeItem key={episodes.id} episodes={episodes}></EpisodeItem>
        ))}
      </section>
    )
}

export default EpisodeGrid