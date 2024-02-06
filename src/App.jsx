import { GoogleOAuthProvider } from '@react-oauth/google'
import styled from '@emotion/styled'

import Form from './components/Form'
function App() {
  return (
    <GoogleOAuthProvider clientId='777060623527-9e4anbvdo5mt2s5686a272ck9oqs4rib.apps.googleusercontent.com'>
      <Wrapper>
        <Form />
      </Wrapper>
    </GoogleOAuthProvider>
  )
}

export default App
const Wrapper = styled('section')(() => ({
  width: '100vw',
  height: '100dvh',
  display: 'grid',
  placeItems: 'center',
  background: '#C7DCFC',
}))
