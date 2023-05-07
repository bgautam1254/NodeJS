// --------------------------------------------------------------------------------------------------
// changePassword
// using: managementToken
// --------------------------------------------------------------------------------------------------

const axios = require('axios');

async function changePassword(managementToken, userId, userPassword) {

    const domainAddress = '';

    const passwordupdateProfile = {
        method: 'PATCH',
        url: `https://${domainAddress}.com/api/v2/users/${userId}`,
        data: { password: userPassword },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${managementToken}`,
        },

    }

    try {
        return await axios.request(passwordupdateProfile);
    }
    catch { error => error }
}

// --------------------------------------------------------------------------------------------------

const managementToken = '';

const userId = 'auth0|123456478976513216534';
const userPassword = ''

// --------------------------------------------------------------------------------------------------

changePassword(managementToken, userId, userPassword)
    .then(response => {
        if (response == undefined)
            console.log('User password could not be updated.');
        else {
            console.log(response);
            console.log('User password has been updated.');
        }
    })
    .catch(error => {
        console.error(error.response.data);
        console.error('User password could not be updated.');
    });

// --------------------------------------------------------------------------------------------------

module.exports = changePassword();

// --------------------------------------------------------------------------------------------------
