const {LiquidCore} = require('liquidcore')

// A micro service will exit when it has nothing left to do.  So to
// avoid a premature exit, set an indefinite timer.  When we
// exit() later, the timer will get invalidated.
setInterval(()=>{}, 1000)

console.log('Hello, World!')

requests = [];

// Listen for a request from the host for the 'ping' event
LiquidCore.on( 'sendreq', () => {
    // When we get the ping from the host, respond with "Hello, World!"
    // and then exit.

    reqid = "miao" + Math.floor(Math.random() * 23) + 1;

    request.add(reqid);

    LiquidCore.emit('__VVC_SDK_JS_TO_NATIVE_REQ__', {
    	id: reqid,
    	type: "_VVC_JS_",
    	payload : { a: 1, b: true, c:"stringa" }
    });

});

LiquidCore.on( 'sendres', (msg) => {
    // When we get the ping from the host, respond with "Hello, World!"
    // and then exit.

    LiquidCore.emit('__VVC_SDK_JS_TO_NATIVE_RES__', {
    	id: msg,
    	payload: {
    		text: "risposto ti ho",
    		reqs: requests
    	},
    	stizia: true
    });

});

// Ok, we are all set up.  Let the host know we are ready to talk
LiquidCore.emit( 'ready' )