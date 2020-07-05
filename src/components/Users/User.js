import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLargeName: false
        }

        this.name = React.createRef();
    }

    componentDidMount() {
        if( this.name.current.clientHeight > 60 ) {
            this.setState({
                isLargeName: true
            })
        } else {
            this.setState({
                isLargeName: false
            })
        }
    }

    render() {
        const { item } = this.props;
        const { isLargeName } = this.state;
        return (
            <div className="col-12 col-md-4">
                <div className="user-item">
                    <div className="user-item__photo">
                        <img src={item.photo} className="user-item__image"/>
                    </div>
                    <div 
                        className={`user-item__name ${ isLargeName ? 'user-item__name--lg' : '' }`}
                        ref={this.name}
                    >
                        {item.name}
                    </div>
                    <div className="user-item__position">{item.position}</div>
                    <div className="user-item__email text-ellipsis">{item.email}</div>
                    <div className="user-item__tooltip">{item.email}</div>
                    <div className="user-item__phone">{item.phone}</div>
                </div>
            </div>
        )
    }
}

export default User;