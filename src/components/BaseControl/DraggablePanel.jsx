import React, { Component, PropTypes } from 'react';
import {DraggableCore} from 'react-draggable';

class DraggablePanel extends Component {
    static displayName = 'DraggablePanel';

    static propTypes = {
        handle:PropTypes.string,
        onStart: PropTypes.func,
        onDrag: PropTypes.func,
        onStop: PropTypes.func,
        position: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        style:PropTypes.object
    };

    static defaultProps = {
        handle:null,
        onStart: () => { },
        onDrag: () => { },
        onStop: () => { },
        position: { x: 0, y: 0 },
        style: {
            zIndex:30
        }
    };

    state;

    constructor(props) {
        super(props);

        this.state = {
            // Whether or not we are currently dragging.
            dragging: false,

            // Whether or not we have been dragged before.
            dragged: false,

            // Current transform x and y.
            x: props.position.x,
            y: props.position.y,

        };
    }

    componentWillMount() {
        if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
            // eslint-disable-next-line
            console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' +
                'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' +
                '`position` of this element.');
        }
    }

    componentWillReceiveProps(nextProps) {
        // Set x/y if position has changed
        if (nextProps.position &&
            (!this.props.position ||
                nextProps.position.x !== this.props.position.x ||
                nextProps.position.y !== this.props.position.y
            )
        ) {
            this.setState({ x: nextProps.position.x, y: nextProps.position.y });
        }
    }

    componentWillUnmount() {
        this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
    }

    onDragStart = (e, coreData) => {
        const shouldUpdate = this.props.onStart(e, coreData);
        if (shouldUpdate === false) return false;
        this.setState({ dragging: true, dragged: true });
    };

    onDrag = (e, coreData) => {
        if (!this.state.dragging) return false;
        const tr = document.body.style.transform;
        const scaleFactor = tr.split('(')[1].split(')')[0].split(',');
        const newState = {
            x: (this.state.x + coreData.deltaX/scaleFactor[0]),
            y: (this.state.y + coreData.deltaY/scaleFactor[1])
        };
     
        // Short-circuit if user's callback killed it.
        const shouldUpdate = this.props.onDrag(e, coreData);
        if (shouldUpdate === false) return false;

        this.setState(newState);
    };

    onDragStop = (e, coreData) => {
        if (!this.state.dragging) return false;
        const shouldStop = this.props.onStop(e, coreData);
        if (shouldStop === false) return false;
        const newState = {
            dragging: false
        };

        this.setState(newState);
    };

    render() {
        let style = {};
        const transformOpts = {
            // Set left if horizontal drag is enabled
            x: this.state.x,
            // Set top if vertical drag is enabled
            y: this.state.y
        };
        style = {
            ...this.props.style,
            transform: 'translate(' + transformOpts.x + 'px,' + transformOpts.y + 'px)'
        };
       return (
            <DraggableCore handle={this.props.handle} onStart={this.onDragStart} onDrag={this.onDrag} onStop={this.onDragStop}>
                <div  style={style}>
                    {this.props.children}
                </div>
            </DraggableCore>
        );
    }
}

export default DraggablePanel;