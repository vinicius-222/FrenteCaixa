const intitalState = {
    idbalcao:1,
    vendasBalcao:[],
    vendasMesa:[ {"id":1, "Nome":"Mesa 1", "VlTotal":0, "Venda":[]},
                 {"id":2, "Nome":"Mesa 2", "VlTotal":0, "Venda":[]},
                 {"id":3, "Nome":"Mesa 3", "VlTotal":0, "Venda":[]},
                 {"id":4, "Nome":"Mesa 4", "VlTotal":0, "Venda":[]},
                 {"id":5, "Nome":"Mesa 5", "VlTotal":0, "Venda":[]},
                 {"id":6, "Nome":"Mesa 6", "VlTotal":0, "Venda":[]},
                 {"id":7, "Nome":"Mesa 7", "VlTotal":0, "Venda":[]},
                 {"id":8, "Nome":"Mesa 8", "VlTotal":0, "Venda":[]},
                 {"id":9, "Nome":"Mesa 9", "VlTotal":0, "Venda":[]},
                 {"id":10, "Nome":"Mesa 10", "VlTotal":0, "Venda":[]},
                 {"id":11, "Nome":"Mesa 11", "VlTotal":0, "Venda":[]},
                 {"id":12, "Nome":"Mesa 12", "VlTotal":0, "Venda":[]},
                 {"id":13, "Nome":"Mesa 13", "VlTotal":0, "Venda":[]},
                 {"id":14, "Nome":"Mesa 14", "VlTotal":0, "Venda":[]}],
    indexvendasMesas:-1,
    VlVenda:0,
}

export default (state = intitalState, action)=> {
    switch(action.type){
        case 'SET_IDBALCAO':
            return{...state, idbalcao:action.payload.idbalcao}
            break;
        case 'SET_VENDASBALCAO':
            return{...state, vendasBalcao:action.payload.vendasBalcao}
            break;
        case 'SET_VENDASMESA':
            return{...state, vendasMesa:action.payload.vendasMesa}
            break;
        case 'SET_INDEXVENDASMESAS':
            return{...state, indexvendasMesas:action.payload.indexvendasMesas}
            break;
        case 'SET_VLVENDA':
            return{...state, VlVenda:action.payload.VlVenda}
            break;
    }
    return state;
}