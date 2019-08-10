import React from 'react';
import { shallow } from 'enzyme';

import Nav, { getClassName, capitaliseLabel } from '../../components/Nav';

describe('Nav', () => {
  const nav = shallow(
    <Nav labels={['first', 'sec', 'third']} active='first' />
  );

  it('is a nav tag', () => {
    expect(nav.name()).toEqual('nav');
  });

  it('has a class of .nav', () => {
    expect(nav.hasClass('nav')).toBeTruthy();
  });

  describe('Nav Buttons', () => {
    it('has a set of buttons with the correct class name', () => {
      const navButtons = nav.find('.nav--button');
      expect(navButtons).toHaveLength(3);
    });

    it('has a set of buttons with h4 tags', () => {
      const navButtons = nav.find('h4');
      expect(navButtons).toHaveLength(3);
    });

    it('has a set of buttons with button tags', () => {
      const navButtons = nav.find('button');
      expect(navButtons).toHaveLength(3);
    });

    it('has a set of buttons with the correct labels', () => {
      const navButtons = nav.find('.nav--button');
      const labels = ['First', 'Sec', 'Third'];
      navButtons.forEach((butt, b) => {
        expect(butt.text()).toEqual(labels[b]);
      });
    });
  });
});

describe('getClassName', () => {
  it('adds the nav--button--label regardless of active status', () => {
    const activeClassName = getClassName(true);
    const inactiveClassName = getClassName(false);
    expect((
      activeClassName.includes('nav--button--label') &&
      inactiveClassName.includes('nav--button--label')
    )).toBeTruthy();
  });

  it('adds the active modifier if the nav button is active', () => {
    const activeClassName = getClassName(true);
    expect(activeClassName.includes('nav--button--label__active'))
      .toBeTruthy();
  });

  it('does not add the active modifier if the nav button is not active', () => {
    const inactiveClassName = getClassName(false);
    expect(inactiveClassName.includes('nav--button--label__active'))
      .toBeFalsy();
  });
});

describe('capitaliseLabel', () => {
  it('capitalises the label', () => {
    const label = 'label';
    const capitalised = capitaliseLabel(label);
    expect(capitalised).toEqual('Label');
  });
});