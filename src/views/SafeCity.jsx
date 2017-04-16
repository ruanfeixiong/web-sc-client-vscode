import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PageView from '../components/BaseControl/PageView.jsx';
import EMap from '../components/BaseControl/EMap.jsx';
import { ScitySurvey, ScityCaseStatistic, ScityPoliceAndCar } from '../components/SafeCity';
import { initData } from '../mRedux/modules/SafeCity/scSurvey';

class SafeCity extends React.Component {

    componentDidMount() {
        const surveyInitData = bindActionCreators(initData, this.props.dispatch);
       const ss= async () =>
        {
           const ll = await fetch('http://192.168.33.99:8080/sqrest/', {})

        };
       ss();
        surveyInitData(2017);
        
    }
    render() {
        const { surveyModel } = this.props;
        //   <EMap src="http://192.168.33.99:8080/ccs/c3mvideo" top="18px" left="1368px" width="2221px" height="1795px"  />

        return <PageView>
            <ScitySurvey surveyModel={surveyModel} />
            <ScityCaseStatistic />
            <ScityPoliceAndCar />
        </PageView>;
    }
}

ScitySurvey.propTypes = {
    surveyModel: PropTypes.object
};
export default connect(state => ({ surveyModel: state.scSurvey }))(SafeCity);
