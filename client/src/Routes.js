import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormUser from './components/FormUser.js';
import SimplePage from './components/simplePage.js';


const Routes = () => {
    return(
      
      
        <Switch>
          <Route path="/form"   component={Auth(FormUser,true)}/> 
           <Route path="/simplePage"   component={Auth(SimplePage,true)}/>
      
        </Switch>      
   
    )
}
export default Routes;