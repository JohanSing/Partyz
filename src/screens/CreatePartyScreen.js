import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../config/theme'

import { ContainerScreen, ContainerForm } from '../components/generic/Container'
import { WrapperInput, WrapperButton } from '../components/generic/Wrapper'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import DatePickerComponent from '../components/form/DatePickerComponent'
import Button from '../components/generic/Button'
import Footer from '../components/footer/Footer'
import ButtonBack from '../components/generic/ButtonBack'
import { createEvent } from '../utils/APIEvents'
import { getCurrentUser } from '../utils/AuthenticationProvider'

import { Toast, ToastError } from '../components/generic/Toast'

const CreatePartyScreen = () => {
  const history = useHistory()
  const [formState, setFormState] = useState({ date: new Date() })

  const createParty = async e => {
    e.preventDefault()
    setFormState({ ...formState, date: formState.date.toISOString() })
    const response = createEvent(getCurrentUser(), formState)

    if (!response) {
      ToastError('All fileds are required!')
    }

    history.push('/')
  }

  useEffect(() => {}, [])

  return (
    <ContainerScreen
      bgColor={theme.colors['bg-secondary']}
      padding={'25px 0 0 0'}
    >
      <Toast />
      <Link to='/home'>
        <ButtonBack
          action={() => {}}
          bgcolor={theme.colors['btn-terciary']}
          fontcolor={theme.colors['font-secondary']}
          margin='0 30px 20px 30px'
        />
      </Link>
      <TitleCreateParty>Do U want create party?</TitleCreateParty>
      <ContainerForm
        width={21}
        padding={'0 10px'}
        borderRadius={0}
        bgColor={theme.colors['bg-secondary']}
      >
        <FormCreate onSubmit={createParty}>
          <WrapperInput width={20} margin={'20px 0 0 0'}>
            <Input
              name='title'
              type='text'
              isRequired={true}
              placeholder='Title'
              formState={formState}
              onChangeAction={setFormState}
              bgColor={theme.colors['btn-terciary']}
              fontColor={theme.colors['font-secondary']}
              height={'60px'}
              width={'70%'}
            />
          </WrapperInput>
          <WrapperInput width={20} margin={'30px 0 0 0'}>
            <Input
              name='address'
              type='text'
              isRequired={false}
              placeholder='Address'
              formState={formState}
              onChangeAction={setFormState}
              bgColor={theme.colors['btn-terciary']}
              fontColor={theme.colors['font-secondary']}
              height={'60px'}
              width={'70%'}
            />
          </WrapperInput>
          <WrapperInput width={20} margin={'30px 0 0 0'}>
            <TextArea
              name='description'
              type='text'
              isRequired={false}
              placeholder='Description'
              formState={formState}
              onChangeAction={setFormState}
              bgColor={theme.colors['btn-terciary']}
              fontColor={theme.colors['font-secondary']}
              height={'130px'}
              width={'70%'}
            />
          </WrapperInput>
          <WrapperInput
            flexDirection={'column'}
            width={20}
            margin={'30px 0 0 30px'}
            justify='flex-start'
          >
            <LabelDateTimePicker>Date & hours</LabelDateTimePicker>
            <DatePickerComponent
              action={setFormState}
              formState={formState}
              name='date'
            />
          </WrapperInput>
          <WrapperButton margin={'40px 0 0 0'}>
            <Button
              type={'submit'}
              text='Create Party 🔥'
              bgColor={theme.colors['btn-terciary']}
              fontColor={theme.colors['font-secondary']}
              height={'60px'}
              width={'70%'}
            />
          </WrapperButton>
        </FormCreate>
      </ContainerForm>
      <Footer />
    </ContainerScreen>
  )
}

const TitleCreateParty = styled.h1`
  color: ${theme.colors['font-secondary']};
  text-align: center;
  font-size: 18px;
  font-family: ${theme.fonts['font-title']};
  margin: 35px 0 0 0;
`

const FormCreate = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

const LabelDateTimePicker = styled.div`
  color: ${theme.colors['font-secondary']};
  font-family: ${theme.fonts['font-primary']};
  margin-bottom: 20px;
`

export default CreatePartyScreen
