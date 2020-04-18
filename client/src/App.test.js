import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const wrapper = rtl.render(
  <App />
  
  )

});

describe('PlayerData', () => {
  it('renders a dib containing specific player', () => {
    const simulationDOM = rtl.render(
      <div>
        <h2>Shanice van de Sanden</h2>
      </div>
    )
    const h2 = simulationDOM.queryByText(/Shanice van de Sanden/i);
    expect(h2).toBeInTheDocument();
    console.log(h2.textContent);
  });
})
