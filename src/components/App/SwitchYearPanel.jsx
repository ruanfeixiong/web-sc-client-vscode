import React, { Component, PropTypes } from 'react';
import DraggablePanel from '../BaseControl/DraggablePanel.jsx';
import {whiteNormalText90} from '../../styles/common/label.css';
class SwitchYearPanel extends Component {
    static propTypes = {
        top: PropTypes.string,
        left: PropTypes.string,
    };
    static defaultProps = {
        top: 0,
        let: 0
    }
    constructor(props) {
        super(props);
        this.state = {
            currentSYear: 2017
        }

    }
    handleLeftButtonClick = (e) => {
        this.setState((pState, props) => {
                    debugger
            return {
                currentSYear: pState.currentSYear-1
            }
        })

    }
    handleRightButtonClick = (e) => {
        this.setState((pState, props) => {
            return {
                currentSYear: pState.currentSYear+1
            }
        })
    }
    render() {
        const mergeStyles = {
            ...this.props,
            position: 'absolute',
            zIndex: 30,
            width: '400px',
            height: '100px',
            display: 'flex',
            flexDirection:'row'
        }
        return (
            <DraggablePanel style={mergeStyles} handle=".handle">
                    <button onClick={this.handleLeftButtonClick}>左</button>
                    <div className="handle" >
                        <span className={whiteNormalText90}>{this.state.currentSYear}</span>
                    </div>
                    <button onClick={this.handleRightButtonClick}>右</button>
            </DraggablePanel>
        );
    }
}

SwitchYearPanel.propTypes = {

};

export default SwitchYearPanel;