// config.js file to ubdate the BASE_URL in the project to the project name

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/' + process.env.CI_PROJECT_NAME + '/'
      : '/'
  }