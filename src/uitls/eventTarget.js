class eventTarget{
    constructor() {
         this._listener = {};  
         this.addEvent=this.addEvent.bind(this); 
         this.addEvents=this.addEvents.bind(this); 
         this.fireEvent=this.fireEvent.bind(this); 
         this.fireEvents=this.fireEvents.bind(this);
         this.removeEvent=this.removeEvent.bind(this);
         this.removeEvents=this.removeEvents.bind(this);
    }
    addEvent(type, fn) {
        if (typeof type === 'string' && typeof fn === 'function') {
            if (typeof this._listener[type] === 'undefined') {
                this._listener[type] = [fn];
            } else {
                this._listener[type].push(fn);    
            }
        }
        return this;
    }
    addEvents(obj) {
        obj = typeof obj === 'object'? obj : {};
        var type;
        for (type in obj) {
            if ( type && typeof obj[type] === 'function') {
                this.addEvent(type, obj[type]);    
            }
        }
        return this;
    }
    fireEvent(type,para) {
        if (type && this._listener[type]) {
            var events = {
                type: type,
                target: this,
                para:para    
            };
            
            for (var length = this._listener[type].length, start=0; start<length; start+=1) {
                this._listener[type][start].call(this, events);
            }
        }
        return this;
    }
    fireEvents(array) {
        if (array instanceof Array) {
            for (var i=0, length = array.length; i<length; i+=1) {
                this.fireEvent(array[i]);
            }
        }
        return this;
    }
    removeEvent(type, key) {
        var listeners = this._listener[type];
        if (listeners instanceof Array) {
            if (typeof key === 'function') {
                for (var i=0, length=listeners.length; i<length; i+=1){
                    if (listeners[i] === key){
                        listeners.splice(i, 1);
                        break;
                    }
                }
            } else if (key instanceof Array) {
                for (var lis=0, lenkey = key.length; lis<lenkey; lis+=1) {
                    this.removeEvent(type, key[lenkey]);
                }
            } else {
                delete this._listener[type];
            }
        }
        return this;
    }
    removeEvents(params) {
        if (params instanceof Array) {
            for (var i=0, length = params.length; i<length; i+=1) {
                this.removeEvent(params[i]);
            }    
        } else if (typeof params === 'object') {
            for (var type in params) {
                this.removeEvent(type, params[type]);    
            }
        }
        return this;    
    }
}
export default eventTarget;