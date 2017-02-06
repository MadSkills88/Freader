// Replace here with your MongoDB server address
exports.database = "mongodb://heroku_tk0chw45:gm03dj8anroks12mp36qh7jj8r@ds143559.mlab.com:43559/heroku_tk0chw45";
exports.port = process.env.PORT;
exports.cookieSecret = "gm03dj8anroks12mp36qh7jj8r";

exports.urlRegex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
exports.emailRegex = new RegExp("^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$");

exports.cacheTime = 60 * 60 * 1000; // 1 hour in milliseconds
exports.maxItems = 5;
