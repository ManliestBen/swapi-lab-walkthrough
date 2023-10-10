import { Link } from 'react-router-dom'
import styles from './ShipDetails.module.css'

const ShipDetails = ({shipDetails, pilots, isLoadingPilotData}) => {
  return (
    <div className={styles.shipDetails}>
      <h2>NAME: {shipDetails.name}</h2>
      <h2>MODEL: {shipDetails.model}</h2>
      <ul>Pilots:
        {pilots.length ?
          pilots.map(pilot => 
            <li key={pilot.name}>{pilot.name}</li>
            )
            :
            <>
            {isLoadingPilotData ?
              <h3>No pilots for this ship!</h3>
              :
              <h3>Loading Pilots...</h3>
            }
          </>
        }
      </ul>
      <h3>HYPERDRIVE RATING: {shipDetails.hyperdrive_rating}</h3>
      <Link to='/ships'><button>BACK</button></Link>
    </div>
  )
}

export default ShipDetails