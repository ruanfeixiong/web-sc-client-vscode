import React, { Component, PropTypes } from 'react';
import DraggableCore from 'react-draggable';

class SwitchYearPanel extends Component {
    render() {
        return (
            <DraggableCore handle=".handle">
                <div>
                    <div className="handle" style={{width:'400px',height:'400px'}}>Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </div>
            </DraggableCore>
        );
    }
}

SwitchYearPanel.propTypes = {

};

export default SwitchYearPanel;