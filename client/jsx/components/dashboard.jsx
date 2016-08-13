/**
 * Created by Dark on 13.08.2016.
 */

import Widgets from './widgets.jsx'

let data = [
    {
        title: "Resources"
    },
    {
        title: "Workbench"
    }
];

var Dashboard = React.createClass({
    render(){
        return(
            <div className="dashboard">
                <div className="header">
                    <p className="title">Dashboard</p>
                </div>
                <Widgets data={data} />
            </div>
        )
    }
});


export default Dashboard;

