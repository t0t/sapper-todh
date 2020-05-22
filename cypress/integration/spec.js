describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /todh', () => {
		cy.get('nav a').contains('todh').click();
		cy.url().should('include', '/todh');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('blog').click();
		cy.url().should('include', '/blog');
	});
});