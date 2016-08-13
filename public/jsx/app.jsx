"use strict";

import Layout from './components/layout.jsx'

var App = React.createClass({
    render(){
        return (
            <Layout />
        );
    }
});

ReactDOM.render(<App />, document.getElementById("app"));
