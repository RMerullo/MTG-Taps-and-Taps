import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pronouns: '',
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MyClassComponent;