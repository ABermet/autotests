class LoginPage {
get LoginField (){return $('input[name="userName"]')}
get passwordField () {return $('input[name="password')}
get submitButton () {return $ ('button[type="submit')}

async dologin(userName="Admin", password="Admin@Navi"){
  await this.LoginField.setValue(userName);
  await this.passwordField.setValue(password);
  await this.submitButton.click();
}
}
module.exports = new LoginPage();