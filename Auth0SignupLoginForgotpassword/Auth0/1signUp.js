// -------------------------------------------------------------------------------------
// signUp
// My App --> Single Page Application
// -------------------------------------------------------------------------------------

const axios = require('axios').default;

async function userSignup(userEmail, userPassword) {

  const domainAddress = '';

  const signupProfile = {

    method: 'POST',
    url: `https://${domainAddress}.com/dbconnections/signup`,
    data: {
      client_id: '',
      connection: 'Username-Password-Authentication',

      email: userEmail,
      password: userPassword,
    },
  }

  try {
    const response = await axios.request(signupProfile)
    return response;
  }
  catch (error) {
    console.log('error0: ', error);
    return error;
  }
}

// -------------------------------------------------------------------------------------

const userEmail = ''
const userPassword = ''

// -------------------------------------------------------------------------------------

userSignup(userEmail, userPassword)
  .then((response) => {
    console.log("response1", response);
    if (response.data) {
      console.log(`user: "${userEmail}" registration is completed...`)
    }

    else if (response.response.data && response.response.data.code === 'invalid_signup') {
      console.log(`user: "${userEmail}" already registered...`)
    }
  })
  .catch((error) => {
    console.log('error1: ', error);
    console.log("Sign up process FAILED!")
  })

// -------------------------------------------------------------------------------------
