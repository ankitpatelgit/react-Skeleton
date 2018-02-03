var react = require('react');
var ListItem = require('./Listitem.jsx');

var ingredients = [{ "id": 1, "text": "pizza" }, { "id": 2, "text": "pakoda" }, { "id": 3, "text": "panipuri" }]

var List = React.createClass({
    render: function(){
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient = {item.text} />;
        });
        return (<ul>{listItems}</ul>);
    }
});

module.exports=List;