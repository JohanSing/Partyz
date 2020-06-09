import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerComponent = ({ action, formState, name }) => {
  return (
    <DatePicker
      selected={formState.date}
      onChange={date => action({ ...formState, [name]: date })}
      showTimeSelect
      timeFormat='HH:mm'
      timeIntervals={15}
      timeCaption='time'
      dateFormat='MMMM d, yyyy h:mm aa'
    />
  )
}

DatePickerComponent.propTypes = {
  action: PropTypes.func,
  formState: PropTypes.object,
  name: PropTypes.string
}

export default DatePickerComponent
