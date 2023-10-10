import * as apiService from '../../services/apiService'
import { useEffect, useState } from 'react'

const ShipList = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const fetchShipData = async () => {
      const shipData = await apiService.getStarships()
      setShips(shipData)
    }
    fetchShipData()
  }, [])

  return (
    <>
      <h1>ShipList</h1>
    </>
  )
}

export default ShipList