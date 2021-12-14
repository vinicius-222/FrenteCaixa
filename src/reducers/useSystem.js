const initialState = {
    stbody:'B',
}

export default ( state = initialState, action) => {
    switch(action.type){
        case 'SET_STBODY':
            return{ ...state,stbody:action.payload.stbody};
            break;
    }

    return state;
}