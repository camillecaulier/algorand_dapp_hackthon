// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1],
      3: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc1, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0],
      7: [ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Administrator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Administrator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Administrator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178, v179, v180], secs: v182, time: v181, didSend: v31, from: v177 } = txn1;
  ;
  const v188 = stdlib.protect(ctc0, await interact.publishFee(), {
    at: './index.rsh:55:59:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'publishFee',
    who: 'Administrator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v177, v178, v188],
    evt_cnt: 1,
    funcNum: 1,
    lct: v181,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v190], secs: v192, time: v191, didSend: v44, from: v189 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v190], secs: v192, time: v191, didSend: v44, from: v189 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v194], secs: v196, time: v195, didSend: v50, from: v193 } = txn3;
  ;
  ;
  const v204 = stdlib.addressEq(v177, v193);
  stdlib.assert(v204, {
    at: './index.rsh:59:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v210, time: v209, didSend: v61, from: v208 } = txn4;
  ;
  ;
  const v220 = stdlib.addressEq(v177, v208);
  stdlib.assert(v220, {
    at: './index.rsh:74:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
  ;
  if (v225) {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v258, time: v257, didSend: v104, from: v256 } = txn6;
    ;
    const v261 = stdlib.addressEq(v224, v256);
    stdlib.assert(v261, {
      at: './index.rsh:96:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    ;
    ;
    return;
    
    
    }
  else {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v235, time: v234, didSend: v86, from: v233 } = txn6;
    ;
    const v236 = stdlib.addressEq(v177, v233);
    stdlib.assert(v236, {
      at: './index.rsh:88:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    ;
    return;
    
    
    }
  
  
  
  
  
  
  
  
  
  };
export async function Customer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178, v179, v180], secs: v182, time: v181, didSend: v31, from: v177 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v190], secs: v192, time: v191, didSend: v44, from: v189 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v194], secs: v196, time: v195, didSend: v50, from: v193 } = txn3;
  ;
  ;
  const v204 = stdlib.addressEq(v177, v193);
  stdlib.assert(v204, {
    at: './index.rsh:59:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v210, time: v209, didSend: v61, from: v208 } = txn4;
  ;
  ;
  const v220 = stdlib.addressEq(v177, v208);
  stdlib.assert(v220, {
    at: './index.rsh:74:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  stdlib.protect(ctc3, await interact.seeParams(v180, v194, v178), {
    at: './index.rsh:78:23:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)'],
    msg: 'seeParams',
    who: 'Customer'
    });
  const v223 = stdlib.protect(ctc4, await interact.confirmPurchase(v178), {
    at: './index.rsh:79:56:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'Customer'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v177, v178, v194, v223],
    evt_cnt: 1,
    funcNum: 4,
    lct: v209,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
      
      ;
      if (v225) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
  ;
  if (v225) {
    const txn6 = await (ctc.sendrecv({
      args: [v177, v178, v194, v224],
      evt_cnt: 0,
      funcNum: 5,
      lct: v226,
      onlyIf: true,
      out_tys: [],
      pay: [v178, []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v258, time: v257, didSend: v104, from: v256 } = txn6;
        
        sim_r.txns.push({
          amt: v178,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'from',
          to: v177,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'from',
          to: v224,
          tok: v194
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v194
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc2, ctc5],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v258, time: v257, didSend: v104, from: v256 } = txn6;
    ;
    const v261 = stdlib.addressEq(v224, v256);
    stdlib.assert(v261, {
      at: './index.rsh:96:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v178), {
      at: './index.rsh:97:44:application',
      fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:19:function exp)'],
      msg: 'reportPayment',
      who: 'Customer'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v178), {
      at: './index.rsh:99:45:application',
      fs: ['at ./index.rsh:99:7:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
      msg: 'reportTransfer',
      who: 'Customer'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportCard(v180), {
      at: './index.rsh:101:35:application',
      fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:13:function exp)'],
      msg: 'reportCard',
      who: 'Customer'
      });
    
    return;
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.leave(), {
      at: './index.rsh:85:21:application',
      fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:15:function exp)'],
      msg: 'leave',
      who: 'Customer'
      });
    
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:87:51:application',
      fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Customer'
      });
    
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v235, time: v234, didSend: v86, from: v233 } = txn6;
    ;
    const v236 = stdlib.addressEq(v177, v233);
    stdlib.assert(v236, {
      at: './index.rsh:88:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    ;
    return;
    
    
    }
  
  
  
  
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  
  const v172 = stdlib.protect(ctc0, interact.name, 'for Owner\'s interact field name');
  const v173 = stdlib.protect(ctc1, interact.price, 'for Owner\'s interact field price');
  const v174 = stdlib.protect(ctc1, interact.size, 'for Owner\'s interact field size');
  
  const txn1 = await (ctc.sendrecv({
    args: [v173, v174, v172],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v178, v179, v180], secs: v182, time: v181, didSend: v31, from: v177 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v178, v179, v180], secs: v182, time: v181, didSend: v31, from: v177 } = txn1;
  ;
  const v185 = stdlib.protect(ctc2, await interact.getSale(v180), {
    at: './index.rsh:52:46:application',
    fs: ['at ./index.rsh:51:9:application call to [unknown function] (defined at: ./index.rsh:51:13:function exp)'],
    msg: 'getSale',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v190], secs: v192, time: v191, didSend: v44, from: v189 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v177, v178, v185],
    evt_cnt: 1,
    funcNum: 2,
    lct: v191,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v194], secs: v196, time: v195, didSend: v50, from: v193 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v194
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v194], secs: v196, time: v195, didSend: v50, from: v193 } = txn3;
  ;
  ;
  const v204 = stdlib.addressEq(v177, v193);
  stdlib.assert(v204, {
    at: './index.rsh:59:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  stdlib.protect(ctc3, await interact.reportReady(v178), {
    at: './index.rsh:66:25:application',
    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
    msg: 'reportReady',
    who: 'Owner'
    });
  stdlib.protect(ctc3, await interact.reportFee(v190), {
    at: './index.rsh:67:23:application',
    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
    msg: 'reportFee',
    who: 'Owner'
    });
  stdlib.protect(ctc1, await interact.calculateFee(v190, v179), {
    at: './index.rsh:68:52:application',
    fs: ['at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:13:function exp)'],
    msg: 'calculateFee',
    who: 'Owner'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v177, v178, v194],
    evt_cnt: 0,
    funcNum: 3,
    lct: v195,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:74:11:decimal', stdlib.UInt_max, '1'), v194]]],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v210, time: v209, didSend: v61, from: v208 } = txn4;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:74:11:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v194
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v210, time: v209, didSend: v61, from: v208 } = txn4;
  ;
  ;
  const v220 = stdlib.addressEq(v177, v208);
  stdlib.assert(v220, {
    at: './index.rsh:74:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
  ;
  if (v225) {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v258, time: v257, didSend: v104, from: v256 } = txn6;
    ;
    const v261 = stdlib.addressEq(v224, v256);
    stdlib.assert(v261, {
      at: './index.rsh:96:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v178), {
      at: './index.rsh:97:44:application',
      fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:19:function exp)'],
      msg: 'reportPayment',
      who: 'Owner'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v178), {
      at: './index.rsh:99:45:application',
      fs: ['at ./index.rsh:99:7:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
      msg: 'reportTransfer',
      who: 'Owner'
      });
    
    ;
    return;
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:87:51:application',
      fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Owner'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v177, v194],
      evt_cnt: 0,
      funcNum: 6,
      lct: v226,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:88:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v235, time: v234, didSend: v86, from: v233 } = txn6;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v177,
          tok: v194
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v194
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v235, time: v234, didSend: v86, from: v233 } = txn6;
    ;
    const v236 = stdlib.addressEq(v177, v233);
    stdlib.assert(v236, {
      at: './index.rsh:88:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    ;
    stdlib.protect(ctc3, await interact.reportRetrieval(), {
      at: './index.rsh:90:43:application',
      fs: ['at ./index.rsh:90:11:application call to [unknown function] (defined at: ./index.rsh:90:15:function exp)'],
      msg: 'reportRetrieval',
      who: 'Owner'
      });
    
    return;
    
    
    }
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEEIAUCAygIBgegjQYmAgEAACI1ADEYQQNPKWRJIls1ASEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBgxAAblJIQQMQADeSSEJDEAAXiEJEkQhCjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEYbSsDLA0/zEAEkSxIrIBI7ISJLIQNP+yFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAmRIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJJVs1/yEHWzX+VzAgNf2ABMyZklywNP+IAp80/TEAEkSxIrIBNP+yCCOyEDQDVwAgsgezsSKyASOyEiSyEDT9shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgHrSSQMQAB4SCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+IQdbNf1JNQUXNfyABO7n6CI0/BZRBwhQsDT8QQAgNP80/hZQNP0WUDEAUChLAVcAUGdIIQQ1ATIGNQJCAaI0/zT9FlAoSwFXAChnSCEKNQEyBjUCQgGJSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEHWzX9gASnZcS0sCM0/YgBvzT/MQASRDT/NP4WUDT9FlAoSwFXADBnSCQ1ATIGNQJCATNJIwxAAL5JIQUMQABtSCEFNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+STUFFzX9gASXTvcXNP0WULAhC4gBQbEisgEishIkshAyCrIUNP2yEbM0/zEAEkQ0/zT+FlA0/RZQKEsBVwAwZ0ghBjUBMgY1AkIAuUgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+STUFFzX9gATVFRkUNP0WULA0/zT+FlAoSwFXAChnSCEFNQEyBjUCQgBvSCELiAC7IjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEIWzX+VxCANf2ABPBMZ9k0/xZQNP4WUDT9ULAxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v180",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v180",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v190",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v194",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v225",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v190",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v194",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v225",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200161d3803806200161d833981016040819052620000269162000285565b6000805543600355604080513381528251602080830191909152808401518051838501528082015160608085019190915290840151805160808501529182015160a08401528184015160c0840152015160e082015290517f49606f5ed0784e0578510b38601543601424a6ed96aa0c9611c3c45364df1a22918190036101000190a1620000b6341560076200011c565b60408051808201825260006020808301828152338085528683015151825260019384905543909355845180830193909352518285015283518083038501815260609092019093528051919262000113926002929091019062000146565b5050506200036e565b81620001425760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001549062000331565b90600052602060002090601f016020900481019282620001785760008555620001c3565b82601f106200019357805160ff1916838001178555620001c3565b82800160010185558215620001c3579182015b82811115620001c3578251825591602001919060010190620001a6565b50620001d1929150620001d5565b5090565b5b80821115620001d15760008155600101620001d6565b604080519081016001600160401b03811182821017156200021d57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200021d57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200021d57634e487b7160e01b600052604160045260246000fd5b600081830360e08112156200029957600080fd5b620002a3620001ec565b8351815260c0601f1983011215620002ba57600080fd5b620002c462000223565b60208501518152604085015160208201526080605f1984011215620002e857600080fd5b620002f262000254565b9250606085015183526080850151602084015260a0850151604084015260c0850151606084015282604082015280602083015250809250505092915050565b600181811c908216806200034657607f821691505b602082108114156200036857634e487b7160e01b600052602260045260246000fd5b50919050565b61129f806200037e6000396000f3fe6080604052600436106100845760003560e01c8063873779a111610056578063873779a1146100ec5780638e314769146100ff578063a98bf22314610112578063ab53f2c614610125578063c79800371461014857005b80631e93b0f11461008d57806356eddbfb146100b157806373b4522c146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610ef6565b61015b565b61008b6100d2366004610ef6565b610338565b3480156100e357600080fd5b5060015461009e565b61008b6100fa366004610ef6565b6104e5565b61008b61010d366004610ef6565b610655565b61008b610120366004610ef6565b6107f5565b34801561013157600080fd5b5061013a6109ee565b6040516100a8929190610f3e565b61008b610156366004610ef6565b610a8b565b61016b600260005414600d610bcb565b6101858135158061017e57506001548235145b600e610bcb565b60008080556002805461019790610f78565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610f78565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610ff9565b90507f3275e11473974a8d7984f8c42072cfc3d51a905918cc1d978f1596c7113eeddc338360405161025b929190611033565b60405180910390a161026f3415600b610bcb565b8051610287906001600160a01b03163314600c610bcb565b604080516060810182526000808252602082018190529181019190915281516001600160a01b03168152602080830151818301526102cb906040850190850161106e565b6001600160a01b03908116604083810191825260036000554360015580518451841660208083019190915285015191810191909152905190911660608201526080015b60405160208183030381529060405260029080519060200190610332929190610e08565b50505050565b6103486003600054146012610bcb565b6103628135158061035b57506001548235145b6013610bcb565b60008080556002805461037490610f78565b80601f01602080910402602001604051908101604052809291908181526020018280546103a090610f78565b80156103ed5780601f106103c2576101008083540402835291602001916103ed565b820191906000526020600020905b8154815290600101906020018083116103d057829003601f168201915b5050505050806020019051810190610405919061108b565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610438929190611110565b60405180910390a161044c3415600f610bcb565b61046661045f3383604001516001610bf1565b6010610bcb565b805161047e906001600160a01b031633146011610bcb565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184528989015182168352600490955543600155875193840194909452905195820195909552935116908301529060800161030e565b6104f56001600054146009610bcb565b61050f8135158061050857506001548235145b600a610bcb565b60008080556002805461052190610f78565b80601f016020809104026020016040519081016040528092919081815260200182805461054d90610f78565b801561059a5780601f1061056f5761010080835404028352916020019161059a565b820191906000526020600020905b81548152906001019060200180831161057d57829003601f168201915b50505050508060200190518101906105b29190610ff9565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a161060734156008610bcb565b6040805180820182526000808252602080830182815285516001600160a01b03168085528683015182526002909355436001558451918201929092529051928101929092529060600161030e565b6106656005600054146019610bcb565b61067f8135158061067857506001548235145b601a610bcb565b60008080556002805461069190610f78565b80601f01602080910402602001604051908101604052809291908181526020018280546106bd90610f78565b801561070a5780601f106106df5761010080835404028352916020019161070a565b820191906000526020600020905b8154815290600101906020018083116106ed57829003601f168201915b50505050508060200190518101906107229190611148565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610755929190611110565b60405180910390a161076e816020015134146017610bcb565b6060810151610789906001600160a01b031633146018610bcb565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107c6573d6000803e3d6000fd5b506107db816040015182606001516001610c09565b600080805560018190556107f190600290610e8c565b5050565b6108056004600054146015610bcb565b61081f8135158061081857506001548235145b6016610bcb565b60008080556002805461083190610f78565b80601f016020809104026020016040519081016040528092919081815260200182805461085d90610f78565b80156108aa5780601f1061087f576101008083540402835291602001916108aa565b820191906000526020600020905b81548152906001019060200180831161088d57829003601f168201915b50505050508060200190518101906108c2919061108b565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b9433836040516108f5929190611110565b60405180910390a161090934156014610bcb565b61091960408301602084016111d2565b1561099a57604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b01518216855233835260059097554360015589519586019690965292519784019790975251831695820195909552935116908301529060a00161030e565b6040805180820182526000808252602080830182815285516001600160a01b03908116808652878701518216835260079094554360015585519283019390935251909116928101929092529060600161030e565b600060606000546002808054610a0390610f78565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2f90610f78565b8015610a7c5780601f10610a5157610100808354040283529160200191610a7c565b820191906000526020600020905b815481529060010190602001808311610a5f57829003601f168201915b50505050509050915091509091565b610a9b600760005414601d610bcb565b610ab581351580610aae57506001548235145b601e610bcb565b600080805560028054610ac790610f78565b80601f0160208091040260200160405190810160405280929190818152602001828054610af390610f78565b8015610b405780601f10610b1557610100808354040283529160200191610b40565b820191906000526020600020905b815481529060010190602001808311610b2357829003601f168201915b5050505050806020019051810190610b5891906111ef565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610b8b929190611110565b60405180910390a1610b9f3415601b610bcb565b8051610bb7906001600160a01b03163314601c610bcb565b6107db816020015182600001516001610c09565b816107f15760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610bff83853085610c22565b90505b9392505050565b610c14838383610cfc565b610c1d57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c8991611230565b60006040518083038185875af1925050503d8060008114610cc6576040519150601f19603f3d011682016040523d82523d6000602084013e610ccb565b606091505b5091509150610cdc82826001610dcd565b5080806020019051810190610cf1919061124c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610d5b91611230565b60006040518083038185875af1925050503d8060008114610d98576040519150601f19603f3d011682016040523d82523d6000602084013e610d9d565b606091505b5091509150610dae82826002610dcd565b5080806020019051810190610dc3919061124c565b9695505050505050565b60608315610ddc575081610c02565b825115610dec5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610be8565b828054610e1490610f78565b90600052602060002090601f016020900481019282610e365760008555610e7c565b82601f10610e4f57805160ff1916838001178555610e7c565b82800160010185558215610e7c579182015b82811115610e7c578251825591602001919060010190610e61565b50610e88929150610ec9565b5090565b508054610e9890610f78565b6000825580601f10610ea8575050565b601f016020900490600052602060002090810190610ec69190610ec9565b50565b5b80821115610e885760008155600101610eca565b600060408284031215610ef057600080fd5b50919050565b600060408284031215610f0857600080fd5b610c028383610ede565b60005b83811015610f2d578181015183820152602001610f15565b838111156103325750506000910152565b8281526040602082015260008251806040840152610f63816060850160208701610f12565b601f01601f1916919091016060019392505050565b600181811c90821680610f8c57607f821691505b60208210811415610ef057634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff81118282101715610fde57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114610ec657600080fd5b60006040828403121561100b57600080fd5b611013610fad565b825161101e81610fe4565b81526020928301519281019290925250919050565b6001600160a01b038381168252823560208084019190915260608301919084013561105d81610fe4565b818116604085015250509392505050565b60006020828403121561108057600080fd5b8135610c0281610fe4565b60006060828403121561109d57600080fd5b6040516060810181811067ffffffffffffffff821117156110ce57634e487b7160e01b600052604160045260246000fd5b60405282516110dc81610fe4565b81526020838101519082015260408301516110f681610fe4565b60408201529392505050565b8015158114610ec657600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561113881611102565b8015156040840152509392505050565b60006080828403121561115a57600080fd5b6040516080810181811067ffffffffffffffff8211171561118b57634e487b7160e01b600052604160045260246000fd5b604052825161119981610fe4565b81526020838101519082015260408301516111b381610fe4565b604082015260608301516111c681610fe4565b60608201529392505050565b6000602082840312156111e457600080fd5b8135610c0281611102565b60006040828403121561120157600080fd5b611209610fad565b825161121481610fe4565b8152602083015161122481610fe4565b60208201529392505050565b60008251611242818460208701610f12565b9190910192915050565b60006020828403121561125e57600080fd5b8151610c028161110256fea2646970667358221220bb5844fe8667ae20b38b3fae7f001cfb487d1d490d5674a1deb3867bf042c53164736f6c634300080c0033`,
  BytecodeLen: 5661,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:102:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:91:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Administrator": Administrator,
  "Customer": Customer,
  "Owner": Owner
  };
export const _APIs = {
  };
