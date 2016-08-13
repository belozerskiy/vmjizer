/**
 * Created by Dark on 13.08.2016.
 */

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

export default Widgets;

