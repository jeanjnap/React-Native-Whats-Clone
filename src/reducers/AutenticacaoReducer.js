const INITIAL_STATE = {
    nome: 'Teste',
    email: 'email@email.com',
    senha: '123456',
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    return state;
};