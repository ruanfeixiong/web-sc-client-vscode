import React, {Component, PropTypes} from 'react';

class PageView extends Component {
    render() {
        let innnerStyle = {
            position: 'relative',
            width: '3630px',
            height: '1928px',
            background: 'transprant'
        };
        const {style} = this.props;
        Object.assign(innnerStyle, style);
        return (
            <div style={innnerStyle}>
                {this.props.children}
            </div>
        );
    }
}

PageView.propTypes = {
    style: PropTypes.object
};

export default PageView;