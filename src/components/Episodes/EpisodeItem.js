import React from 'react'


const EpisodeItem = ({ episodes }) => {
    return ( 
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
             <h1>{episodes.name}</h1>
             <ul>
                <li>
                  <strong>Air date:</strong> {episodes.air_date}
                </li>
                <li>
                  <strong>Episode:</strong> {episodes.episode}
                </li>
                <video>  
                    <source src={episodes.url} type="video/mp4" />
                </video>
              </ul>
            </div>
          </div>
        </div>
      )
    }
    
export default EpisodeItem;