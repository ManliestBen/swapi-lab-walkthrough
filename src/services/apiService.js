const BASE_URL = 'https://sei-sw-api-a75665a714e3.herokuapp.com'

export async function getStarships(page) {
  try {
    const res = await fetch(`${BASE_URL}/api/starships?page=${page}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getShipData(shipId) {
  try {
    const res = await fetch(`${BASE_URL}/api/starships/${shipId}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getPilots(pilotsArray) {
  try {
    const promises = pilotsArray.map(pilotUrl => fetch(`${BASE_URL}${pilotUrl}`).then(res => res.json()))
    const pilotData = await Promise.all(promises)
    return pilotData
  } catch (err) {
    console.log(err)
  }
}