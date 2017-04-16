import React, {Component,PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {increaseAction} from '../mRedux/modules/counter';
import * as echartactions from '../mRedux/modules/echart';
class MainView extends Component {
    static propTypes={
        dispatch:PropTypes.func,
        counter:PropTypes.object,
        echartData:PropTypes.array,
    }
    render() {
        const {counter,echartData,dispatch}=this.props;
        const increaseClick=bindActionCreators(increaseAction,dispatch);
          const echartfunc=bindActionCreators(echartactions,dispatch);
        return (
            <div>            
                 <button onClick={echartfunc.fetchPosts}>get chart data</button>          
            </div>
        );
    }
}

export default connect(state=>({
    counter:state.counter,
    echartData:state.echart
}))(MainView);