// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://manrueda.herokuapp.com/',
        mail: {},
        database: {
          client: 'postgres',
          connection: {
            host: process.env.POSTGRES_HOST,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            port: '5432'
          },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT || '2368'
        },
        storage: {
          active: 'ghost-google-drive',
          'ghost-google-drive': {
            key: {
              "private_key_id": "0ba207037e4dc952318c1e73c2ff0fa0c763f6ee",
              "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRWf2uTwTxA8G5\ns4Ixr0y4hTf6fZjOuPH+DQjHxqdbGOdwwA6n7YGaZ9CGuFOaka43vanPHpbET3st\ntrIUkO/FKMX0fN63DAdMX3c5EqNpBm0XLaoc076t//3lSNfXN5by/I4Bnn4AKAkB\nrh+F/KYiCRSzj/fg2GiN2d1zmCCIa21arayzMtvCMKAb4inROZI8JeLFR15LIzrY\nDVD5TSUJqinL3csk0LX6LBXm07awxI+4QfFzmzf3Lj21Ri6sbAiPGt1ODGdW5CTJ\n1fLQw+WpmIM7B0gpIngl2YBAiQyutAi6b2uUCVheuu+v5CXqzRsQ2UgH5n8hHpG6\nrXaTOfN/AgMBAAECggEAGmRj7MOdddzpYUXWFflpjKGOyw9mYjlCmKp//t92Xa+o\nDbjIoDb67cJEsZcvQv82nWRVsfzDOQBkIQE1Ng6Hi612Nzo+wYjMqr4mQ5Wr8COV\nQSTKm1O+aCUrluo1+7XQW9Wm+WFHtTFW4VVYOAX/066dY3203C2sEKX0mwwEne3i\ns6KKjoKnLakaICZhAofm9EMh8Gnaab8B2DG9XnrBFR5nBbEq7f2Hkb3Ny+98NqnF\n0Kudfe+ubs8bj6bx3iPm0fJvi2Fsu9DA7UP1GYeb7WznW8ad3gPmDnFgilSmxxqZ\ntBgz5R35h1hYQ+GdXr8ghuitEf218ybtX+ITyEauUQKBgQDwgTFIYalfQ7t1q2eH\nJhRs/md4ak4B1WGKy22jFetikAucg22V/XuzXOAjHksGjLI9k2KhT0H+2nPRlW5h\nxGDYhXyP6fmBWBbyBaRGkLuvHAOsBlgMRHo6EmYF8uwFVEVBQd8w9WIt3y9eCeC7\nQdQ4XjLlY4lsNQpQfx/TRZKBuwKBgQDe1vf0fb8ZtA2uhYiK97ZbtUg7RZnG8ArT\nVdLhYP4AM5vSIRTILHYdt9bmhXEyVhUIYqytm3s7wwJbzXfybUmP6Rtf3SJTVbM1\nraveBz7DkNcQEtlyaFoIlbsF7oOGRr7R7CQnHr//BBqb3do6vuT0HEW2SBC6ZtDA\nrkcQXEPHDQKBgQDTtjaG7Amn5bzwUYmaC+hxJeY5twKiVI9AGeGSbao+omTGS1+9\naF1rP/fCklkjE9mXoNVzAI0s5mqL9Uos4C0MjT1ghmvv83aHaHX69E9zT2rgFNmP\nOvyJgEa1N+mSq2Mnle/+bhQWI2DUHEfrL4C8ehe9nEiNq4c/4xhF5/mXHwKBgQDX\nhAKFJARpgHjm++CFvnNQmLAGGxdRjqB5qfxs2xhs63zdKf9mZZHKxh0CD7bdnuFy\nnbQxpzj1IHIshThnbwkBNMqz2TO0cyMCXDfnYQxzqaZFtmU1P/UrblxVrUro14z/\ni6mfaB76LWbqrhK8VBksehd15pa/IGbuot651PH8FQKBgA6ovuLBKpcqtg6cALjG\n8BFTWvxHAwHb8eAVO9llofhRlAGXoQbIXj+Qf261ofe6X0VGH1TVKw8P+LdpDn7u\nn/iJZQTxb2TvaXAJ+IwW7Y1PZe1BAszhYOyP7So4cHRHP2rMXRtFxjwN3zqTQONa\njMZdSyCdpHZcLCos34BUa9xB\n-----END PRIVATE KEY-----\n",
              "client_email": "973025101201-qasi6ta6k3166cvjbu3vu2gumnafea6e@developer.gserviceaccount.com",
              "client_id": "973025101201-qasi6ta6k3166cvjbu3vu2gumnafea6e.apps.googleusercontent.com",
            }
          }
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
