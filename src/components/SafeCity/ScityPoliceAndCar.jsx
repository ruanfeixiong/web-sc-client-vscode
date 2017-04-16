import React, {Component, PropTypes} from 'react';
import GroupBox from '../BaseControl/GroupBox.jsx';
import ReactEcharts from '../BaseControl/ReactEcharts.jsx';
const defaultStyles = {
    container: {
        position: 'absolute',
        width: '1290px',
        height: '607px',
        top: '1206px',
        left: '40px'
    }
};
class ScityPoliceAndCar extends Component {
    getChartOption() {
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['警员', '警车']
            },
            grid: {
                left: '6%',
                right: '6%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
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
                    type: 'bar',
                        barWidth : 30,
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
                    type: 'bar',
                        barWidth : 30,
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
                header='派出所警员警车统计'
                logo={require('../../images/SafeCity/派出所警员警车统计.png')}>
                <ReactEcharts
                    option={this.getChartOption()}
                    style={{
                    height: '500px',
                    width: '100%'
                }}
                    className='react_for_echarts'/>
            </GroupBox>
        );
    }
}

ScityPoliceAndCar.propTypes = {};

export default ScityPoliceAndCar;