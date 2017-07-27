import React, {Component}  from  "react";
//import "../style/createUserForm.css";

class UserAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            id: '',
            placeholder: ''
        }

        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }

    handleUserSubmit(event) {
        event.preventDefault();

        let name = this.state.name;

        if( name.length < 2 ) {
            this.setState({ placeholder: "Write your name, please!"});
            return ;
        }

        this.props.handleUserSubmit({ name: name});
        this.setState({name: '', placeholder: "Write your name, please!"})
    }

    render() {
        return (
            <form className="createUserForm" onSubmit={this.handleUserSubmit}>
                <input
                    type="text"
                    placeholder={this.state.placeholder}
                    value={this.state.name}
                    //onChange={this.handleNameChange}
                />
                <input type="submit" value="Добавить" />
            </form>
        )
    }

}
export default UserAdd;
