import React, {Component, PropTypes} from 'react';
import GroupBox from '../BaseControl/GroupBox.jsx';
import ReactEcharts from '../BaseControl/ReactEcharts.jsx';
const defaultStyles = {
    container: {
        position: 'absolute',
        width: '900px',
        height: '572px',
        top: '1242px',
        left: '40px'
    }
};
class CpEducation extends Component {
    getChartOption() {
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['警员', '警车']
            },

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        '派处所1',
                        '派处所2',
                        '派处所3',
                        '派处所4',
                        '派处所5',
                        '派处所6',
                        '派处所7'
                    ]
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '警员',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {}
                    },
                    data: [
                        221,
                        282,
                        122,
                        234,
                        290,
                        330,
                        310
                    ]
                }, {
                    name: '警车',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {}
                    },
                    data: [
                        20,
                        12,
                        11,
                        24,
                        20,
                        30,
                        30
                    ]
                }
            ]
        };
        return option;
    }
    render() {
        return (
            <GroupBox
                style={defaultStyles.container}
                header='教育程度'
                logo={require('../../images/PopCorporation/教育程度.png')}>

            </GroupBox>
        );
    }
}

CpEducation.propTypes = {};

export default CpEducation;