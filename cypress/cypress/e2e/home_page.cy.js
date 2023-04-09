describe("A Casa do Criador - HomePage e2e tests", () => {
  it.skip("Test to assure if the darkmode is working.", () => {
    cy.visit("josegnilton.github.io/BelezaACasaDoCriador");

    cy.viewport(1300, 900);
    cy.wait(3000);

    cy.get(".change-theme").click();
    cy.wait(3000);
  }),
    it.skip("Test to assure if the scrollToTop button is working.", () => {
      cy.visit("josegnilton.github.io/BelezaACasaDoCriador");

      cy.viewport(1300, 900);
      cy.wait(3000);

      cy.window().scrollTo("bottom");
      cy.wait(3000);

      cy.get("#scroll-top").click();
    }),
    it("Test to assure if the contact form is working.", () => {
      cy.visit("josegnilton.github.io/BelezaACasaDoCriador");

      cy.viewport(1300, 900);
      cy.wait(3000);

      cy.window().scrollTo("bottom");
      cy.wait(3000);

      cy.get("#nome").type("Nome de Teste");
      cy.get("#email").type("example@gmail.com");
      cy.get("#mensagem").type(
        "Sed viverra volutpat sapien, a facilisis nisi viverra a. Morbi efficitur efficitur urna. Nullam a viverra risus. Sed lacinia mauris eget faucibus lacinia. Aenean et lobortis purus."
      );

      cy.get('.contact__button').click();
      cy.wait(3000);
    });
});
