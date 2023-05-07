// --------------------------------------------------------------------------------------------------
// get user info
// using: managementToken
// --------------------------------------------------------------------------------------------------

const axios = require("axios").default;

async function userInfo(managementToken, userEmailID) {
  const domainAddress = '';
  const userProfile = {
    method: 'GET',
    url: `https://${domainAddress}.com/api/v2/users-by-email?email=${userEmailID}`,
    headers: { 'Authorization': `Bearer ${managementToken}` },
  }

  try {
    const response = await axios.request(userProfile)
    return response;

  }
  catch (error) {
    return error;
  }

}

// --------------------------------------------------------------------------------------------------

const managementToken = '';

const userEmailID = '';

// --------------------------------------------------------------------------------------------------

userInfo(managementToken, userEmailID)
  .then((response) => {
    console.log("response", response.data);
    if (response.data.length > 0) {
      console.log(response.data[0].user_id)
      console.log("User is registered");
    }
    else {
      console.log("User is not registered");
      return null;
    }
  })
  .catch((error) => {
    console.log('error', error);
    console.log('invalid managementToken');
  })

// --------------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------------






