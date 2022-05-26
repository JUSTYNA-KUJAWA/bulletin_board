import React from 'react';
import { shallow } from 'enzyme';
import { PostEditComponent } from './PostEdit';

xdescribe('Component PostEdit', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostEditComponent  postToEdit={{}}/>);
    expect(component).toBeTruthy();
  });
});
