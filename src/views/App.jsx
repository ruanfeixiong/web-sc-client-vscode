import styles from '../styles/views/App.css';
import React from 'react';
import cSharpApiHepler from '../uitls/cSharpApiHepler';
import { appClose, appMini } from '../styles/common/btn.css';
import SysMenu from '../components/App/SysMenu';
import SwitchYearPanel from '../components/App/SwitchYearPanel';
class App extends React.Component {
    render() {
        return (
            <div className={styles.appContainer}>
                <div className={styles.appContainerRow1}>
                    <button className={appMini} onClick={() => { cSharpApiHepler.appMini(); }}> </button>
                    <button className={appClose} onClick={() => { cSharpApiHepler.appExit(); }}> </button>
                </div>
                <div className={styles.appContainerRow2}>
                    <SysMenu />
                    {this.props.children}
                </div>
                <SwitchYearPanel/>
            </div>);
    }
}

export default App;
