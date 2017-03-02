
function returnPromise(data) {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}


module.exports = {

  getAccessToken(bearerToken, done) {
    console.log('getAccessToken()');

    const token = {
      user: {
        id:1,
        name: 'Adversign',
        mail: 'foo@bar'
      },
      expires: null
    };

    done(null, token);
  },

  getClient(client_id, client_secret, done) {
    console.log('getClient()');

    const client = {
      client_id,
      client_secret,
      grants: ['authorization_code', 'password', 'refresh_token', 'client_credentials'],
      redirectUris: ['http://googler.de']
    };

    done(null, client);
  },

  grantTypeAllowed(clientId, grantType, done) {
    console.log('grantTypeAllowed()');
    console.log(grantType);
    done(null, true);
  },

  getUser(username, password, done) {
    console.log('getUser()');
    console.log(`${username}:${password}`);

    const user = {
      id: 1,
      email: 'foo@bar.de'
    };

    done(null, user);
  },

  saveAccessToken(accessToken, clientId, expires, user, done) {
    console.log('saveAccessToken()');
    console.log(accessToken, clientId, expires, user);

    done(null);
  },

  validateScope(token, scope) {
    console.log('validateScope()');
    // return token.scope === scope
    return true;
  }

};
