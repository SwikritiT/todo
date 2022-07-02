const {setDefaultTimeout, BeforeAll, Before, AfterAll, After} = require('@cucumber/cucumber')
const {startWebDriver, stopWebDriver, createSession, closeSession} = require('nightwatch-api')

setDefaultTimeout(60000)



BeforeAll(async function (){
    await startWebDriver({})
})

Before((async function(){
    await createSession({})
}))

AfterAll(async function(){
    await stopWebDriver()
})

After(async function(){
    await closeSession()
})
