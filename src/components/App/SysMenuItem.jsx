import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../../styles/common/sysMenu.css';
class SysMenuItem extends Component {
    onLiMouseOver = () => { 
        this.refs.img.src = require(`../../images/App/SysMenu/${this.props.imgHoverName}`);
    }
    onLiMouseLeave = () => {
            this.refs.img.src = require(`../../images/App/SysMenu/${this.props.imgName}`);
    }
    render() {
        const { imgName, labelName, linkTo } = this.props;
        return (
            <li onMouseOver={this.onLiMouseOver} onMouseLeave={this.onLiMouseLeave}>
                <Link to={linkTo}  >
                    <img ref='img' className={styles.linkImg} src={require(`../../images/App/SysMenu/${imgName}`)} />
                    <span>{labelName}</span>
                </Link>
            </li>
        );
    }
}

SysMenuItem.propTypes = {
    imgName: PropTypes.string,
    imgHoverName:PropTypes.string,
    labelName: PropTypes.string,
    linkTo: PropTypes.string,
};

export default SysMenuItem;