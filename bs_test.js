var webdriver = require('selenium-webdriver')

module.exports.runTest = function (driver) {
  driver.get('http://www.react-most-wanted2.com').then(function () {
    var passwordButton = driver.wait(webdriver.until.elementLocated(webdriver.By.className('firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-password firebaseui-id-idp-button')))
    var emailInput = driver.wait(webdriver.until.elementLocated(webdriver.By.name('email')))
    var passwordInput = driver.wait(webdriver.until.elementLocated(webdriver.By.name('password')))
    var nextButton = driver.wait(webdriver.until.elementLocated(webdriver.By.className('firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored')))

    passwordButton.click().then(() => {
      emailInput.sendKeys('test@test.com').then(() => {
        nextButton.click().then(() => {
          passwordInput.sendKeys('123456').then(() => {
            passwordInput.sendKeys(webdriver.Key.ENTER).then(() => {
              driver.quit()
            })
          })
        })
      })
    })
  }).catch(e => {
    driver.quit()
    console.log('Test Failed')
    process.exit(1)
  })
}
