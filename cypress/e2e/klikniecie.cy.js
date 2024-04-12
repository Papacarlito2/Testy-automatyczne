/// <reference types="cypress"/>

describe("Kliknięcie w element na stronie", () => {
    it("kliknięcie w zakładke Contact us", () => {
        cy.visit("/");
        cy.get(`a[title="Contact us"]`).click();
    })
})