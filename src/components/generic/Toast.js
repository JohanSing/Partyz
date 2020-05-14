import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

const commonProperties = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

const ToastSuccess = message => {
  return toast.success(`👍 ${message}`, commonProperties)
}

const ToastInfo = message => {
  return toast.info(`💡 ${message}`, commonProperties)
}

const ToastWarning = message => {
  return toast.warn(`⚠️ ${message}`, commonProperties)
}

const ToastError = message => {
  return toast.error(`💥 ${message}`, commonProperties)
}

export { Toast, ToastSuccess, ToastInfo, ToastWarning, ToastError }
