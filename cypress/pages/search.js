class Search {
    get searchBox() {
        return cy.get(`input[name="search_query"]`)
    }
    typeSearchPhrase(searchValue) {
        this.searchBox.type(searchValue)
    }
    clearSearchbox() {
        this.searchBox.clear()
    }

    typeSearchPhrase2(searchValue) {
        this.searchBox.type(searchValue)
    }
}

export default new Search()