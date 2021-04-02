import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import PageHome from "./Pages/Home"
import ComponentAbout from "./Pages/About"
import ComponentContacts from "./Pages/Contacts"
import ComponentFeedbacks from "./Pages/Feedback"
import ComponentServices from "./Pages/Services"

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={PageHome} exact />
                <Route path="/ComponentAbout" component={ComponentAbout} />
                <Route path="/ComponentContacts" component={ComponentContacts} />
                <Route path="/ComponentFeedbacks" component={ComponentFeedbacks} />
                <Route path="/ComponentServices" component={ComponentServices} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes