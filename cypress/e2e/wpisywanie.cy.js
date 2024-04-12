/// <reference types="cypress"/>

import base from "../pages/base"
import search from "../pages/search"
import { searchPhrase, notFoundProduct } from "../fixtures/searchdata.json"
import resultpage from "../pages/resultpage"

describe("Wpisywanie tekstu w wyszukiwarke", () => {
    it("Wpisanie tekstu", () => {
        base.openHomePage(),
        search.typeSearchPhrase(searchPhrase),
        search.searchBox.should("have.value", searchPhrase),
        search.clearSearchbox(),
        search.typeSearchPhrase2(`${searchPhrase} {enter}`)
        resultpage.searchAlert.should("be.visible").and("include.text", notFoundProduct)
        search.searchBox.should("have.class", "search_query")
        search.searchBox.should("have.css", "margin-right", "1px")
    })
})  