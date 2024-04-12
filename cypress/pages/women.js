class Women {
    get topsCheckbox() {
        return cy.get("#layered_category_4")
    }

    get dressesChechbox() {
        return cy.get("#layered_category_8")
    }

    get sizeCheckbox() {
        return cy.get("#ul_layered_id_attribute_group_1 input")
    }

    checkTops() {
        this.topsCheckbox.check()
    }

    checkDresses() {
        this.dressesChechbox.check()
    }

    checkSize() {
        this.sizeCheckbox.check()
    }
}

export default new Women()