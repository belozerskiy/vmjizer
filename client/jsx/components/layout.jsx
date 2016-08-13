/**
 * Created by Dark on 13.08.2016.
 */

import SideMenu from './sidemenu.jsx'
import Dashboard from './dashboard.jsx'

var Layout = React.createClass({
    render(){
        return(
            <div className="layout">
                <SideMenu />
                <Dashboard />
            </div>
        )
    }
});

export default Layout;

