import React, {Component, PropTypes} from 'react';

class EMap extends Component {
    componentDidMount() {
     this.refs.map.src=this.props.src;
    }
    componentWillUnmount() {

    }
    render() {
        const innnerStyle = {
               position: 'absolute',
              background: 'white',
                border:'0'
        };
        const {src,...style} = this.props;
        Object.assign(innnerStyle, style);
        return (
            <iframe   ref="map"  style={innnerStyle}  scrolling="auto">
            </iframe>
        );
    }
}

EMap.propTypes = {
    src:PropTypes.string,
     top: PropTypes.string,
    left: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default EMap;