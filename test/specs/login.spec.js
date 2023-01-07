const loginPage = require('../pageobjects/loginPage');
const LoginPage = require('../pageobjects/loginPage')


describe('Login page on Navigator CRM', () =>{
  beforeEach('Setup browser', async()=>{
    await browser.url('http://167.114.201.175:5000/login');
  })
  afterEach('Clear browser', async()=>{
    await browser.reloadSession();
  })
  
  it('should login', async()=>{
    await LoginPage.dologin();
    await expect(browser).toHaveUrlContaining('clients');
  })

  it('should fail login', async()=>{
    await loginPage.dologin("d", "p");
    await expect(browser).toHaveAttrContaining('login');
  })
})

 
 
 