import HomePageElements from "../Elements/HomePageElements"
const homePageElements = new HomePageElements
const url = Cypress.config("baseUrl")
const endpointCatalog = 'http://advantageonlineshopping.com/catalog/api/v1/deals/search?dealOfTheDay=true'

class HomePagePages {

    WaitUtilPageOpen = () => { cy.wait('@getDealOfTheday').its('response.statusCode').should('eq', 200) }

    AccesWebSite() {
        cy.visit(url);
        cy.intercept('GET', endpointCatalog).as('getDealOfTheday');
    }

    ClickMenuUser() {
        this.WaitUtilPageOpen();

        cy.get(homePageElements.btnUser()).click();
    }

    ClickCreateNewAccount() {
        cy.wait(10)
        cy.get(homePageElements.btnCreateAcount()).click();
    }

    ShoulAccessCreateNewAccount() {
        cy.url().should('contain', "/register");
    }

    InsertData(field) {
        var user = localStorage.getItem('user');
        var password = localStorage.getItem('password');

        field.toUpperCase() == "USER"
            ? cy.get(homePageElements.txtUser()).type(user)
            : cy.get(homePageElements.txtPassword()).type(password);
    }

    SignIn() {
        cy.get(homePageElements.btnSignIn()).click();
    }
}
export default HomePagePages