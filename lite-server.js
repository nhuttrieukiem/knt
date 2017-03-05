module.exports = 
 {
  "port": 3000,
  "files": ["./src/**/*.{html,htm,css,js,png,jpg,svg}"],
  server: {
    "baseDir": "./dist/",
    middleware: {
      1: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
    }
  }
};