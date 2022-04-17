import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import {languages} from "../../utils";
import {FormattedMessage} from 'react-intl';
import './Header.scss';

class Header extends Component {
    changeLanguage = (language)=>{
        this.props.changeLanguageAppRedux(language)
        
    }

    render() {
        const { processLogout } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='languages'>
                    <span className={this.props.lang ==='vi' ? 'language-vi active': 'language-vi'}
                        onClick={()=>this.changeLanguage(languages.VI)} >VI</span>
                    <span className={this.props.lang ==='en' ? 'language-en active': 'language-en'} 
                        onClick={()=>this.changeLanguage(languages.EN)}>EN</span>
                     {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

               
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
