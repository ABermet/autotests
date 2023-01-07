const loginPage = require('../pageobjects/loginPage')
const ClientPage = require('../pageobjects/clientPage');
const clientPage = require('../pageobjects/clientPage');

describe('Clients test', () =>{
beforeEach(async()=>{
  await loginPage.open();
  await loginPage.dologin();
  await clientPage.open();
})
  it('should create new client', async()=>{
//тут шаги открытия формы клиента и заполнения формы
await browser.$('button.clients-add-user-dialog').click;
await browser.pause(5000);  

})



})