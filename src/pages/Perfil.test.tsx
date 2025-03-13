import { render, screen } from "@testing-library/react";
import Perfil from "./Perfil";
import { BrowserRouter, useParams } from "react-router-dom";

const mockHistoryPush = jest.fn();
let mockUser = '';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), useHistory: () => ({
        push: mockHistoryPush
    }),
    useParams: () => ({
        user: mockUser
    })
}))

describe('Perfil', () =>{
    render(
        <BrowserRouter>
            <Perfil />
        </BrowserRouter>);

    it('Deve renderizar a tabela na página caso o usuário seja válido', ()=>{
        mockUser = 'Nath';
        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(mockHistoryPush).not.toHaveBeenCalled();
    })
})