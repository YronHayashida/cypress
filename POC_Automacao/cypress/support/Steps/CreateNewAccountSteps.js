import CreateNewAccountPages from '../Pages/CreateNewAccountPages'
const createNewAccountPages = new CreateNewAccountPages

When(/^wait page load$/, () => {
    createNewAccountPages.WaitloadCreateNewAccount();
});

When(/^insert the "([^"]*)"$/, (field) => {
    createNewAccountPages.InsertInTheField(field);
});

When(/^confirm the password$/, () => {
    createNewAccountPages.ConfirmPassWord();
});

When(/^select a contry$/, () => {
    createNewAccountPages.RandomCountry();
});

When(/^the user accept the terms$/, () => {
    createNewAccountPages.AcceptTerms();
});

When(/^the user click to create new account$/, () => {
    createNewAccountPages.SaveUserAndPassword();
    createNewAccountPages.clickToCreateUser();
});

Then(/^should sing in$/, () => {
	createNewAccountPages.UserLogged();
});