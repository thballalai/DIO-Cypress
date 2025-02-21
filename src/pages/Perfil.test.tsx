import { render, screen } from "@testing-library/react";
import Perfil from "./Perfil";
import { BrowserRouter } from "react-router-dom";

describe('Perfil', () =>{
    render(
        <BrowserRouter>
            <Perfil />
        </BrowserRouter>);

    it('Deve renderizar a tabela na página', ()=>{
        expect(screen.getByRole('table')).toBeInTheDocument();
    })
})