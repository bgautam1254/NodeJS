// -------------------------------------------------------------------------------------
// login
// My App --> Single Page Application
// -------------------------------------------------------------------------------------

const axios = require('axios').default;

async function userLoginToken(userEmail, userPassword) {

    const domainAddress = '';

    const loginProfile = {
        method: 'post',
        url: `https://${domainAddress}.com/oauth/token`,

        headers: { 'Content-Type': 'application/json' },
        data: {
            client_id: "",
            client_secret: "",
            grant_type: "password",
            username: userEmail,
            password: userPassword,
        }
    }

    try {
        const response = await axios.request(loginProfile)
        return response;
    }

    catch (error) {
        return error;
    }
}

// -------------------------------------------------------------------------------------

const userEmail = '';
const userPassword = ''

// -------------------------------------------------------------------------------------

userLoginToken(userEmail, userPassword)
    .then((response) => {
        if (response.data) {
            console.log(response.data);
            console.log("user logged in...");
        }

        else if (response.response.data) {
            console.log(response.response.data.error_description);
        }

    })
    .catch((error) => {
        console.log(error)
        console.log("user login FAILED...!!!")
    })

// -------------------------------------------------------------------------------------

