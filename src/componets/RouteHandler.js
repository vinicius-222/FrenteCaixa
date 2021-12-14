import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//adicionare islogger apos o private 
export default({ children, ...rest}) => {
    let logged = true
    let authorized = (rest.private && !logged ? false : true);

    return(
        <Route
            {...rest}
            render={()=>
                authorized ? children : <Redirect to='/Home'/>
            }
        />
    )

}