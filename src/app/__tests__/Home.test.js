import React from 'react';
import { expect } from 'chai';
import { mountWithIntl } from '../helpers/intlEnzymeTest';

import Home from '../components/Home';

describe('Home Page', () => {
  const title = 'GROW YOUR INSTAGRAM FOLLOWERS WITH OUR SMART PLATFORM.';

  let wrapperIntl;

  beforeEach(() => {
    wrapperIntl = mountWithIntl(<Home />);
  });

  it('render the Home component', () => {
    expect(wrapperIntl.find('.main-landing').length).to.equal(1);
  });

  it(`should have title '${title}'`, () => {
    expect(wrapperIntl.find('.hero > .row > div > .title').text()).to.contain(title);
  });
});
