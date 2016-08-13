/**
 * Created by Dark on 13.08.2016.
 */

var SideMenu = React.createClass({
    render(){
        return(
            <div className="side-menu">
                <ul>
                    <li><a href="#home"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                    <li><a href="#home"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                    <li><a href="#home"><i className="fa fa-tasks" aria-hidden="true"></i></a></li>
                    <li><a href="#home"><i className="fa fa-cog" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        )
    }
});

export default SideMenu;

