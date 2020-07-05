import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store/store.js'
import { getUsers, updateUsers } from '../../redux/actions/actions';

import User from './User.js'

class Users extends Component {
    constructor(props){
        super(props)

        this.state = {
            appendCnt: 3,
            isEnd: false,
        }
    }

    componentDidMount() {
        const { startCnt, currPage } = this.props;
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${startCnt}`)
        .then((response) => { 
            return response.json(); 
        })
        .then((data) => {
            if(data.success) {
                store.dispatch(getUsers(data.users))
            }
        })
    }

    showMore = () => {
        const { appendCnt } = this.state;
        const { currPage } = this.props;
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currPage + 1}&count=${appendCnt}`)
        .then((response) => { 
            return response.json(); 
        })
        .then((data) => {
            if(data.success) {
                this.setState({
                    isEnd: (data.total_pages -1) == currPage ? true : false,
                })
                store.dispatch(updateUsers(data.users))
            } else {

            }
        })
    }

    render() {
        const { isEnd } = this.state;
        const { users } = this.props;
        return (
            <div className="users" id="users">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="h1 users__title text-ellipsis text-center">Our cheerful users</h2>
                            <p className="users__subtitle text-center">Attention! Sorting users by registration date</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            users.map((item) => {
                                return(
                                    <User item={item}  key={item.id}/>
                                )
                            })
                        }

                        {/* static items for test pp */}

                        {/* <div className="col-12 col-md-4">
                            <div className="user-item">
                                <div className="user-item__photo">
                                    <img src="img/photo-cover.png" className="user-item__image"/>
                                </div>
                                <div className="user-item__name">Maximillian</div>
                                <div className="user-item__position">Leading specialist of the Control Department</div>
                                <div className="user-item__email text-ellipsis">controldepartment@gmail</div>
                                <div className="user-item__tooltip">controldepartment@gmail</div>
                                <div className="user-item__phone">+380 50 678 03 24</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="user-item">
                                <div className="user-item__photo">
                                    <img src="img/photo-cover.png" className="user-item__image"/>
                                </div>
                                <div className="user-item__name user-item__name--lg">Adolph Blaine Charles David Earl Matthew Matthew</div>
                                <div className="user-item__position">Contextual advertising specialist</div>
                                <div className="user-item__email text-ellipsis">adolph.blainecharles@asdasda.com</div>
                                <div className="user-item__tooltip">adolph.blainecharles@asdasda.com</div>
                                <div className="user-item__phone">+380 50 678 03 24</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="user-item">
                                <div className="user-item__photo">
                                    <img src="img/photo-cover.png" className="user-item__image"/>
                                </div>
                                <div className="user-item__name">Elizabeth</div>
                                <div className="user-item__position">Frontend developer</div>
                                <div className="user-item__email text-ellipsis">elisabet.front@gmail.com</div>
                                <div className="user-item__tooltip">elisabet.front@gmail.com</div>
                                <div className="user-item__phone">+380 50 678 03 24</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="user-item">
                                <div className="user-item__photo">
                                    <img src="img/photo-cover.png" className="user-item__image"/>
                                </div>
                                <div className="user-item__name">Alexander Jayden</div>
                                <div className="user-item__position">Contextual advertising specialist</div>
                                <div className="user-item__email text-ellipsis">Backend developer</div>
                                <div className="user-item__tooltip">Backend developer</div>
                                <div className="user-item__phone">+380 50 678 03 24</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="user-item">
                                <div className="user-item__photo">
                                    <img src="img/photo-cover.png" className="user-item__image"/>
                                </div>
                                <div className="user-item__name">Noah</div>
                                <div className="user-item__position">QA</div>
                                <div className="user-item__email text-ellipsis">noah1998@gmail.com</div>
                                <div className="user-item__tooltip">noah1998@gmail.com</div>
                                <div className="user-item__phone">+380 50 678 03 24</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="user-item">
                                <div className="user-item__photo">
                                    <img src="img/photo-cover.png" className="user-item__image"/>
                                </div>
                                <div className="user-item__name user-item__name--lg">Liamgrievescasey Smith Wiam</div>
                                <div className="user-item__position">Lead designer</div>
                                <div className="user-item__email text-ellipsis">liamgrievescasey.smith@example.com</div>
                                <div className="user-item__tooltip">liamgrievescasey.smith@example.com</div>
                                <div className="user-item__phone">+380 50 678 03 24</div>
                            </div>
                        </div> */}
                    </div> 
                    {
                        !isEnd ? 
                            <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-primary user-load" onClick={this.showMore}>Show more</button>
                                </div>
                            </div> : null
                    }
                        
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
        startCnt: state.getUsers.startCnt,
        currPage: state.getUsers.currPage,
    }
}



export default connect(mapStateToProps)(Users);