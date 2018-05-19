const path = require('path')

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*test.js'
    ],
    tests: [
      'src/**/*.test.js',
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    compilers: {
      'src/**/*.js': wallaby.compilers.babel()
    },
    debug: true
  }
}