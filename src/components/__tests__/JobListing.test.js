import React from 'react';
import JobListing from '../JobListing';
import {render} from '@testing-library/react';

it('renders the job listing component', ()=>{

    const { container } = render(
        <JobListing />
    );
    expect(container).toBe(true);

});

