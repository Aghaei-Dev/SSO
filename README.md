# What Is SSO ?

SSO stands for Single Sign-on.
SSO improve the user experience (UX) by allowing access multiple applications or services with a single set of credentials.
In traditional authentication models, users have to log in separately to each application or services, providing their username and password for each one.
SSO simplifies this process by allowing users to authenticate once and gain access to multiple services without the need for repeated logins.

## Concepts of SSO

- Identity Provider (IdP): The entity responsible for authenticating users and providing identity information. The IdP issues tokens or assertions that can be used to prove the user’s identity.
- Service Provider (SP): The application or service that relies on the IdP for authentication. The SP trusts the identity information provided by the IdP and grants access based on that trust.
- User: The individual attempting to access the services. Users authenticate with the IdP, which then vouches for their identity to the SP.

## Pros of SSO

- Simplified User Management
- Faster and easier Access
- Reduced Password Sharing
- Reduced Downtime
- Centralized Authentication
- Compliance Requirements

## Steps

### ONE

create an application in google developer console.it provides `clientId` is used to identify your application for authentication details.
1-go to `https://console.cloud.google.com`
2-Select or create a new project where your React app will be registered.
3-Navigate to "APIs & Services" > "Credentials".
4-Click on "Create credentials" and choose "OAuth client ID" from the dropdown menu.
4.1- if you haven't ant consent Screen yoy must create one .
5-Select "Web application" as the application type.

and then fill the URI's and redirect URI's

### TWO

install this package

```js
npm install @react-oauth/google@latest
```

after that wrap your app

```js
//App.jsx
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <GoogleOAuthProvider clientId='your-client-id that came from step ONE'>
      {/* Your app components go here */}
    </GoogleOAuthProvider>
  )
}

export default App
```

then Create SignIn Button

```js
import { GoogleLogin } from '@react-oauth/google'

export default function SignIn() {
  // This function will be called upon a successful login
  const handleSuccess = (credentialResponse) => {
    // If you are using the authorization code flow, you will receive a code to be exchanged for an access token
    const authorizationCode = credentialResponse.code

    // Send the authorization code to your backend server
    fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: authorizationCode }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from your backend server
        console.log('Login successful, backend response:', data)
      })
      .catch((error) => {
        // Handle errors in communicating with your backend server
        console.error('Error exchanging authorization code:', error)
      })
  }

  const handleError = (errorResponse) => {
    console.error('Google login failed', errorResponse)
  }

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        flow='auth-code'
      />
    </div>
  )
}
```
