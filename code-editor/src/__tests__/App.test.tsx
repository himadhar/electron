import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../renderer/App';
import { ListOfCodesDataTestId } from 'renderer/views/ListOfCodes/ListOfCodes';

describe('App', () => {
  let element
  beforeEach(() => {
    element = render(<App />);
  });
  it('should render the App', () => {
    expect(element).toBeTruthy();
  });
  it('should consist the list of codes element', () => {
    expect(screen.getByTestId(ListOfCodesDataTestId)).toBeInTheDocument();
  });
});
