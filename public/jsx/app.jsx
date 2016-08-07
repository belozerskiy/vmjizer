"use strict";

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

var Widgets = React.createClass({
    render(){
        var data = this.props.data;

        var widgetTemp = data.map(function(item){
            return(
                <div className="widget">
                    <div className="header">
                        <p className="title">{item.title}</p>
                    </div>
                </div>
            );
        });

        return(
            <div className="widgets">
                {widgetTemp}
            </div>
        )
    }
});

var data = [
    {
        title: "Resources"
    },
    {
        title: "Worbench"
    }
];

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


var Accordion = React.createClass({
    getInitialState: function() {
        // we should also listen for property changes and reset the state
        // but we aren't for this demo
        return {
            // initialize state with the selected section if provided
            selected: this.props.selected
        };
    },

    render: function() {
        // enhance the section contents so we can track clicks and show sections
        var children = React.Children.map(
            this.props.children, this.enhanceSection);

        return (
            <div className="accordion">
                {children}
            </div>
        );
    },

    // return a cloned Section object with click tracking and "active" awareness
    enhanceSection: function(child) {
        var selectedId = this.state.selected,
            id = child.props.id;

        return React.addons.cloneWithProps(child, {
            key: id,
            // private attributes/methods that the Section component works with
            _selected: id === selectedId,
            _onSelect: this.onSelect
        });
    },

    // when this section is selected, inform the parent Accordion component
    onSelect: function(id) {
        this.setState({selected: id});
    }
});

// the Accordion Section component
Accordion.Section = React.createClass({
    render: function() {
        var className = 'accordion-section' + (this.props._selected ? ' selected' : '');

        return (
            <div className={className}>
                <h3 onClick={this.onSelect}>
                    {this.props.title}
                </h3>
                <div className="body">
                    {this.props.children}
                </div>
            </div>
        );
    },

    onSelect: function() {
        // tell the parent Accordion component that this section was selected
        this.props._onSelect(this.props.id);
    }
});

var App = React.createClass({
    render(){
        return (
            <Layout />
        );
    }
});

ReactDOM.render(<App />, document.getElementById("app"));
