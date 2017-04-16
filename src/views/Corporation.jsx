import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import EMap from '../components/BaseControl/EMap.jsx';
import PageView from '../components/BaseControl/PageView.jsx';
import {CpAge,CpTrend,CpEducation,CpAnalysis} from '../components/Corporation';
class Corporation extends React.Component {
    render() {
        const {surveyModel} = this.props;
        return <PageView>
            <CpTrend />
            <CpAge/>
            <CpEducation/>
            <CpAnalysis />
            <EMap src="http://192.168.33.99:8080/ccs/corporation" top="225px" left="980px" width="1680px" height="1588px"/>
        </PageView>;
    }
}
Corporation.propTypes = {
    surveyModel: PropTypes.object
};
export default connect(state => ({surveyModel: state.scSurvey}))(Corporation);
