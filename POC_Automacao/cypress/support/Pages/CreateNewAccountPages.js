import CreateNewAccountElements from "../Elements/CreateNewAccountElements"
import HomePageElements from "../Elements/HomePageElements"
var faker = require('faker');

const createNewAccountElements = new CreateNewAccountElements
const homePageElements = new HomePageElements
const endpointCountries = 'http://advantageonlineshopping.com//accountservice/ws/GetCountriesRequest'
var randomUserName = faker.internet.userName().substring(2);
var randomEmail = faker.internet.email();
var randomPassWord = faker.internet.password().substring(3);
var randomFirstName = faker.name.firstName();
var randomLastName = faker.name.lastName();
var randomPhoneNumber = faker.phone.phoneNumber();
var randomCity = faker.address.cityName();
var randomAddress = faker.address.streetAddress();
var randomState = faker.address.state();
var randomPostalCode = faker.address.zipCode();

class CreateNewAccountPages {

    WaitloadCreateNewAccount() {
        cy.intercept('POST', endpointCountries).as('getContries');
        cy.wait('@getContries').its('response.statusCode').should('eq', 200);
    }

    InsertInTheField(field) {
        let field2 = field.toUpperCase()
        switch (field2) {
            case (field2 = "USER NAME"):
                cy.get(createNewAccountElements.txtUserName()).type(randomUserName);
                break;
            case (field2 = "EMAIL"):
                cy.get(createNewAccountElements.txtEmail()).type(randomEmail);
                break;
            case (field2 = "PASSWORD"):
                cy.get(createNewAccountElements.txtPassWord()).type(randomPassWord);
                break;
            case (field2 = "FIRST NAME"):
                cy.get(createNewAccountElements.txtFirstName()).type(randomFirstName);
                break;
            case (field2 = "LAST NAME"):
                cy.get(createNewAccountElements.txtLastName()).type(randomLastName);
                break;
            case (field2 = "PHONE NUMBER"):
                cy.get(createNewAccountElements.txtPhoneNumber()).type(randomPhoneNumber);
                break;
            case (field2 = "CITY"):
                cy.get(createNewAccountElements.txtCity()).type(randomCity);
                break;
            case (field2 = "ADDRESS"):
                cy.get(createNewAccountElements.txtAddress()).type(randomAddress);
                break;
            case (field2 = "STATE"):
                cy.get(createNewAccountElements.txtState()).type(randomState);
                break;
            case (field2 = "POSTAL CODE"):
                cy.get(createNewAccountElements.txtPostalCode()).type(randomPostalCode);
                break;
            default:
                break;
        }
    }

    ConfirmPassWord() {
        cy.get(createNewAccountElements.txtConfirmPassWord()).type(randomPassWord);
    }

    RandomCountry() {
        cy.get(createNewAccountElements.lstCountry()).select('Brazil');
    }

    AcceptTerms() {
        cy.get(createNewAccountElements.chkregistrationAgreement()).click();
    }

    clickToCreateUser() {
        cy.get(createNewAccountElements.btnRegister()).click({ force: true });
    }

    UserLogged() {
        cy.get(homePageElements.lblUsername()).should('contain.text', randomUserName);;
    }

    SaveUserAndPassword() {
        localStorage.setItem('user', randomUserName);
        localStorage.setItem('password', randomPassWord);
    }

}
export default CreateNewAccountPages