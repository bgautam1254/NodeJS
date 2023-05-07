// --------------------------------------------------------------------------------------------------
// managementToken
// My App 3 --> Machine to Machine
// grant_type: 'client_credentials'
// --------------------------------------------------------------------------------------------------

const axios = require('axios').default;

async function managementToken() {

    const domainAddress = '';

    const managementTokenData = {
        method: 'POST',
        url: `https://${domainAddress}.com/oauth/token`,
        headers: { 'content-type': 'application/json' },
        data: {
            client_id: '',
            client_secret: '',
            audience: `https://${domainAddress}.com/api/v2/`,
            grant_type: 'client_credentials',
        }
    };

    try {
        const response = await axios.request(managementTokenData);
        return response.data;
    }
    catch (error) {
        return error;
    }
}

// --------------------------------------------------------------------------------------------------

managementToken()
    .then((response) => {
        console.log('response', response)
    })
    .catch((error) => {
        console.error("error", error)
    });

// --------------------------------------------------------------------------------------------------

module.exports = managementToken();

// --------------------------------------------------------------------------------------------------

