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

const createEvent = async (securityAccess, payload) => {
  try {
    await axios.post(
      URL_EVENTS,
      {
        title: payload.title,
        description: payload.description,
        date: payload.date,
        address: payload.address,
        organizer: securityAccess.getId(),
        foods: [],
        guests: [],
        online: true
      },
      {
        headers: {
          Authorization: `Bearer ${securityAccess.getAuthentication()}`
        }
      }
    )
  } catch (err) {
    console.log(err.response)
  }

  return true
}

export { getOnlineEvents, createEvent }
