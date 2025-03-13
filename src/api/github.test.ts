import axios from 'axios';
import gitApi from "./github";

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('github', () => {
    it('Deve retornar login e ID do usuário', async () => {
        axiosMock.get = jest.fn().mockResolvedValue( { data: {login: 'nath', id: '123456'}})

        const response = await gitApi.getUser('nath')
        expect(response).toMatchObject({ data: {login: 'nath', id: '123456'}})
    })

    it('Deve retornar a mensagem de usuário não encontrado', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({ data: {
            message: 'Not Found'
        }})

        const response = await gitApi.getUser('usuario-invalido')
        expect(response).toMatchObject({message: 'Not Found'})
    })
})