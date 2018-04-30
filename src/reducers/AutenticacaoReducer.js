const INITIAL_STATE = {
    nome: 'Teste',
    email: 'email@email.com',
    senha: '123456',
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload }

        case 'modifica_senha':
            return { ...state, senha: action.payload }

        default:
            return state;
    }
};