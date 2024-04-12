/// <reference types="cypress"/>

import base from "../pages/base"
import home from "../pages/home"
import women from "../pages/women"

describe("Test związany z zaznaczeniem checkboxa", () => {
    it("Kliknięcie w zakładke Women", () => {
        base.openHomePage(),
        home.clickOnWomenTab(),
        cy.url().should("include", "id_category=3&controller=category")

    })
    it("Zaznaczenie checkboxa w zakładce Women", () => {
        women.checkTops(),
        women.topsCheckbox.should("be.checked"),
        women.checkDresses(),
        women.dressesChechbox.should("be.checked"),
        women.checkSize()
        
    })
})