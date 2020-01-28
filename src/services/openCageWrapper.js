import axios from 'axios'

const getAddress = async (lat, long) => {
 const apiKey = '55082dd8fb7e473db8dab86a33518599'
 const apiURL = 'https://api.opencagedata.com/geocode/v1/json'

 const requestURL = apiURL
 + '?'
 + `key=${apiKey}`
 + `&q=${encodeURIComponent(lat + ',' + long)}`
 + `&pretty=1`
 + `&no_annotations=1`

 let results = await axios.get(requestURL)
 return results.data.results[0]

}

export default getAddress