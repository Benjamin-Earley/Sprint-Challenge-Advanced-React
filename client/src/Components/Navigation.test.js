import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom'
import Navigation from './Navigation';

describe('Navigation', () => {
    it('renders Ladies Who Ball Out as h1', () => {
        const simulationDOM = rtl.render(<Navigation />)
        const h1 = simulationDOM.queryByText(/ladies who ball out/i)
        console.log(h1.textContent)
    })
})