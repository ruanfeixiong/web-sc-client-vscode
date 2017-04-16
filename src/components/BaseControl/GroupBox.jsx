import React, {Component, PropTypes} from 'react';

const defaultstyles = {
    container: {
        position: 'absolute',
        border: '1px solid #46829b',
        borderRadius: '20px',
        background: 'rgba(0,12,23,0.4)'
    },
    headerStyle: {
        height: '64px',
        borderBottom: '1px solid #46829b',
        background: 'rgba(90,206,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px'
    },
    logoStyle: {
        width: '46px',
        height: '46px'
    },
    headerTextStyle: {
        fontSize: '34px',
        color: '#30b0e5',
        marginLeft: '16px'
    }
};

class GroupBox extends Component {
    render() {
        const {
            header,
            logo,
            style,
            top,
            left,
            width,
            height
        } = this.props;
        const mstyle = {
            top: top || '0px',
            left: left || '0px',
            width: width || '200px',
            height: height || '200px'
        };
        const mestyle = Object.assign(defaultstyles.container,mstyle, style);
        return (
            <div style={mestyle}>
                <div style={defaultstyles.headerStyle}>
                    <img src={logo} style={defaultstyles.logoStyle}/>
                    <span style={defaultstyles.headerTextStyle}>{header}</span>
                </div>
                {this.props.children}
            </div>
        );
    }
}

GroupBox.propTypes = {
    header: PropTypes.string,
    logo: PropTypes.string,
    style: PropTypes.object,
    top: PropTypes.string,
    left: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default GroupBox;