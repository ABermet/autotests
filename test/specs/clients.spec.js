const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/ClientPage');
const clientPage = require('../pageobjects/ClientPage');

describe('Clients test', () => {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin();
        // await ClientPage.open();
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    xit('should create new client', async ()=> {
        // уже тут шаги открытия формы клиента и заполнения 
       // первый способ
        // await browser.pause(5000);
        // implicit , explicit
        await ClientPage.createClientButton.waitForDisplayed({ timeout: 10000 });
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия")
        await ClientPage.firstnameField.setValue("Тестовое имя")
        await ClientPage.genderRadio.click();
        await ClientPage.emailField.setValue("bellatrix.black.tester06@gmail.com");
        await ClientPage.middleNameField.setValue("Отчество");
        await ClientPage.birthField.setValue("05/06/1990");
        await ClientPage.phoneField.setValue("996700555666");
        await ClientPage.fillChild();
        await ClientPage.saveButton.click(); 
        await browser.pause(10000);
        await browser.acceptAlert();



        //  второй способ
        // let testingUser = {
        //     surname: "Тестовая фамилия"
        // }
        // await ClientPage.fillForm(testingUser)
        // окончание второго способ
    })

    //редактирование клиента
    it('should create new client', async () => {
      await ClientPage.createClientButton.waitForDisplayed({timeout: 10000 });
      await ClientPage.openFirstClientDetails.click();
      //await ClientPage.editModalPage.waitForDisplayed({timeout: 10000});

      //fiz karta
      // await ClientPage.editCardButton.click(); 
      // await browser.pause(10000);
      // await ClientPage.editCardField.setValue("445566");
      // await browser.pause(10000);


      await ClientPage.editSurnameField.clearValue();
      await ClientPage.editSurnameField.setValue("NEW SURNAME");
      await ClientPage.editFirstnameField.clearValue();
      await ClientPage.editFirstnameField.setValue("NEW NAME");

      await ClientPage.editPhoneButton.click();
      await ClientPage.editPhoneField.clearValue();
      await ClientPage.editPhoneField.setValue("996700222333");
      await ClientPage.editemailField.clearValue();
      await ClientPage.editemailField.setValue("testing@mail.ru");  
      await ClientPage.saveButton.click(); 

      await ClientPage.editChildButton.click();
      // await ClientPage.editchildNameField.clearValue();
      // await ClientPage.editchildNameField.setValue("Lina");

      await ClientPage.childNameButton.click();
      await ClientPage.childNameField.setValue("Lina");
      await ClientPage.childBirthDateField.setValue("01/01/2009")
      await ClientPage.childGenderSelect.click();
      await ClientPage.childGenderSelectOption.click();
      await ClientPage.saveButton.click();
      //await browser.pause(10000);


      await browser.pause(10000);
       

    })

})