const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.server = {
    enhanceMiddleware: (middleware) => {
        return (req, res, next) => {
            res.setHeader('Content-Type', 'application/javascript');
            middleware(req, res, next);
        };
    },
};

module.exports = config;
