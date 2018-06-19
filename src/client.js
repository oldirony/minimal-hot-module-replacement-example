const yeah = require('./yeah')
document.querySelector('p').innerText = yeah

if (module.hot) {
  module.hot.accept()
}