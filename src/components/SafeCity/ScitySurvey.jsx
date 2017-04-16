import React, { Component, PropTypes } from 'react';
import qpidHepler from '../../uitls/qpidHelper';
import { bordersurvey } from '../../styles/common/border.css';
import { whiteNormalText26, yellowBoldText68, yellowBoldText90, baseBlueNormalText26, lightRedNormalText48, lightGreenNormalText48 } from '../../styles/common/label.css';
import { logoImage } from '../../styles/common/image.css';
import { flexColCenter} from '../../styles/common/flexDiv.css';
import PopupWin from '../BaseControl/PopupWin.jsx';

const defaultStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        position: 'absolute',
        width: '1290px',
        height: '221px',
        top: '18px',
        left: '40px'
    },
    col1: {
        width: '200px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    col2col4: {
        width: '400px',
        marginLeft: '30px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    col3: {
        width: '200px',
        marginLeft: '30px',
        display: 'flex',
        padding: '5px 0 5px 0',
        flexDirection: 'column',
        alignItems: 'center'
    }

};
const defaultProps = {
    surveyModel: {
        citySafetyIndex: 100,
        bayonetSpotNum: 210,
        videoOnOffLineModel: {
            totalNum: 1200,
            onLineNum: 53,
            offLineNum: 1223
        },
        bayonetDeviceOnOffLineModel: {
            totalNum: 230,
            onLineNum: 120,
            offLineNum: 101
        }
    }
};
class ScitySurvey extends Component {
    constructor(props) {
        super(props);

    }
    messageReceived = (msg) => {
        const { para } = msg;
        if (para == 'open') {
            this.refs.win1.showModal();
        } else if (para == 'close') {
            this.refs.win1.hideModal();
        }
    }
    componentDidMount() {
        qpidHepler.addEvent('messageReceived', this.messageReceived);
    }
    componentWillUnmount() {
        qpidHepler.removeEvent('messageReceived', this.messageReceived);
    }
    render() {
        const { surveyModel } = this.props;
        return (
            <div style={defaultStyles.container}>
                <div className={bordersurvey} style={defaultStyles.col1}>
                    <span className={whiteNormalText26} style={{
                        marginTop: '45px'
                    }}>城市安全指数</span>
                    <span className={yellowBoldText90}>{surveyModel.citySafetyIndex}</span>
                </div>
                <div className={bordersurvey} data-role='border-survey-click' onClick={() => {
                    this.refs.win1.showModal();
                }} style={defaultStyles.col2col4}>
                    <div className={flexColCenter} style={{
                        width: '65%'
                    }}>
                        <img className={logoImage} src={require('../../images/SafeCity/视频点位总数.png')} /> <span className={baseBlueNormalText26}>视频总数（个）</span> <span className={yellowBoldText68}>{surveyModel.videoOnOffLineModel.totalNum}</span>
                    </div>
                    <div className={flexColCenter} style={{
                        marginLeft: '11px',
                        width: '35%'
                    }}>
                        <span className={baseBlueNormalText26}>在线</span> <span className={lightGreenNormalText48}>{surveyModel.videoOnOffLineModel.onLineNum}</span> <span className={baseBlueNormalText26}>离线</span>      <span className={lightRedNormalText48}>{surveyModel.videoOnOffLineModel.offLineNum}</span>
                    </div>
                </div>
                <div className={bordersurvey} style={defaultStyles.col3}>
                    <img className={logoImage} src={require('../../images/SafeCity/卡口点位.png')} /> <span className={baseBlueNormalText26}>卡口点位（个）</span> <span className={yellowBoldText68}>{surveyModel.bayonetSpotNum}</span>
                </div>
                <div className={bordersurvey} style={defaultStyles.col2col4}>
                    <div className={flexColCenter} style={{
                        width: '65%'
                    }}>
                        <img className={logoImage} src={require('../../images/SafeCity/卡口设备.png')} /> <span className={baseBlueNormalText26}>卡口设备(个)</span> <span className={yellowBoldText68}>{surveyModel.bayonetDeviceOnOffLineModel.totalNum}</span>
                    </div>
                    <div className={flexColCenter} style={{
                        marginLeft: '11px',
                        width: '35%'
                    }}>
                        <span className={baseBlueNormalText26}>在线</span> <span className={lightGreenNormalText48}>{surveyModel.bayonetDeviceOnOffLineModel.onLineNum}</span> <span className={baseBlueNormalText26}>离线</span>      <span className={lightRedNormalText48}>{surveyModel.bayonetDeviceOnOffLineModel.offLineNum}</span>
                    </div>
                </div>
                <PopupWin ref="win1" header='视频详细信息弹窗'>
                    1244444444444444444444444
              </PopupWin>
            </div>
        );

    }
}
ScitySurvey.defaultProps = defaultProps;
ScitySurvey.propTypes = {
    surveyModel: PropTypes.object
};
export default ScitySurvey;