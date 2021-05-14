import HomePagePages from "../Pages/HomePagePages"
const homePagePages = new HomePagePages

Given(/^acess the website$/, () => {
    homePagePages.AccesWebSite();
});

When(/^the user acces the menu user$/, () => {
    homePagePages.ClickMenuUser();
});

When(/^click in create new account$/, () => {
    homePagePages.ClickCreateNewAccount();
});

Then(/^should access the Create account Page$/, () => {
    homePagePages.ShoulAccessCreateNewAccount();
});

When(/^insert "([^"]*)"$/, (field) => {
    homePagePages.InsertData(field);
});

When(/^the user click to sign in$/, () => {
    homePagePages.SignIn();
});


