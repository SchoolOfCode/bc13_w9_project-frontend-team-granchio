describe("visit site", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("test general user flow of the home page", () => {
  it("The angry duck container selected", () => {
    cy.get(".angry-duck-container");
  });

  it("anon button clicked", () => {
    cy.get(".content-wrapper > div").click().wait(800);
  });
  it("the duck image clicked to go to the home", () => {
    cy.get(".duck-img").click().wait(800);
  });
  it("anon button clicked again", () => {
    cy.get(".content-wrapper > div").click().wait(800);
  });
});

describe("test general user flow of the forum page", () => {
  it("check H1 is rendered", () => {
    cy.get(".read").wait(800);
  });
  it("Clicked on the title input box and typed", () => {
    cy.get(".title-div > textarea")
      .click()
      .type("my new post from cypress")
      .wait(800);
  });
  it("Clicked on the content input box and typed", () => {
    cy.get(".content-div > textarea")
      .click()
      .type("my new post from cypress")
      .wait(800);
  });
  it("Clicked on the submit post button", () => {
    cy.get(".button")
      .click()
  .wait(800);
  });
  it("Checks first post expands upon click", () => {
    cy.get(":nth-child(1) > .post > .post-title-btn").click().wait(800);
  });
});

//Doesn't currently work but will rework 
// it("the comment input box working", () => {
//   cy.get('label > textarea')
// .click()
// .type("my new comment from cypress")
// .wait(800);
// });
