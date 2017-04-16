import eventTarget from './eventTarget';

const qpidHelper=new eventTarget();
window.qpidMsgReceive=(msg)=>{
    setTimeout(function() {
            qpidHelper.fireEvent('messageReceived',msg);
    }, 0);
};

export default qpidHelper;
