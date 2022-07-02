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
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc0],
      4: [ctc0, ctc1, ctc2, ctc0],
      6: [ctc0, ctc1, ctc2, ctc0],
      7: [ctc0, ctc1, ctc2, ctc0]
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v138, v139, v140], secs: v142, time: v141, didSend: v35, from: v137 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v153, time: v152, didSend: v46, from: v151 } = txn2;
  ;
  ;
  const v163 = stdlib.addressEq(v137, v151);
  stdlib.assert(v163, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v55, from: v167 } = txn3;
  ;
  if (v168) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v207, time: v206, didSend: v64, from: v205 } = txn4;
    ;
    const v210 = stdlib.addressEq(v167, v205);
    stdlib.assert(v210, {
      at: './index.rsh:57:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v215, time: v214, didSend: v75, from: v213 } = txn5;
    ;
    const v216 = stdlib.addressEq(v137, v213);
    stdlib.assert(v216, {
      at: './index.rsh:60:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v174, time: v173, didSend: v64, from: v172 } = txn4;
    ;
    const v177 = stdlib.addressEq(v167, v172);
    stdlib.assert(v177, {
      at: './index.rsh:57:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v182, time: v181, didSend: v75, from: v180 } = txn5;
    ;
    const v183 = stdlib.addressEq(v137, v180);
    stdlib.assert(v183, {
      at: './index.rsh:60:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Administrator'
      });
    ;
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v138, v139, v140], secs: v142, time: v141, didSend: v35, from: v137 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v153, time: v152, didSend: v46, from: v151 } = txn2;
  ;
  ;
  const v163 = stdlib.addressEq(v137, v151);
  stdlib.assert(v163, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  stdlib.protect(ctc2, await interact.seeParams(v138, v139), {
    at: './index.rsh:45:23:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'seeParams',
    who: 'Customer'
    });
  const v166 = stdlib.protect(ctc3, await interact.confirmPurchase(v139), {
    at: './index.rsh:46:56:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'Customer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v137, v138, v139, v166],
    evt_cnt: 1,
    funcNum: 2,
    lct: v152,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v168], secs: v170, time: v169, didSend: v55, from: v167 } = txn3;
      
      ;
      if (v168) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v55, from: v167 } = txn3;
  ;
  if (v168) {
    const txn4 = await (ctc.sendrecv({
      args: [v137, v138, v139, v167],
      evt_cnt: 0,
      funcNum: 3,
      lct: v169,
      onlyIf: true,
      out_tys: [],
      pay: [v139, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v207, time: v206, didSend: v64, from: v205 } = txn4;
        
        sim_r.txns.push({
          amt: v139,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v207, time: v206, didSend: v64, from: v205 } = txn4;
    ;
    const v210 = stdlib.addressEq(v167, v205);
    stdlib.assert(v210, {
      at: './index.rsh:57:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v139), {
      at: './index.rsh:58:44:application',
      fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
      msg: 'reportPayment',
      who: 'Customer'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v215, time: v214, didSend: v75, from: v213 } = txn5;
    ;
    const v216 = stdlib.addressEq(v137, v213);
    stdlib.assert(v216, {
      at: './index.rsh:60:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const txn4 = await (ctc.sendrecv({
      args: [v137, v138, v139, v167],
      evt_cnt: 0,
      funcNum: 5,
      lct: v169,
      onlyIf: true,
      out_tys: [],
      pay: [v139, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v174, time: v173, didSend: v64, from: v172 } = txn4;
        
        sim_r.txns.push({
          amt: v139,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v174, time: v173, didSend: v64, from: v172 } = txn4;
    ;
    const v177 = stdlib.addressEq(v167, v172);
    stdlib.assert(v177, {
      at: './index.rsh:57:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    stdlib.protect(ctc2, await interact.reportPayment(v139), {
      at: './index.rsh:58:44:application',
      fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
      msg: 'reportPayment',
      who: 'Customer'
      });
    
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v182, time: v181, didSend: v75, from: v180 } = txn5;
    ;
    const v183 = stdlib.addressEq(v137, v180);
    stdlib.assert(v183, {
      at: './index.rsh:60:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    ;
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  
  const v130 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:34:77:application',
    fs: ['at ./index.rsh:33:9:application call to [unknown function] (defined at: ./index.rsh:33:13:function exp)'],
    msg: 'getSale',
    who: 'Owner'
    });
  const v131 = v130[stdlib.checkedBigNumberify('./index.rsh:34:77:application', stdlib.UInt_max, '0')];
  const v132 = v130[stdlib.checkedBigNumberify('./index.rsh:34:77:application', stdlib.UInt_max, '1')];
  const v133 = v130[stdlib.checkedBigNumberify('./index.rsh:34:77:application', stdlib.UInt_max, '2')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v131, v132, v133],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v138, v139, v140], secs: v142, time: v141, didSend: v35, from: v137 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v138
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v138, v139, v140], secs: v142, time: v141, didSend: v35, from: v137 } = txn1;
  ;
  ;
  stdlib.protect(ctc3, await interact.reportReady(v139), {
    at: './index.rsh:38:25:application',
    fs: ['at ./index.rsh:38:25:application call to [unknown function] (defined at: ./index.rsh:38:25:function exp)', 'at ./index.rsh:38:25:application call to "liftedInteract" (defined at: ./index.rsh:38:25:application)'],
    msg: 'reportReady',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v137, v138, v139],
    evt_cnt: 0,
    funcNum: 1,
    lct: v141,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:41:11:decimal', stdlib.UInt_max, '1'), v138]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v153, time: v152, didSend: v46, from: v151 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:41:11:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v138
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v153, time: v152, didSend: v46, from: v151 } = txn2;
  ;
  ;
  const v163 = stdlib.addressEq(v137, v151);
  stdlib.assert(v163, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v168], secs: v170, time: v169, didSend: v55, from: v167 } = txn3;
  ;
  if (v168) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v207, time: v206, didSend: v64, from: v205 } = txn4;
    ;
    const v210 = stdlib.addressEq(v167, v205);
    stdlib.assert(v210, {
      at: './index.rsh:57:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v139), {
      at: './index.rsh:58:44:application',
      fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
      msg: 'reportPayment',
      who: 'Owner'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v137, v138, v139, v167],
      evt_cnt: 0,
      funcNum: 4,
      lct: v206,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:60:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v215, time: v214, didSend: v75, from: v213 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v137,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v167,
          tok: v138
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v138
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
      tys: [ctc5, ctc0, ctc1, ctc5],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v215, time: v214, didSend: v75, from: v213 } = txn5;
    ;
    const v216 = stdlib.addressEq(v137, v213);
    stdlib.assert(v216, {
      at: './index.rsh:60:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    ;
    ;
    return;
    
    
    
    
    }
  else {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v174, time: v173, didSend: v64, from: v172 } = txn4;
    ;
    const v177 = stdlib.addressEq(v167, v172);
    stdlib.assert(v177, {
      at: './index.rsh:57:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc3, await interact.reportPayment(v139), {
      at: './index.rsh:58:44:application',
      fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
      msg: 'reportPayment',
      who: 'Owner'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v137, v138, v139, v167],
      evt_cnt: 0,
      funcNum: 6,
      lct: v173,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:60:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v182, time: v181, didSend: v75, from: v180 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v137,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v167,
          tok: v138
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v138
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
      tys: [ctc5, ctc0, ctc1, ctc5],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v182, time: v181, didSend: v75, from: v180 } = txn5;
    ;
    const v183 = stdlib.addressEq(v137, v180);
    stdlib.assert(v183, {
      at: './index.rsh:60:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    ;
    ;
    return;
    
    
    
    
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEEICgGAgMIBQegjQYmAgEAACI1ADEYQQOFKWRJIls1ASEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBwxAAbNJIQkMQADZSSEFDEAAdCEFEkQhCjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEYbSsDLA0/zEAEkSxIrIBNAMhBFuyCCOyEDT/sgezsSKyASOyEiSyEDQDVzAgshQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgKESCEFNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEEWzX9VzAgNfyABMyZklywNP2IAro0/DEAEkQ0/zT+FlA0/RZQNPxQKEsBVwBQZ0ghCjUBMgY1AkICQkkkDEAAcEgkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+gASRJzTzsDT/MQASRLEisgE0AyEEW7III7IQNP+yB7OxIrIBI7ISJLIQNANXMCCyFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAbBIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8lWzX+IQRbNf1XMCA1/IAEp2XEtLA0/YgB5jT8MQASRDT/NP4WUDT9FlA0/FAoSwFXAFBnSCQ1ATIGNQJCAW9JIwxAAN1JIQYMQACASCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEEWzX9STUFFzX8gARqEToINPwWUQcIULA0/EEAIDT/NP4WUDT9FlAxAFAoSwFXAFBnSCEHNQEyBjUCQgECNP80/hZQNP0WUDEAUChLAVcAUGdIIQU1ATIGNQJCAOJIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf4hBFs1/YAEmouRdLAjNP6IARk0/zEAEkQ0/zT+FlA0/RZQKEsBVwAwZ0ghBjUBMgY1AkIAjEghC4gA2CI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCELiACdsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABwxGSEJEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
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
                "internalType": "address payable",
                "name": "v138",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
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
                "internalType": "address payable",
                "name": "v138",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "internalType": "bool",
                "name": "v168",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
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
                "internalType": "bool",
                "name": "v168",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
  Bytecode: `0x6080604052604051620014cf380380620014cf833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051850151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b6111a4806200032b6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea5780638e314769146100ff578063a7661d5414610112578063ab53f2c614610125578063c79800371461014857005b80631e93b0f11461008d5780632c10a159146100b15780633e59bac4146100c457806373b4522c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610ecc565b61015b565b61008b6100d2366004610ecc565b61032f565b61008b6100e5366004610ecc565b610516565b3480156100f657600080fd5b5060015461009e565b61008b61010d366004610ecc565b6106af565b61008b610120366004610ecc565b610848565b34801561013157600080fd5b5061013a6109dc565b6040516100a8929190610f14565b61008b610156366004610ecc565b610a79565b61016b600160005414600b610ba1565b6101858135158061017e57506001548235145b600c610ba1565b60008080556002805461019790610f4e565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610f4e565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610f9f565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161025b929190611023565b60405180910390a161026f34156008610ba1565b6102896102823383602001516001610bc7565b6009610ba1565b80516102a1906001600160a01b03163314600a610ba1565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b60405160208183030381529060405260029080519060200190610329929190610dde565b50505050565b61033f600260005414600e610ba1565b6103598135158061035257506001548235145b600f610ba1565b60008080556002805461036b90610f4e565b80601f016020809104026020016040519081016040528092919081815260200182805461039790610f4e565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b50505050508060200190518101906103fc9190610f9f565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd338360405161042f929190611023565b60405180910390a16104433415600d610ba1565b610453604083016020840161105b565b156104b55760408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b03908116875288850151169092528686015190523390526003909155436001559151909161030591839101611078565b60408051608081018252600080825260208083018281528385018381526060850184815287516001600160a01b03908116875288850151169092528686015190523390526006909155436001559151909161030591839101611078565b5050565b6105266003600054146012610ba1565b6105408135158061053957506001548235145b6013610ba1565b60008080556002805461055290610f4e565b80601f016020809104026020016040519081016040528092919081815260200182805461057e90610f4e565b80156105cb5780601f106105a0576101008083540402835291602001916105cb565b820191906000526020600020905b8154815290600101906020018083116105ae57829003601f168201915b50505050508060200190518101906105e391906110b1565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610616929190611023565b60405180910390a161062f816040015134146010610ba1565b606081015161064a906001600160a01b031633146011610ba1565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b0390811688528986015181169094528888015190925287015190911690526004909155436001559151909161030591839101611078565b6106bf600660005414601a610ba1565b6106d9813515806106d257506001548235145b601b610ba1565b6000808055600280546106eb90610f4e565b80601f016020809104026020016040519081016040528092919081815260200182805461071790610f4e565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c91906110b1565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107af929190611023565b60405180910390a16107c8816040015134146018610ba1565b60608101516107e3906001600160a01b031633146019610ba1565b6040805160808101825260008082526020808301828152838501838152606080860185815288516001600160a01b0390811688528986015181169094528888015190925287015190911690526007909155436001559151909161030591839101611078565b6108586004600054146016610ba1565b6108728135158061086b57506001548235145b6017610ba1565b60008080556002805461088490610f4e565b80601f01602080910402602001604051908101604052809291908181526020018280546108b090610f4e565b80156108fd5780601f106108d2576101008083540402835291602001916108fd565b820191906000526020600020905b8154815290600101906020018083116108e057829003601f168201915b505050505080602001905181019061091591906110b1565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610948929190611023565b60405180910390a161095c34156014610ba1565b8051610974906001600160a01b031633146015610ba1565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109b1573d6000803e3d6000fd5b506109c6816020015182606001516001610bdf565b6000808055600181905561051290600290610e62565b6000606060005460028080546109f190610f4e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1d90610f4e565b8015610a6a5780601f10610a3f57610100808354040283529160200191610a6a565b820191906000526020600020905b815481529060010190602001808311610a4d57829003601f168201915b50505050509050915091509091565b610a89600760005414601e610ba1565b610aa381351580610a9c57506001548235145b601f610ba1565b600080805560028054610ab590610f4e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae190610f4e565b8015610b2e5780601f10610b0357610100808354040283529160200191610b2e565b820191906000526020600020905b815481529060010190602001808311610b1157829003601f168201915b5050505050806020019051810190610b4691906110b1565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610b79929190611023565b60405180910390a1610b8d3415601c610ba1565b8051610974906001600160a01b03163314601d5b816105125760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610bd583853085610bf8565b90505b9392505050565b610bea838383610cd2565b610bf357600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c5f91611135565b60006040518083038185875af1925050503d8060008114610c9c576040519150601f19603f3d011682016040523d82523d6000602084013e610ca1565b606091505b5091509150610cb282826001610da3565b5080806020019051810190610cc79190611151565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610d3191611135565b60006040518083038185875af1925050503d8060008114610d6e576040519150601f19603f3d011682016040523d82523d6000602084013e610d73565b606091505b5091509150610d8482826002610da3565b5080806020019051810190610d999190611151565b9695505050505050565b60608315610db2575081610bd8565b825115610dc25782518084602001fd5b60405163100960cb60e01b815260048101839052602401610bbe565b828054610dea90610f4e565b90600052602060002090601f016020900481019282610e0c5760008555610e52565b82601f10610e2557805160ff1916838001178555610e52565b82800160010185558215610e52579182015b82811115610e52578251825591602001919060010190610e37565b50610e5e929150610e9f565b5090565b508054610e6e90610f4e565b6000825580601f10610e7e575050565b601f016020900490600052602060002090810190610e9c9190610e9f565b50565b5b80821115610e5e5760008155600101610ea0565b600060408284031215610ec657600080fd5b50919050565b600060408284031215610ede57600080fd5b610bd88383610eb4565b60005b83811015610f03578181015183820152602001610eeb565b838111156103295750506000910152565b8281526040602082015260008251806040840152610f39816060850160208701610ee8565b601f01601f1916919091016060019392505050565b600181811c90821680610f6257607f821691505b60208210811415610ec657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f9a57600080fd5b919050565b600060608284031215610fb157600080fd5b6040516060810181811067ffffffffffffffff82111715610fe257634e487b7160e01b600052604160045260246000fd5b604052610fee83610f83565b8152610ffc60208401610f83565b6020820152604083015160408201528091505092915050565b8015158114610e9c57600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561104b81611015565b8015156040840152509392505050565b60006020828403121561106d57600080fd5b8135610bd881611015565b81516001600160a01b03908116825260208084015182169083015260408084015190830152606092830151169181019190915260800190565b6000608082840312156110c357600080fd5b6040516080810181811067ffffffffffffffff821117156110f457634e487b7160e01b600052604160045260246000fd5b60405261110083610f83565b815261110e60208401610f83565b60208201526040830151604082015261112960608401610f83565b60608201529392505050565b60008251611147818460208701610ee8565b9190910192915050565b60006020828403121561116357600080fd5b8151610bd88161101556fea2646970667358221220f1f14d82b26634086d6a48e6e9feb76956866865f2202c41ecfcb36f4543a40c64736f6c634300080c0033`,
  BytecodeLen: 5327,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:59:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:50:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:59:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:63:11:after expr stmt semicolon',
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
