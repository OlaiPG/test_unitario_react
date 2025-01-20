import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders increment button', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Incrementar/i);
  expect(buttonElement).toBeInTheDocument();
});

test('El contador comienza en 0', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/Contador: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

test('Incrementa el valor del contador dos veces cuando se hace clic dos veces en el botón', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i);
    
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    expect(screen.getByText(/Contador: 2/i)).toBeInTheDocument();
  });

test('El contador no cambia sin hacer clic en el botón', () => {
    render(<Counter />);
    expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
    expect(screen.queryByText(/Contador: 1/i)).toBeNull();
  });

test('El botón incrementar está habilitado', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i);
    expect(buttonElement).toBeEnabled();
  });