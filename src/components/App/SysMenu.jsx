import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../../styles/common/sysMenu.css';
import SysMenuItem from './SysMenuItem.jsx';
class SysMenu extends Component {
    render() {
        return (

            <ul className={styles.sysMenu} role="nav">
                <SysMenuItem linkTo='mainview' labelName='首页概况' imgName='首页-默认.png' imgHoverName='首页-悬浮.png' />
                <SysMenuItem linkTo='safecity' labelName='平安城市' imgName='平安城市-默认.png' imgHoverName='平安城市-悬浮.png' />
                <SysMenuItem linkTo='corporation' labelName='人口法人' imgName='人口法人-默认.png' imgHoverName='人口法人-悬浮.png' />
            </ul>

        );
    }
}

SysMenu.propTypes = {

};

export default SysMenu;