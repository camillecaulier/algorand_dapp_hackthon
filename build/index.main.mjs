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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc1, ctc2, ctc0],
      6: [ctc0, ctc1]
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Bool;
  
  
  const v166 = stdlib.protect(ctc0, await interact.publishFee(), {
    at: './index.rsh:40:59:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'publishFee',
    who: 'Administrator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v166],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v168], secs: v170, time: v169, didSend: v27, from: v167 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v27, from: v167 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc1, ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178, v179, v180, v181], secs: v183, time: v182, didSend: v42, from: v177 } = txn2;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v196, time: v195, didSend: v53, from: v194 } = txn3;
  ;
  ;
  const v206 = stdlib.addressEq(v177, v194);
  stdlib.assert(v206, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v62, from: v210 } = txn4;
  ;
  if (v211) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v244, time: v243, didSend: v96, from: v242 } = txn5;
    ;
    const v247 = stdlib.addressEq(v210, v242);
    stdlib.assert(v247, {
      at: './index.rsh:87:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    ;
    ;
    return;
    
    
    }
  else {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v221, time: v220, didSend: v78, from: v219 } = txn5;
    ;
    const v222 = stdlib.addressEq(v177, v219);
    stdlib.assert(v222, {
      at: './index.rsh:79:7:dot',
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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v27, from: v167 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc1, ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178, v179, v180, v181], secs: v183, time: v182, didSend: v42, from: v177 } = txn2;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v196, time: v195, didSend: v53, from: v194 } = txn3;
  ;
  ;
  const v206 = stdlib.addressEq(v177, v194);
  stdlib.assert(v206, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  stdlib.protect(ctc3, await interact.seeParams(v181, v178, v179), {
    at: './index.rsh:69:23:application',
    fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:13:function exp)'],
    msg: 'seeParams',
    who: 'Customer'
    });
  const v209 = stdlib.protect(ctc4, await interact.confirmPurchase(v179), {
    at: './index.rsh:70:56:application',
    fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'Customer'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v177, v178, v179, v209],
    evt_cnt: 1,
    funcNum: 3,
    lct: v195,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v211], secs: v213, time: v212, didSend: v62, from: v210 } = txn4;
      
      ;
      if (v211) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v62, from: v210 } = txn4;
  ;
  if (v211) {
    const txn5 = await (ctc.sendrecv({
      args: [v177, v178, v179, v210],
      evt_cnt: 0,
      funcNum: 4,
      lct: v212,
      onlyIf: true,
      out_tys: [],
      pay: [v179, []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v244, time: v243, didSend: v96, from: v242 } = txn5;
        
        sim_r.txns.push({
          amt: v179,
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
          to: v210,
          tok: v178
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v178
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
      tys: [ctc5, ctc1, ctc0, ctc5],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v244, time: v243, didSend: v96, from: v242 } = txn5;
    ;
    const v247 = stdlib.addressEq(v210, v242);
    stdlib.assert(v247, {
      at: './index.rsh:87:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v179), {
      at: './index.rsh:88:44:application',
      fs: ['at ./index.rsh:88:7:application call to [unknown function] (defined at: ./index.rsh:88:19:function exp)'],
      msg: 'reportPayment',
      who: 'Customer'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v179), {
      at: './index.rsh:90:45:application',
      fs: ['at ./index.rsh:90:7:application call to [unknown function] (defined at: ./index.rsh:90:19:function exp)'],
      msg: 'reportTransfer',
      who: 'Customer'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportCard(v181), {
      at: './index.rsh:92:35:application',
      fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)'],
      msg: 'reportCard',
      who: 'Customer'
      });
    
    return;
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.leave(), {
      at: './index.rsh:76:21:application',
      fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:15:function exp)'],
      msg: 'leave',
      who: 'Customer'
      });
    
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:78:51:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Customer'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v221, time: v220, didSend: v78, from: v219 } = txn5;
    ;
    const v222 = stdlib.addressEq(v177, v219);
    stdlib.assert(v222, {
      at: './index.rsh:79:7:dot',
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v27, from: v167 } = txn1;
  ;
  const v173 = stdlib.protect(ctc0, await interact.price(), {
    at: './index.rsh:45:51:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'price',
    who: 'Owner'
    });
  const v174 = stdlib.protect(ctc1, await interact.name(), {
    at: './index.rsh:46:42:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'name',
    who: 'Owner'
    });
  const v175 = stdlib.protect(ctc0, await interact.size(), {
    at: './index.rsh:47:49:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'size',
    who: 'Owner'
    });
  const v176 = stdlib.protect(ctc2, await interact.getSale(v174), {
    at: './index.rsh:50:46:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'getSale',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v176, v173, v175, v174],
    evt_cnt: 4,
    funcNum: 1,
    lct: v169,
    onlyIf: true,
    out_tys: [ctc2, ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v178, v179, v180, v181], secs: v183, time: v182, didSend: v42, from: v177 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v178
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v178, v179, v180, v181], secs: v183, time: v182, didSend: v42, from: v177 } = txn2;
  ;
  ;
  stdlib.protect(ctc3, await interact.reportReady(v179), {
    at: './index.rsh:56:25:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'reportReady',
    who: 'Owner'
    });
  stdlib.protect(ctc3, await interact.reportFee(v168), {
    at: './index.rsh:57:23:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'reportFee',
    who: 'Owner'
    });
  stdlib.protect(ctc0, await interact.calculateFee(v168, v180), {
    at: './index.rsh:58:52:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'calculateFee',
    who: 'Owner'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v177, v178, v179],
    evt_cnt: 0,
    funcNum: 2,
    lct: v182,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '1'), v178]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v196, time: v195, didSend: v53, from: v194 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v178
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v196, time: v195, didSend: v53, from: v194 } = txn3;
  ;
  ;
  const v206 = stdlib.addressEq(v177, v194);
  stdlib.assert(v206, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v211], secs: v213, time: v212, didSend: v62, from: v210 } = txn4;
  ;
  if (v211) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v244, time: v243, didSend: v96, from: v242 } = txn5;
    ;
    const v247 = stdlib.addressEq(v210, v242);
    stdlib.assert(v247, {
      at: './index.rsh:87:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v179), {
      at: './index.rsh:88:44:application',
      fs: ['at ./index.rsh:88:7:application call to [unknown function] (defined at: ./index.rsh:88:19:function exp)'],
      msg: 'reportPayment',
      who: 'Owner'
      });
    
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v179), {
      at: './index.rsh:90:45:application',
      fs: ['at ./index.rsh:90:7:application call to [unknown function] (defined at: ./index.rsh:90:19:function exp)'],
      msg: 'reportTransfer',
      who: 'Owner'
      });
    
    ;
    return;
    
    
    }
  else {
    stdlib.protect(ctc3, await interact.reportCancellation(), {
      at: './index.rsh:78:51:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Owner'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v177, v178],
      evt_cnt: 0,
      funcNum: 5,
      lct: v212,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:79:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v221, time: v220, didSend: v78, from: v219 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v177,
          tok: v178
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v178
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
    const {data: [], secs: v221, time: v220, didSend: v78, from: v219 } = txn5;
    ;
    const v222 = stdlib.addressEq(v177, v219);
    stdlib.assert(v222, {
      at: './index.rsh:79:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    ;
    stdlib.protect(ctc3, await interact.reportRetrieval(), {
      at: './index.rsh:81:43:application',
      fs: ['at ./index.rsh:81:11:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
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
  appApproval: `BiALAAEEIAIDBSgIBqCNBiYCAQAAIjUAMRhBAuMpZEkiWzUBIQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEABW0kkDEAA3UkhBgxAAF4hBhJEIQk0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf6ABMyZklywNP8xABJEsSKyASOyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgH5SCQ0ARJENARJIhJMNAISEUQoZEk1A0lJJVs1/yEHWzX+VzAgNf2ABJEnNPOwNP6IAjU0/TEAEkSxIrIBNP6yCCOyEDQDVwAgsgezsSKyASOyEiSyEDT9shQ0/7IRs7EisgEishIkshAyCbIVMgqyFDT/shGzQgGBSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEHWzX9STUFFzX8gARlsQNdNPwWUQcIULA0/EEAHzT/NP4WUDT9FlAxAFAoSwFXAFBnSCQ1ATIGNQJCAT40/zT+FlAoSwFXAChnSCEJNQEyBjUCQgElSSMMQADSSSEEDEAAV0ghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf4hB1s1/YAEQbFATbAjNP6IAU40/zEAEkQ0/zT+FlA0/RZQKEsBVwAwZ0ghBTUBMgY1AkIAwUgjNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQhbNf6BEFs1/VcYgDX8gATfrMPpNP8WUDT+FlA0/RZQNPxQsCEKiADPsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlAoSwFXADBnSCEENQEyBjUCQgBNSCEKiACZIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwIzUBMgY1AkIAHDEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "internalType": "address payable",
                "name": "v178",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
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
                "internalType": "struct T4",
                "name": "v181",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v211",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "address payable",
                "name": "v178",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
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
                "internalType": "struct T4",
                "name": "v181",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v211",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200138038038062001380833981016040819052620000269162000193565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000c3565b60016000818155439091556040805160208082018490528251808303820181529183019092528051620000ba926002920190620000ed565b50505062000272565b81620000e95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620000fb9062000235565b90600052602060002090601f0160209004810192826200011f57600085556200016a565b82601f106200013a57805160ff19168380011785556200016a565b828001600101855582156200016a579182015b828111156200016a5782518255916020019190600101906200014d565b50620001789291506200017c565b5090565b5b808211156200017857600081556001016200017d565b6000818303604080821215620001a857600080fd5b80518082016001600160401b038082118383101715620001d857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620001f257600080fd5b8351945060208501915084821081831117156200021f57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200024a57607f821691505b602082108114156200026c57634e487b7160e01b600052602260045260246000fd5b50919050565b6110fe80620002826000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a7661d54146100f4578063ab53f2c614610107578063e2186a081461012a57005b80631e93b0f1146100825780633184ca66146100a65780637eea518c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610d2f565b61013d565b6100806100c7366004610d5a565b6102f6565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610d5a565b6104a4565b610080610102366004610d5a565b6105fe565b34801561011357600080fd5b5061011c610784565b60405161009d929190610da2565b610080610138366004610d5a565b610821565b61014d6001600054146009610a1c565b6101678135158061016057506001548235145b600a610a1c565b60008080556002805461017990610ddc565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610ddc565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610e1f565b90507fb678d03b90f4baf3bd0eab15af68ba55bb3a463c4b2d31d0e343aa71cd015096338360405161023d929190610e51565b60405180910390a161025134156008610a1c565b60408051606081018252600080825260208201819052918101919091523381526102816040840160208501610eca565b6001600160a01b039081166020838101918252604086810135818601908152600260005543600155815186518616938101939093529251909316928101929092525160608201526080015b604051602081830303815290604052600290805190602001906102f0929190610c59565b50505050565b610306600260005414600e610a1c565b6103208135158061031957506001548235145b600f610a1c565b60008080556002805461033290610ddc565b80601f016020809104026020016040519081016040528092919081815260200182805461035e90610ddc565b80156103ab5780601f10610380576101008083540402835291602001916103ab565b820191906000526020600020905b81548152906001019060200180831161038e57829003601f168201915b50505050508060200190518101906103c39190610ee7565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103f6929190610f60565b60405180910390a161040a3415600b610a1c565b61042461041d3383602001516001610a42565b600c610a1c565b805161043c906001600160a01b03163314600d610a1c565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526003909555436001558751938401949094529051909216948101949094525190830152906080016102cc565b6104b46006600054146019610a1c565b6104ce813515806104c757506001548235145b601a610a1c565b6000808055600280546104e090610ddc565b80601f016020809104026020016040519081016040528092919081815260200182805461050c90610ddc565b80156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b50505050508060200190518101906105719190610f98565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516105a4929190610f60565b60405180910390a16105b834156017610a1c565b80516105d0906001600160a01b031633146018610a1c565b6105e4816020015182600001516001610a5a565b600080805560018190556105fa90600290610cdd565b5050565b61060e6004600054146015610a1c565b6106288135158061062157506001548235145b6016610a1c565b60008080556002805461063a90610ddc565b80601f016020809104026020016040519081016040528092919081815260200182805461066690610ddc565b80156106b35780601f10610688576101008083540402835291602001916106b3565b820191906000526020600020905b81548152906001019060200180831161069657829003601f168201915b50505050508060200190518101906106cb9190611005565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516106fe929190610f60565b60405180910390a1610717816040015134146013610a1c565b6060810151610732906001600160a01b031633146014610a1c565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561076f573d6000803e3d6000fd5b506105e4816020015182606001516001610a5a565b60006060600054600280805461079990610ddc565b80601f01602080910402602001604051908101604052809291908181526020018280546107c590610ddc565b80156108125780601f106107e757610100808354040283529160200191610812565b820191906000526020600020905b8154815290600101906020018083116107f557829003601f168201915b50505050509050915091509091565b6108316003600054146011610a1c565b61084b8135158061084457506001548235145b6012610a1c565b60008080556002805461085d90610ddc565b80601f016020809104026020016040519081016040528092919081815260200182805461088990610ddc565b80156108d65780601f106108ab576101008083540402835291602001916108d6565b820191906000526020600020905b8154815290600101906020018083116108b957829003601f168201915b50505050508060200190518101906108ee9190610ee7565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353383604051610921929190610f60565b60405180910390a161093534156010610a1c565b610945604083016020840161108f565b156109c657604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b870151821686528b8b0151855233835260049097554360015589519586019690965292518516978401979097525195820195909552935116908301529060a0016102cc565b604080518082019091526000808252602082015281516001600160a01b039081168083526020808501518316818501908152600660005543600155604080519283019390935251909216908201526060016102cc565b816105fa5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610a5083853085610a73565b90505b9392505050565b610a65838383610b4d565b610a6e57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610ada916110ac565b60006040518083038185875af1925050503d8060008114610b17576040519150601f19603f3d011682016040523d82523d6000602084013e610b1c565b606091505b5091509150610b2d82826001610c1e565b5080806020019051810190610b429190610e1f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610bac916110ac565b60006040518083038185875af1925050503d8060008114610be9576040519150601f19603f3d011682016040523d82523d6000602084013e610bee565b606091505b5091509150610bff82826002610c1e565b5080806020019051810190610c149190610e1f565b9695505050505050565b60608315610c2d575081610a53565b825115610c3d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a39565b828054610c6590610ddc565b90600052602060002090601f016020900481019282610c875760008555610ccd565b82601f10610ca057805160ff1916838001178555610ccd565b82800160010185558215610ccd579182015b82811115610ccd578251825591602001919060010190610cb2565b50610cd9929150610d1a565b5090565b508054610ce990610ddc565b6000825580601f10610cf9575050565b601f016020900490600052602060002090810190610d179190610d1a565b50565b5b80821115610cd95760008155600101610d1b565b60006101008284031215610d4257600080fd5b50919050565b600060408284031215610d4257600080fd5b600060408284031215610d6c57600080fd5b610a538383610d48565b60005b83811015610d91578181015183820152602001610d79565b838111156102f05750506000910152565b8281526040602082015260008251806040840152610dc7816060850160208701610d76565b601f01601f1916919091016060019392505050565b600181811c90821680610df057607f821691505b60208210811415610d4257634e487b7160e01b600052602260045260246000fd5b8015158114610d1757600080fd5b600060208284031215610e3157600080fd5b8151610a5381610e11565b6001600160a01b0381168114610d1757600080fd5b6001600160a01b038381168252823560208084019190915261012083019190840135610e7c81610e3c565b818116604085015250506040830135606083015260608301356080830152608083013560a083015260a083013560c083015260c083013560e083015260e08301356101008301529392505050565b600060208284031215610edc57600080fd5b8135610a5381610e3c565b600060608284031215610ef957600080fd5b6040516060810181811067ffffffffffffffff82111715610f2a57634e487b7160e01b600052604160045260246000fd5b6040528251610f3881610e3c565b81526020830151610f4881610e3c565b60208201526040928301519281019290925250919050565b6001600160a01b038316815281356020808301919091526060820190830135610f8881610e11565b8015156040840152509392505050565b600060408284031215610faa57600080fd5b6040516040810181811067ffffffffffffffff82111715610fdb57634e487b7160e01b600052604160045260246000fd5b6040528251610fe981610e3c565b81526020830151610ff981610e3c565b60208201529392505050565b60006080828403121561101757600080fd5b6040516080810181811067ffffffffffffffff8211171561104857634e487b7160e01b600052604160045260246000fd5b604052825161105681610e3c565b8152602083015161106681610e3c565b602082015260408381015190820152606083015161108381610e3c565b60608201529392505050565b6000602082840312156110a157600080fd5b8135610a5381610e11565b600082516110be818460208701610d76565b919091019291505056fea264697066735822122005db4cf33b6d9743f08ecccd71ea97567688164e241506e50ad6f138e4962d0564736f6c634300080c0033`,
  BytecodeLen: 4992,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:85:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:82:13:after expr stmt semicolon',
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
