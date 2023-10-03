import React from 'react';
import About from './About';

describe('<About />', () => {
	it('renders', () => {
		cy.mount(<About />);
	});
});
