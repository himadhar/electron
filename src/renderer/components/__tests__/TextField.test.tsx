import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TextField, { TextFieldDataTestId } from '../TextField/TextField';

describe('TextField', () => {
  let element;
  const elementId = 'input-field';
  beforeEach(() => {
    element = render(
      <TextField
        id={elementId}
        label="label"
        value="value"
        name="name"
        onChangeHandler={null}
      />
    );
  });
  it('should render the TextField', () => {
    expect(
      screen.getByTestId(`${TextFieldDataTestId}_${elementId}`)
    ).toBeInTheDocument();
  });
});
