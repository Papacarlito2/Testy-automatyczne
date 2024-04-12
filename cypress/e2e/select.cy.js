/// <reference types="cypress"/>

describe("Wybieranie obiektu z listy", () => {
    it("Klikniecie w zakładke Women", () => {
        cy.visit("/"),
        cy.get(`a[title="Women"]`).click()
    })
    it("Wybranie filtra Instock", () => {
        cy.get("#selectProductSort").select(5),
        cy.get("#selectProductSort").should("have.value", "quantity:desc")
    })
})