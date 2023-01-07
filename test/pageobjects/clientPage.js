class ClientPage{
  get createClientButton(){return $('button.clients-add-user-dialog')}
  get surnameField(){return $('input[formcontrolname="userSurname"]')}
  get firstnameField(){return $('input[formcontrolname="userName"]')}
}
module.exports=new ClientPage()