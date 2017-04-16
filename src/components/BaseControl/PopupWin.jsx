import React, {Component, PropTypes} from 'react';
import RenderInBody from './RenderInBody.jsx';
import cSharpApiHepler from '../../uitls/cSharpApiHepler';
import {FlyModal, DropModal, OutlineModal} from 'boron';
import btnClass from '../../styles/common/btn.css';
const defaultstyles = {
    headerStyle: {
        height: '64px',
        borderBottom: '1px solid #46829b',
        background: 'rgba(90,206,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px'
    },
    headerTextStyle: {
        fontSize: '34px',
        color: '#30b0e5',
        marginLeft: '16px'
    }
};
const defaultModalStyle = {
    backgroundColor: 'transparent',
    position: 'absolute'
};

const backdropStyle = {
    backgroundColor: 'red'
};

const defaultContentStyle = {
    backgroundColor: 'white',
    height: '100%'
};
class PopupWin extends Component {
    constructor(props) {
        super(props);
        this.state={isOpen:false};
    }
    componentDidUpdate() {
       this.state.isOpen?this.refs.modal.show():'';
    }
    showModal = () => {        
        this.setState({isOpen:true});
    }

    hideModal = () => {
        this.refs.modal.hide();
      //  
    }

    onHide=()=>{
        this.setState({isOpen:false});
    }
    render() {    
        if(!this.state.isOpen)return null;
        cSharpApiHepler.csLogger('popup open');
        const {width, height, header} = this.props;
        const mergeModalStyle = Object.assign({}, defaultModalStyle, {
            width: width,
            height: height
        });
        return (
            <RenderInBody>
                <DropModal
                    ref="modal" 
                    modalStyle={mergeModalStyle}
                    contentStyle={defaultContentStyle}
                    onHide={this.onHide}>
                    <div style={defaultstyles.headerStyle}>
                        <span style={defaultstyles.headerTextStyle}>{header}</span>
                        <span className={btnClass.popWinClose} onClick={this.hideModal}>关闭</span>
                    </div>
                    {this.props.children}
                </DropModal>
            </RenderInBody>
        );
    }
}

PopupWin.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    header: PropTypes.string
};
PopupWin.defaultProps = {
    width: '600px',
    height: '500px',
    header: '弹窗Header'
};
export default PopupWin;