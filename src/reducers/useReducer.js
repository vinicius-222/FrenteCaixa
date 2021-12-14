const initialState = {
    nome:'',
    StMenu:false,
    
};

export default (state = initialState, action) => {

    switch(action.type){
        case 'SET_NOME':
            return { ...state, nome:action.payload.nome};
            break;
        case 'SET_STMENU':
            return { ...state, StMenu:action.payload.StMenu}
            break;
    }
    return state;
}