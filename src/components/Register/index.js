import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import ModalSuccess from '../Modal/ModalSuccess'
import { connect } from 'react-redux';
import store from '../../redux/store/store.js'
import { getUsers, updateUsers } from '../../redux/actions/actions';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: '',
            positions: [],
            name: '',
            email: '',
            phone: '',
            checkedPosition: 0,
            file: null,
            fileName: '',
            isValidFileFormat: null,
            focusFile: false,
            isValidName: null,
            isValidEmail: null,
            isValidPhone: null,
            isValidFile: null,
            isOpenModal: false,
        }

        this.form = React.createRef();
        this.scrollWidth = 0;
    }

    componentDidMount() {
        // get radiobtn
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.success) {
                this.setState({
                    positions: data.positions,
                    checkedPosition: data.positions[0].id
                });
            }
        })

        //get token
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.success) {
                this.setState({
                    token: data.token
                });
            }
        })

    }

    handleName = (e) => {
        this.setState({
            name: e.target.value,
            isValidName: e.target.value.length >= 2 ? true : false
        })
    }

    handleEmail = (e) => {
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            email: e.target.value,
            isValidEmail: reg.test(e.target.value) ? true : false
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value,
            isValidPhone: e.target.value.indexOf('_') != -1 || e.target.value == '' ? false : true
        })
    }

    handlePosition = (e) => {
        this.setState({
            checkedPosition: e.target.value
        })
    }

    handleFile = (e) => {
        let file = e.target.files[0];
        if(file) {
            let fileSize, fileExt, fileProportion;
            let img = new Image();
            let url = window.URL || window.webkitURL;
            img.src = url.createObjectURL(file);
            fileExt = (/\.(jpeg|jpg)$/i).test(file.name);
            fileSize = file.size <= 5000000 ;
            img.onload = () => {
                fileProportion = img.width >= 70 && img.height >= 70
                if(fileExt && fileSize && fileProportion) {
                    this.setState({
                        file: file,
                        fileName: file.name,
                        focusFile: false,
                        isValidFile: true
                    });
                } else {
                    this.setState({
                        file: null,
                        fileName: '',
                        focusFile: false,
                        isValidFile: false
                    })
                }
            }
        } else {
            this.setState({
                file: null,
                fileName: '',
                focusFile: false,
                isValidFile: false
            })
        }
    }

    setFocus = (e) => {
        this.setState({
            focusFile: true,
            fileName: '',
            isValidFile: null
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { token } = this.state;
        let data = new FormData();
        data.append('position_id', this.state.checkedPosition); 
        data.append('name', this.state.name); 
        data.append('email', this.state.email); 
        data.append('phone', this.state.phone); 
        data.append('photo', this.state.file);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: data, headers: { 'Token': token } }) 
        .then((response) => {
            return response.json(); 
        }) 
        .then((data) => { 
            if(data.success) { 
                fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
                .then((response) => { 
                    return response.json(); 
                })
                .then((data) => {
                    if(data.success) {
                        store.dispatch(getUsers(data.users))
                        this.setState({
                            name: '',
                            email: '',
                            phone: '',
                            checkedPosition: 0,
                            file: null,
                            fileName: '',
                            isValidFileFormat: null,
                            focusFile: false,
                            isValidName: null,
                            isValidEmail: null,
                            isValidPhone: null,
                            isValidFile: null,
                            isOpenModal: false,
                        })
                        this.form.current.reset();
                        this.openModal();
                    }
                })
            } else { 
            
            } 
        }) 
        .catch((error) => {

        });
    }

    getScrollbarWidth = () => {

        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);
      
        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);
        
        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
      
        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);
        return scrollbarWidth;
          
      }

    openModal = () => {
        this.scrollWidth = this.getScrollbarWidth()
        document.body.classList.add('modal-open');
        document.body.style.paddingRight = this.scrollWidth + 'px';
        document.querySelector('.header').style.right = this.scrollWidth + 'px';
        this.setState({
            isOpenModal: true
        })
    }

    closeModal = () => {
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = 0;
        document.querySelector('.header').style.right = 0;
        this.setState({
            isOpenModal: false
        })
    }

    render() {
        const { positions, name, email, fileName, isValidFileFormat, focusFile, isValidEmail, isValidName, isValidPhone, isValidFile, isOpenModal } = this.state; 
        return (
            <div className="register" id="register">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="h1 register__title text-ellipsis text-center">Register to get a work</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <p className="register__subtitle text-center">Attention! After successful registration and alert, update the list of users in the block from the top</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <form className="register-form" onSubmit={this.handleSubmit} ref={this.form}>
                                <div className={`form-group register-form__row ${isValidName === false ? 'error' : ''}`}>
                                    <label className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Your name" 
                                        className="form-control"
                                        value={name}
                                        onChange={this.handleName}
                                        maxLength={60}
                                    />
                                </div>
                                <div className={`form-group register-form__row ${isValidEmail === false ? 'error' : ''}`}>
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="text" 
                                        placeholder="Your email" 
                                        className="form-control"
                                        value={email}
                                        onChange={this.handleEmail}
                                    />
                                </div>
                                <div className={`form-group register-form__row ${isValidPhone === false ? 'error' : ''}`}>
                                    <label className="form-label">Phone number</label>
                                    <InputMask 
                                        mask="+380999999999" 
                                        placeholder="+380 XX XXX XX XX" 
                                        className="form-control test-phone"
                                        onChange={this.handlePhone}
                                        ref={this.inputPhone}
                                    />
                                    <p className="form-subtitle">Еnter phone number in open format</p>
                                </div>
                                <div className="register-form__position">
                                    <p className="form-label">Select your position</p>
                                    {
                                        positions.map((position, index) => {
                                            return (
                                                <div className="radio-btn" key={position.name}>
                                                    <input 
                                                        type="radio" 
                                                        name="position" 
                                                        id={position.name} 
                                                        defaultValue={position.id}
                                                        onChange={this.handlePosition}
                                                        defaultChecked={index == 0 ? true : false}
                                                    />
                                                    <label htmlFor={position.name} className="radio-name">{position.name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={`form-group register-form__row ${isValidFile === false ? 'error' : ''} ${focusFile ? 'focus' : ''}`}>
                                    <label className="upload-file">
                                        <p className="form-label">Photo</p>
                                        <input 
                                            type="file"
                                            id="fuck"
                                            className="form-control upload-file__input"
                                            onChange={this.handleFile}
                                        />
                                        <div className="upload-file__panel" onClick={this.setFocus}>
                                            {
                                                (() => {
                                                    if(fileName) {
                                                        return(
                                                            <div className="upload-file__name">{fileName}</div>
                                                        )
                                                    } else {
                                                        return(
                                                            <div className="upload-file__name">{!focusFile ? 'Upload your photo' : 'No file chosen'}</div>
                                                        )
                                                    }
                                                })()
                                            }
                                            <div className="upload-file__btn">Browse</div>
                                        </div>
                                    </label>
                                    { isValidFile === false ? 
                                        <p className="form-subtitle">Minimum size of photo <strong>70x70px</strong>. The photo format must be <strong>jpeg/jpg</strong> type. The photo size must not be greater than <strong>5 Mb</strong>.</p> : 
                                        null 
                                    }
                                </div>
                                <div className="col text-center">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary register-form__btn"
                                        disabled={ isValidEmail && isValidName && isValidPhone && isValidFile ? false : true }
                                    >
                                        Sing up now
                                    </button>

                                    {/* <button type="button" onClick={this.openModal}>toggle</button> */}
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
                <ModalSuccess 
                    closeModal={this.closeModal} 
                    isOpenModal={isOpenModal}
                /> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
    }
}

export default connect(mapStateToProps)(Register);