import React from 'react'


const LocationsItem = ({ location }) => {
    return ( 
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
             <ul>
                <li>
                  <strong>Location:</strong> {location.name}
                </li>
                <li>
                  <strong>Location type:</strong> {location.type}
                </li>
                <li>
                  <strong>Dimension:</strong> {location.dimension}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
    
export default LocationsItem;