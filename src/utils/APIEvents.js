import axios from 'axios'

const URL_EVENTS = `${process.env.REACT_APP_API_DOMAIN}events`

const getOnlineEvents = async securityAccess => {
  let response = null

  try {
    response = await axios.get(`${URL_EVENTS}?online_eq=true`, {
      headers: { Authorization: `Bearer ${securityAccess}` }
    })
  } catch (err) {
    console.log(err)
  }

  return response.data
}

export { getOnlineEvents }
