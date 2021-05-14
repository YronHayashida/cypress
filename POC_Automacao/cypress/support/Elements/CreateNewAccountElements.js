class CreateNewAccountElements {
    txtUserName = () => { return ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine' };
    txtEmail = () => { return '[sec-name="userEmail"] > .inputContainer > .ng-pristine' };
    txtPassWord = () => { return ':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine' };
    txtConfirmPassWord = () => { return '[a-hint="Confirm password"] > .inputContainer' };
    txtFirstName = () => { return '[sec-name="userFirstName"] > .inputContainer > .ng-pristine' };
    txtLastName = () => { return '[sec-name="userLastName"] > .inputContainer > .ng-pristine' };
    txtPhoneNumber = () => { return ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine' };
    lstCountry = () => { return '[sec-name="userCountry"] > .inputContainer > .ng-valid' };
    txtCity = () => { return '[sec-name="userCity"] > .inputContainer > .ng-pristine' };
    txtAddress = () => { return '[sec-name="userAdress"] > .inputContainer > .ng-pristine' };
    txtState = () => { return '[sec-name="userState"] > .inputContainer' };
    txtPostalCode = () => { return '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine' };
    btnRegister = () => { return '#register_btnundefined' };
    chkregistrationAgreement = () => { return '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine' };
}
export default CreateNewAccountElements
