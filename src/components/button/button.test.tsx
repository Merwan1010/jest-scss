import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from './button';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
    it('renders the text prop', () => {
        const { getByText } = render(<Button text="Click me" />);
        const buttonElement = getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls the onClick prop when clicked', async () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
        const buttonElement = getByText(/click me/i);
        fireEvent.click(buttonElement);
        await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
    });

    it('disables the button when disabled prop is true', () => {
        const { getByText } = render(<Button text="Click me" disabled />);
        const buttonElement = getByText(/click me/i);
        expect(buttonElement).toBeDisabled();
    });

    it(`
    text should disappears;
    button should be disabled;
    Spinning component should show;
    when clicked on button passing an async function as props`, async () => {
        const asynFunction = jest.fn(async () => {
            await new Promise<void>((innerResolve) => setTimeout(innerResolve, 500));
            return;
        })
        const { getByText, queryByText, queryByRole } = render(<Button text="Click me" onClick={asynFunction} />);
        const buttonElement = getByText(/click me/i);
        fireEvent.click(buttonElement);

        expect(queryByText(/click me/i)).toBeNull();
        expect(buttonElement).toBeDisabled();
        const spinnerElements = queryByRole('status');
        expect(spinnerElements).toBeInTheDocument()
    });


    it('button background should be white when not filled', () => {
        const { getByRole } = render(<Button text="Click me" fill={false} />);
        const buttonElement = getByRole('button');
        expect(buttonElement).not.toHaveClass('fill');

        const buttonStyle = window.getComputedStyle(buttonElement);
        console.log(buttonStyle);
        const backgroundColor = buttonStyle.getPropertyValue('background-color');
        expect(backgroundColor).toBe('white');
    });

});

