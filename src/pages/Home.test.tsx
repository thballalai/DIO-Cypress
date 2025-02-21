import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Home from './Home';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), useHistory: () => ({
        push: mockHistoryPush
    })
}))

describe('Home', () => {
    it('Deve informar usuário e ser redirecionado para a página de perfil', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const input = screen.getByRole('textbox', {name: 'User'});
        const button = screen.getByRole('button', { name: 'Entrar' });

        fireEvent.change(input, {
            target: { value: 'usuario' }
        })
        fireEvent.click(button);
        expect(mockHistoryPush).toHaveBeenCalled();
    })

    it('Não deve redirecionar para a página de perfil, caso o usuário não seja informado', () => {
        window.alert = jest.fn();
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>

        )
        const button = screen.getByRole('button', { name: 'Entrar' });

        fireEvent.click(button);
        expect(mockHistoryPush).not.toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalled();
    })
})