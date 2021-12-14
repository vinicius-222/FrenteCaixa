import Cookies from 'js-cookie';
import qs from 'qs';
import { doLogout } from './AuthHandler';


const URL = 'https://salato.com.br';
const BASEAPI = URL+'/backEndSalato';
export const BASEAPIIMAGE = BASEAPI+'/Images/';
export const BASEAPIVIDEO = 'https://salato.com.br/backEndSalato/Images/Video/';

const apiFetchFile = async (endpoint, body) => {
    if(body.token){
        let jwt = Cookies.get('token');
        if(jwt){
            body.jwt = jwt;
        }
    }

    if(body.hash){
        let hash = Cookies.get('hash');
        if(hash){
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint,{
        method:'POST',
        body
    })

    const json = await res.json();

    if(json.error){
        doLogout();
        window.location.href = '/Login';
        return;
    }

}

const apiFetchPost = async (endpoint, body) =>{
    if(body.token){
        let jwt = Cookies.get('token');
        if(jwt){
            body.jwt = jwt;
        }
    }

    if(body.hash){
        let hash = Cookies.get('hash');
        if(hash){
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })

    const json = await res.json();
    if(json.error){
        doLogout();
        window.location.href = '/Login';
        return;
    }
}

const apiFetchGet = async (endpoint, body = []) => {
    if(body.token){
        let jwt = Cookies.get('token');
        if(jwt){
            body.jwt = jwt;
        }
    }

    if(body.hash){
        let hash = Cookies.get('hash');
        if(hash){
            body.hash = hash;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();
    if(json.error){
        doLogout();
        window.location.href = '/Login';
        return;
    }
}

const apiFetchGetEnd = async (endpoint, body = []) => {
   
    const res = await fetch(`${endpoint}`);
    const json = await res.json();

    return json;
}

const apiFetchDelete = async (endpoint, body = []) => {
    if(body.token){
        let jwt = Cookies.get('token');
        if(jwt){
            body.jwt = jwt;
        }
    }

    if(body.hash){
        let hash = Cookies.get('hash');
        if(hash){
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'DELETE',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    const json = await res.json();
    if(json.error){
        doLogout();
        window.location.href = '/Login';
        return;
    }
}

const apiFetchPut = async (endpoint,body = []) => {
    if(body.token){
        let jwt = Cookies.get('token');
        if(jwt){
            body.jwt = jwt;
        }
    }

    if(body.hash){
        let hash = Cookies.get('hash');
        if(hash){
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    
    const json = await res.json();
    if(json.error){
        doLogout();
        window.location.href = '/Login';
        return;
    }
}


const SalatoAPI = {
    login:async (email, pass) => {
        const json = await apiFetchPost(
            '/user/getlogin', 
            {email,pass}
        )
        return json;
    },

    newLogin:async (NmPessoa, DsLogin, pass) => {
        const json = await apiFetchPost(
            '/user/new_record', 
            {NmPessoa, DsLogin, pass}
        )
        return json;
    },

    getCategories:async () => {
        let json = [{"id":1,"Nome":"Salgados Fritos", "Status":false},
                    {"id":2,"Nome":"Salgados Fritos Mini Cento", "Status":false},
                    {"id":3,"Nome":"Salgados Assados", "Status":false},
                    {"id":4,"Nome":"Salagados Assados Mini Cento", "Status":false},
                    {"id":5,"Nome":"Bolo de Pote Unidade", "Status":false},
                    {"id":6,"Nome":"Mono Porcao Unidade", "Status":false},
                    {"id":7,"Nome":"Doces Diversos Unidade", "Status":false},
                    {"id":8,"Nome":"Petiscos Unidade", "Status":false},
                    {"id":9,"Nome":"Petiscos Porcao c/ 10", "Status":false},
                    {"id":11,"Nome":"Refeicoes Rapidas", "Status":false},
                    {"id":12,"Nome":"Tortas", "Status":false},
                    {"id":13,"Nome":"Kit Festas", "Status":false},
                    {"id":14,"Nome":"Bebidas", "Status":false},
                    {"id":15,"Nome":"Refrigerantes", "Status":false},
                    {"id":16,"Nome":"Sucos", "Status":false},
                    {"id":17,"Nome":"Cafes", "Status":false}
                ];
        return json;
    },

    getProducts:async (id) => {
        if(id == 1){
            let json = [{"id":1,"Nome":"Coxinha de Frango", "VlUnitario":4,"Status":false},
                    {"id":2,"Nome":"Coxinha de Costela", "VlUnitario":6, "Status":false},
                    {"id":3,"Nome":"Coxinha de Camarão c/ Req", "VlUnitario":7, "Status":false},
                    {"id":4,"Nome":"Enrolado de Queijo com Presunto", "VlUnitario":4, "Status":false},
                    {"id":5,"Nome":"Enrolado de Salsicha", "VlUnitario":4, "Status":false},
                    {"id":6,"Nome":"Aipim de Carne Moida", "VlUnitario":5, "Status":false},
                    {"id":7,"Nome":"Aipim de Carne Seca", "VlUnitario":6, "Status":false},
                    {"id":8,"Nome":"Aipim com Camarão", "VlUnitario":7, "Status":false},
                    {"id":9,"Nome":"Kibe", "VlUnitario":5, "Status":false}
                ];
            return json;
        }else if(id == 14){
            let json = [{"id":10,"Nome":"AGUA COM GAS 500ML", "VlUnitario":4,"Status":false},
                        {"id":11,"Nome":"AGUA SEM GAS 500ML", "VlUnitario":6, "Status":false},
                        {"id":12,"Nome":"ICE TEA PESSEGO 300ML", "VlUnitario":7, "Status":false},
                        {"id":13,"Nome":"ICE TEA LIMAO 300ML", "VlUnitario":4, "Status":false},
                        {"id":14,"Nome":"YKO", "VlUnitario":4, "Status":false},
                        {"id":15,"Nome":"GUARAVITA", "VlUnitario":5, "Status":false},
                        {"id":16,"Nome":"GUARAVITON", "VlUnitario":6, "Status":false},
                        {"id":17,"Nome":"HEINEKEN LONGNECK", "VlUnitario":7, "Status":false},
                        {"id":18,"Nome":"SODA ITALIANA", "VlUnitario":5, "Status":false}
        ];
    return json;
        }
    },

    getProductsList:async () => {
        let json = [{"id":1,"Nome":"Coxinha de Frango", "VlUnitario":4,"Status":false},
                {"id":2,"Nome":"Coxinha de Costela", "VlUnitario":6, "Status":false},
                {"id":3,"Nome":"Coxinha de Camarão c/ Req", "VlUnitario":7, "Status":false},
                {"id":4,"Nome":"Enrolado de Queijo com Presunto", "VlUnitario":4, "Status":false},
                {"id":5,"Nome":"Enrolado de Salsicha", "VlUnitario":4, "Status":false},
                {"id":6,"Nome":"Aipim de Carne Moida", "VlUnitario":5, "Status":false},
                {"id":7,"Nome":"Aipim de Carne Seca", "VlUnitario":6, "Status":false},
                {"id":8,"Nome":"Aipim com Camarão", "VlUnitario":7, "Status":false},
                {"id":9,"Nome":"Kibe", "VlUnitario":5, "Status":false},
                {"id":10,"Nome":"AGUA COM GAS 500ML", "VlUnitario":4,"Status":false},
                {"id":11,"Nome":"AGUA SEM GAS 500ML", "VlUnitario":6, "Status":false},
                {"id":12,"Nome":"ICE TEA PESSEGO 300ML", "VlUnitario":7, "Status":false},
                {"id":13,"Nome":"ICE TEA LIMAO 300ML", "VlUnitario":4, "Status":false},
                {"id":14,"Nome":"YKO", "VlUnitario":4, "Status":false},
                {"id":15,"Nome":"GUARAVITA", "VlUnitario":5, "Status":false},
                {"id":16,"Nome":"GUARAVITON", "VlUnitario":6, "Status":false},
                {"id":17,"Nome":"HEINEKEN LONGNECK", "VlUnitario":7, "Status":false},
                {"id":18,"Nome":"SODA ITALIANA", "VlUnitario":5, "Status":false}
            ];
        return json;

    },

    getFormasPagamentos:async() => {
        let json = [{"id":1,"Nome":"Dinheiro"},
                    {"id":2,"Nome":"Cheque"},
                    {"id":3,"Nome":"Cartao", "Tipo":[
                                                    {"id":13,"Nome":"Credito", "Tipos":[
                                                                                            {"id":8,"Nome":"Master Card"},
                                                                                            {"id":9,"Nome":"VISA"},
                                                                                            {"id":10,"Nome":"ELO"},
                                                                                            {"id":11,"Nome":"ALELO"},
                                                                                            {"id":12,"Nome":"AMERICAM EXPRESS"},
                                                                                        ]},
                                                    {"id":14,"Nome":"Debito", "Tipos":[
                                                                                            {"id":15,"Nome":"Master Card"},
                                                                                            {"id":16,"Nome":"VISA"},
                                                                                            {"id":17,"Nome":"ELO"},
                                                                                            {"id":18,"Nome":"ALELO"},
                                                                                            {"id":19,"Nome":"AMERICAM EXPRESS"},
                                                                                        ]}
                                                    ]},
                    {"id":4,"Nome":"Pendencia", "Tipo":[
                                                        {"id":20,"Nome":"Nao pagou"}
                                                        ]},
                    {"id":5,"Nome":"Cortesia"},
                    {"id":6,"Nome":"Outros"},
                    {"id":7,"Nome":"TEF"}];
        return json;   
    }
}

export default () => SalatoAPI;