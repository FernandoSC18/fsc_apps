const withPWA = require('next-pwa');

module.exports = withPWA({ 
    pwa: {
      
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      register: true,
      skipWaiting: true, 
    },  
    future: {
      webpack5: true,
    },
    env: { 
    },
    //serverRuntimeConfig: {
      // Will only be available on the server side
    //  mySecret: 'secret',
    //  secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    //},
    publicRuntimeConfig: { 
    }, 
  })
