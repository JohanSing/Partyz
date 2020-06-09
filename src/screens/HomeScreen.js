import React, { useState, useEffect } from 'react'

import { theme } from '../config/theme'

import { getOnlineEvents } from '../utils/APIEvents'
import { getCurrentUser } from '../utils/AuthenticationProvider'

import { ContainerScreen } from '../components/generic/Container'
import { Wrapper } from '../components/generic/Wrapper'
import Header from '../components/navigation/Header'
import Footer from '../components/footer/Footer'
import Loader from '../components/loader/Loader'
import Empty from '../components/home/Empty'
import Card from '../components/generic/Card'

const HomeScreen = () => {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    let responseEvents = null

    try {
      responseEvents = await getOnlineEvents(
        getCurrentUser().getAuthentication()
      )
    } catch (err) {
      console.log(err)
    }

    setEvents(responseEvents)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }

  useEffect(() => {
    setLoading(true)
    fetchEvents()
  }, [])

  return (
    <ContainerScreen bgColor={theme.colors['bg-secondary']}>
      <Header />
      {loading && <Loader />}
      {!loading && events.length === 0 && <Empty />}
      {!loading && events.length > 0 && (
        <Wrapper
          bgColor={'transparent'}
          flexDirection={'column'}
          margin={0}
          padding={'10px 20px'}
        >
          {events.map(event => (
            <Card
              key={event.id}
              title={event.title}
              date={event.date}
              address={event.address}
              guests={event.guests}
            />
          ))}
        </Wrapper>
      )}
      <Footer />
    </ContainerScreen>
  )
}

export default HomeScreen
