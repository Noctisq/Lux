import { render, screen, waitForElementToBeRemovedt} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

it("The App loads with the initial state of true", () => {
  const { container } = render(<App />);
  const selectElement = screen.getByDisplayValue('Monthly');
  expect(selectElement.checked).toBe(true);
});

it("The app renders the three card components", () => {
  const { container } = render(<App />);
  const selectElement = screen.getByText('Standard');
  expect(selectElement).toBeInTheDocument();

});

it("The app just renders the enterprise card component", () => {
  const { container } = render(<App />);
  const selectElement = screen.getByText('Standard');
  expect(selectElement).not.toBeInTheDocument();

});

