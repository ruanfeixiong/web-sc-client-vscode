class cSharpApi {
  constructor() {
    this._testApi = false;
    this.csLogger = () => {};
    this.appExit = () => {};
    this.appMini=()=>{};
    this.initcsLoggerApi();
    this.initAppExitApi();
    this.initAppMiniApi();
  }
  initcsLoggerApi() {
    try {
      window.external.WriteLog('test logger');
      this._testApi = true;
      this.csLogger = (info) => { window.external.WriteLog(info); };
    } catch (error) {
      this.csLogger = (info) => { console.log(info); };
    }
  }
  initAppExitApi() {
    if (this._testApi) {
      this.appExit = () => { window.external.SystemExit(); };
    } else {
      this.appExit = () => { console.log('system exit'); };
    }
  }
  initAppMiniApi(){
       if (this._testApi) {
      this.appMini = () => { window.external.SystemMini(); };
    } else {
      this.appMini = () => { console.log('system mini'); };
    }
  }
}

const _instance = new cSharpApi();
export default _instance;
