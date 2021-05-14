Feature: Login Page
    Feature to sign in and create acount.


    Scenario: Access Create new acount
        Given acess the website
        When the user acces the menu user
        And click in create new account
        Then should access the Create account Page
    
    Scenario: Create new acount
        Given acess the website
        When the user acces the menu user
        And click in create new account
        And wait page load
        And insert the "user name"
        And insert the "email"
        And insert the "password"
        And confirm the password
        And insert the "first name"
        And insert the "last name"
        And insert the "phone number"
        And select a contry
        And insert the "city"
        And insert the "address"
        And insert the "state"
        And insert the "postal code"
        And the user accept the terms
        And the user click to create new account
        Then should sing in
    
    Scenario: Login and user correct
        Given acess the website
        When the user acces the menu user
        And insert "user"
        And insert "password"
        And the user click to sign in
        Then should sing in