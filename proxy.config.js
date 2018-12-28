// To use https in dev, in angular.json under "serve" add `disableHostCheck: true`
const PROTOCOL = 'http';
const HOSTNAME = 'localhost';
const PORT = '8000'

const PROXY_CONFIG = [
    {
        context: [
            '/api'
        ],
        target: PROTOCOL + '://' + HOSTNAME + ':' + PORT,
        secure: false,
        changeOrigin: true
        // logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;
