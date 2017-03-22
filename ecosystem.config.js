module.exports = {
  apps: [{
    name: 'XT-API',
    script: 'api/index.js',
    interpreter: 'babel-node',
    watch: ['api', 'config'],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }, {
    name: 'XT-DEV',
    interpreter: 'babel-node',
    script: 'bin/devServer.js',
    watch: ['bin', 'config'],
    env: {
      NODE_ENV: 'development',
    },
  }]
}
