import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ProjectManage extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            
            <div className="text-center" >Manage Projects</div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManage);
