/**
 * 메인 페이지로 접근한 후,
 * Header About 네비게이션 버튼을 클릭하면,
 * About 페이지에서 정보를 확인할 수 있습니다.
 * 그리고 잠시 Movie 페이지로 이동한 후,
 * Header 사용자 로고를 클릭하면,
 * 다시 About 페이지에서 정보를 확인할 수 있습니다.
 */

describe('About 페이지로 이동', () =>{
  it('메인 페이지로 접근합니다.', () =>{
    cy.visit('http://localhost:8080')
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('About 페이지로 이동합니다.', () =>{
    cy.get('header .nav-link')
      .contains('About')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('HEROPY')
  })

  it('영화 상세 페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('Movie')
      .click()
    cy.url()
      .should('include', '/movie')
  })

  it('About 페이지로 이동합니다.', () =>{
    cy.get('header .user')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('HEROPY')
  })
})