import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
    right: 24px;
    bottom: 24px;
  }
  .Toastify__toast {
    width: fit-content;
    padding: 0;
    margin: 12px 0px 0px 0px;
    overflow: visible;
    background: none;
    box-shadow: none;
  }
  .Toastify__toast-body {
    padding: 0;
    animation: none;
  }
`

export default function Container() {
  return (
    <StyledContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={true}
      closeButton={false}
      closeOnClick={true}
      draggable={false}
      pauseOnHover={true}
    />
  )
}
