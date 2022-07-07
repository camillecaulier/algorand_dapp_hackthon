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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  
  return {
    infos: {
      Main: {
        feePer: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v174, v175] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v174, v175, v182, v183] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v175, v182] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v175, v182, v202] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v175, v182, v202] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        },
      NFT: {
        id: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v174, v175] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v174, v175, v182, v183] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v175, v182] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v202;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v174, v175] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v174, v175, v182, v183] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v175, v182] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v182;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        price: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v174, v175] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v174, v175, v182, v183] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v175, v182] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v237;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        size: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v174, v175] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v174, v175, v182, v183] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v175, v182] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v238;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        title: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v174, v175] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v174, v175, v182, v183] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v175, v182] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v175, v182, v202] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v175, v182, v202, v236, v237, v238] = svs;
              return (await ((async () => {
                
                
                return v236;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        }
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc1],
      3: [ctc1, ctc0],
      4: [ctc1, ctc0, ctc2],
      5: [ctc1, ctc0, ctc2],
      6: [ctc1, ctc0, ctc2, ctc3, ctc1, ctc1],
      7: [ctc1, ctc0, ctc2, ctc3, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  
  
  const v173 = stdlib.protect(ctc0, await interact.publishFee(), {
    at: './index.rsh:44:51:application',
    fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:15:function exp)'],
    msg: 'publishFee',
    who: 'Administrator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v173],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v175], secs: v177, time: v176, didSend: v27, from: v174 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v27, from: v174 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.publishContract(), {
    at: './index.rsh:50:31:application',
    fs: ['at ./index.rsh:50:31:application call to [unknown function] (defined at: ./index.rsh:50:31:function exp)', 'at ./index.rsh:50:31:application call to "liftedInteract" (defined at: ./index.rsh:50:31:application)'],
    msg: 'publishContract',
    who: 'Administrator'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v183], secs: v185, time: v184, didSend: v40, from: v182 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v188, time: v187, didSend: v47, from: v186 } = txn3;
  ;
  const v191 = stdlib.addressEq(v182, v186);
  stdlib.assert(v191, {
    at: './index.rsh:59:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  ;
  stdlib.protect(ctc1, await interact.reportFeeTransfer(v183), {
    at: './index.rsh:64:50:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:21:function exp)'],
    msg: 'reportFeeTransfer',
    who: 'Administrator'
    });
  
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v67, from: v201 } = txn4;
  ;
  ;
  const v212 = stdlib.addressEq(v182, v201);
  stdlib.assert(v212, {
    at: './index.rsh:72:7:dot',
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
  const {data: [], secs: v215, time: v214, didSend: v74, from: v213 } = txn5;
  ;
  ;
  const v225 = stdlib.addressEq(v182, v213);
  stdlib.assert(v225, {
    at: './index.rsh:74:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 5,
    out_tys: [ctc3, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v236, v237, v238], secs: v240, time: v239, didSend: v92, from: v235 } = txn6;
  ;
  const v241 = stdlib.addressEq(v182, v235);
  stdlib.assert(v241, {
    at: './index.rsh:83:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v244, time: v243, didSend: v97, from: v242 } = txn7;
  ;
  const v245 = stdlib.addressEq(v182, v242);
  stdlib.assert(v245, {
    at: './index.rsh:85:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Administrator'
    });
  stdlib.protect(ctc1, await interact.reportReady(v237), {
    at: './index.rsh:95:44:application',
    fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:21:function exp)'],
    msg: 'reportReady',
    who: 'Administrator'
    });
  
  const txn8 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 7,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v251, time: v250, didSend: v112, from: v249 } = txn8;
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v27, from: v174 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v183], secs: v185, time: v184, didSend: v40, from: v182 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v188, time: v187, didSend: v47, from: v186 } = txn3;
  ;
  const v191 = stdlib.addressEq(v182, v186);
  stdlib.assert(v191, {
    at: './index.rsh:59:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v67, from: v201 } = txn4;
  ;
  ;
  const v212 = stdlib.addressEq(v182, v201);
  stdlib.assert(v212, {
    at: './index.rsh:72:7:dot',
    fs: [],
    msg: 'sender correct',
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
  const {data: [], secs: v215, time: v214, didSend: v74, from: v213 } = txn5;
  ;
  ;
  const v225 = stdlib.addressEq(v182, v213);
  stdlib.assert(v225, {
    at: './index.rsh:74:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 5,
    out_tys: [ctc2, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v236, v237, v238], secs: v240, time: v239, didSend: v92, from: v235 } = txn6;
  ;
  const v241 = stdlib.addressEq(v182, v235);
  stdlib.assert(v241, {
    at: './index.rsh:83:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v244, time: v243, didSend: v97, from: v242 } = txn7;
  ;
  const v245 = stdlib.addressEq(v182, v242);
  stdlib.assert(v245, {
    at: './index.rsh:85:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Customer'
    });
  stdlib.protect(ctc3, await interact.optin(v202), {
    at: './index.rsh:98:32:application',
    fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:15:function exp)'],
    msg: 'optin',
    who: 'Customer'
    });
  
  const txn8 = await (ctc.sendrecv({
    args: [v175, v182, v202, v236, v237, v238],
    evt_cnt: 0,
    funcNum: 7,
    lct: v243,
    onlyIf: true,
    out_tys: [],
    pay: [v237, []],
    sim_p: (async (txn8) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v251, time: v250, didSend: v112, from: v249 } = txn8;
      
      sim_r.txns.push({
        amt: v237,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v182,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v249,
        tok: v202
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v202
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
    tys: [ctc0, ctc4, ctc1, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v251, time: v250, didSend: v112, from: v249 } = txn8;
  ;
  stdlib.protect(ctc3, await interact.reportPayment(v237), {
    at: './index.rsh:100:46:application',
    fs: ['at ./index.rsh:100:9:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
    msg: 'reportPayment',
    who: 'Customer'
    });
  
  ;
  stdlib.protect(ctc3, await interact.reportTransfer(), {
    at: './index.rsh:102:47:application',
    fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:21:function exp)'],
    msg: 'reportTransfer',
    who: 'Customer'
    });
  
  ;
  stdlib.protect(ctc3, await interact.reportPurchase(v236), {
    at: './index.rsh:104:41:application',
    fs: ['at ./index.rsh:104:11:application call to [unknown function] (defined at: ./index.rsh:104:15:function exp)'],
    msg: 'reportPurchase',
    who: 'Customer'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Tuple([ctc3, ctc0, ctc0]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v27, from: v174 } = txn1;
  ;
  const v181 = stdlib.protect(ctc0, await interact.communicateFee(), {
    at: './index.rsh:55:58:application',
    fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:15:function exp)'],
    msg: 'communicateFee',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v174, v175, v181],
    evt_cnt: 1,
    funcNum: 1,
    lct: v176,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v183], secs: v185, time: v184, didSend: v40, from: v182 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v183], secs: v185, time: v184, didSend: v40, from: v182 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v174, v175, v182, v183],
    evt_cnt: 0,
    funcNum: 2,
    lct: v184,
    onlyIf: true,
    out_tys: [],
    pay: [v183, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v188, time: v187, didSend: v47, from: v186 } = txn3;
      
      sim_r.txns.push({
        amt: v183,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v174,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc5, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v188, time: v187, didSend: v47, from: v186 } = txn3;
  ;
  const v191 = stdlib.addressEq(v182, v186);
  stdlib.assert(v191, {
    at: './index.rsh:59:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  stdlib.protect(ctc1, await interact.reportFeeTransfer(v183), {
    at: './index.rsh:64:50:application',
    fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:21:function exp)'],
    msg: 'reportFeeTransfer',
    who: 'Owner'
    });
  
  const v200 = stdlib.protect(ctc2, await interact.upload(), {
    at: './index.rsh:68:49:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)'],
    msg: 'upload',
    who: 'Owner'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v175, v182, v200],
    evt_cnt: 1,
    funcNum: 3,
    lct: v187,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v202], secs: v204, time: v203, didSend: v67, from: v201 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v202
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v67, from: v201 } = txn4;
  ;
  ;
  const v212 = stdlib.addressEq(v182, v201);
  stdlib.assert(v212, {
    at: './index.rsh:72:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v175, v182, v202],
    evt_cnt: 0,
    funcNum: 4,
    lct: v203,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:7:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '1'), v202]]],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v215, time: v214, didSend: v74, from: v213 } = txn5;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v202
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v215, time: v214, didSend: v74, from: v213 } = txn5;
  ;
  ;
  const v225 = stdlib.addressEq(v182, v213);
  stdlib.assert(v225, {
    at: './index.rsh:74:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v228 = stdlib.protect(ctc4, await interact.reportUpload(), {
    at: './index.rsh:79:70:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'reportUpload',
    who: 'Owner'
    });
  const v229 = v228[stdlib.checkedBigNumberify('./index.rsh:79:70:application', stdlib.UInt_max, '0')];
  const v230 = v228[stdlib.checkedBigNumberify('./index.rsh:79:70:application', stdlib.UInt_max, '1')];
  const v231 = v228[stdlib.checkedBigNumberify('./index.rsh:79:70:application', stdlib.UInt_max, '2')];
  
  const txn6 = await (ctc.sendrecv({
    args: [v175, v182, v202, v229, v230, v231],
    evt_cnt: 3,
    funcNum: 5,
    lct: v214,
    onlyIf: true,
    out_tys: [ctc3, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v236, v237, v238], secs: v240, time: v239, didSend: v92, from: v235 } = txn6;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc2, ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v236, v237, v238], secs: v240, time: v239, didSend: v92, from: v235 } = txn6;
  ;
  const v241 = stdlib.addressEq(v182, v235);
  stdlib.assert(v241, {
    at: './index.rsh:83:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const txn7 = await (ctc.sendrecv({
    args: [v175, v182, v202, v236, v237, v238],
    evt_cnt: 0,
    funcNum: 6,
    lct: v239,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v244, time: v243, didSend: v97, from: v242 } = txn7;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc5, ctc2, ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v244, time: v243, didSend: v97, from: v242 } = txn7;
  ;
  const v245 = stdlib.addressEq(v182, v242);
  stdlib.assert(v245, {
    at: './index.rsh:85:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  stdlib.protect(ctc1, await interact.reportReady(v237), {
    at: './index.rsh:95:44:application',
    fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:21:function exp)'],
    msg: 'reportReady',
    who: 'Owner'
    });
  
  const txn8 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 7,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v251, time: v250, didSend: v112, from: v249 } = txn8;
  ;
  stdlib.protect(ctc1, await interact.reportPayment(v237), {
    at: './index.rsh:100:46:application',
    fs: ['at ./index.rsh:100:9:application call to [unknown function] (defined at: ./index.rsh:100:21:function exp)'],
    msg: 'reportPayment',
    who: 'Owner'
    });
  
  ;
  stdlib.protect(ctc1, await interact.reportTransfer(), {
    at: './index.rsh:102:47:application',
    fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:21:function exp)'],
    msg: 'reportTransfer',
    who: 'Owner'
    });
  
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`Main_feePer()uint64`, `NFT_id()uint64`, `NFT_owner()address`, `NFT_price()uint64`, `NFT_size()uint64`, `NFT_title()byte[32]`],
    sigs: [`Main_feePer()uint64`, `NFT_id()uint64`, `NFT_owner()address`, `NFT_price()uint64`, `NFT_size()uint64`, `NFT_title()byte[32]`]
    },
  appApproval: `BiARAAEHBAUCKAYDIIL04sYJvKSWtAyK472ND+iS0oAGrp3C8ghQoI0GJgIBAAAiNQAxGEEE3ClkSSJbNQGBCFs1AjYaABdJQQEvIjUEIzUGSSEKDEAAzkkhCwxAADNJIQwMQAAWIQwSRDQBJBJEKGRJNQNXCCA1B0IEjyELEkQ0ASQSRChkSTUDV1AINQdCBHkhChJENAFJJQxAAE5JIQcMQAAkSSQMQAAQJBJEKGRJNQNXAAg1B0IEUEgoZEk1A1cACDUHQgRCSSEEDEAADkgoZEk1A1cACDUHQgQtSChkSTUDVwAINQdCBB9JIQUMQAAjSSEIDEAADkgoZEk1A1cACDUHQgQDSChkSTUDVyAINQdCA/UjEkQoZEk1A1cgCDUHQgPlSSENDEAAM0khDgxAABYhDhJENAEkEkQoZEk1A1dYCDUHQgPBIQ0SRDQBJBJEKGRJNQNXMCA1B0IDq4HU2a7nBRJENAEkEkQoZEk1A1coCDUHQgORNhoCFzUENhoDNhoBF0klDEABv0khBwxAAOBJJAxAAG8kEkQkNAESRDQESSISTDQCEhFEKGRJNQNJIQZbNf8hD1s1/oAE4huzqbA0/ogDaLEisgE0/rIII7IQNANXCCCyB7OxIrIBI7ISJbIQMQCyFDT/shGzsSKyASKyEiWyEDIJshUyCrIUNP+yEbNCArpIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSiJbNf9XCCA1/iEGWzX9VzAgNfwhD1s1+4FYWzX6gARhtKwMsDT+MQASRDT/FjT+UDT9FlA0/FA0+xZQNPoWUChLAVcAYGdIJDUBMgY1AkICa0khBAxAAHtIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJIls1/1cIIDX+IQZbNf1JNQVJSVcAIDX8IQlbNfshBls1+oAENwdkGDT8UDT7FlA0+hZQsDT+MQASRDT/FjT+UDT9FlA0/FA0+xZQNPoWUChLAVcAYGdIIQc1ATIGNQJCAelIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUkiWzX/VwggNf4hBls1/YAEkSc087AjNP2IAiA0/jEAEkQ0/xY0/lA0/RZQKEsBVwAwZ0ghBDUBMgY1AkIBk0khBQxAANlJIQgMQABsSCEINAESRDQESSISTDQCEhFEKGRJNQNJIls1/1cIIDX+STUFFzX9gATUDGzWNP0WULAhEIgBoLEisgEishIlshAyCrIUNP2yEbM0/jEAEkQ0/xY0/lA0/RZQKEsBVwAwZ0glNQEyBjUCQgEZSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSSEJWzX/VyggNf6BSFs1/YAEQbFATbA0/YgBNzT+MQASRLEisgE0/bIII7IQNANXACCyB7M0/xY0/lAoSwFXAChnSCEINQEyBjUCQgCzSSMMQABSSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEJWzX+STUFFzX9gATVFRkUNP0WULA0/zT+FlAxAFA0/RZQKEsBVwBQZ0ghBTUBMgY1AkIAW0ghEIgApyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEANP8WUChLAVcAKGdIIzUBMgY1AkIAHDEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
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
                "name": "v175",
                "type": "uint256"
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
                "name": "v175",
                "type": "uint256"
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
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
        "internalType": "struct T11",
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
                "internalType": "address payable",
                "name": "v202",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v236",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Main_feePer",
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
    "name": "NFT_id",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_price",
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
    "name": "NFT_size",
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
    "name": "NFT_title",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
        "internalType": "struct T11",
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
                "internalType": "address payable",
                "name": "v202",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v236",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003781380380620037818339810160408190526200002691620001b8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1620000823415600d620000e8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000df926002929091019062000112565b50505062000297565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000120906200025a565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b6000818303604080821215620001cd57600080fd5b80518082016001600160401b038082118383101715620001fd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021757600080fd5b8351945060208501915084821081831117156200024457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b6134da80620002a76000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063ab53f2c611610056578063ab53f2c614610220578063bf2c5b2414610243578063c798003714610256578063d71ac32e1461026957005b806383230757146101d2578063873779a1146101e757806398de9fae146101fa578063a7661d541461020d57005b80632bd4b202116100bd5780632bd4b20214610182578063527463f5146101955780635cf275dd146101aa5780637eea518c146101bf57005b806304890603146100f45780630b422642146101265780631e93b0f1146101495780632a212dc41461015e57005b366100f257005b005b34801561010057600080fd5b5061010961027e565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013257600080fd5b5061013b6107a6565b60405190815260200161011d565b34801561015557600080fd5b5060035461013b565b34801561016a57600080fd5b50610173610ccb565b6040519051815260200161011d565b6100f2610190366004612fd9565b6111fd565b3480156101a157600080fd5b5061013b61142a565b3480156101b657600080fd5b506101096117d4565b6100f26101cd366004613003565b611cef565b3480156101de57600080fd5b5060015461013b565b6100f26101f5366004613003565b611eb2565b6100f2610208366004613003565b61204d565b6100f261021b366004613003565b612207565b34801561022c57600080fd5b506102356123b6565b60405161011d92919061304b565b6100f2610251366004613003565b612453565b6100f2610264366004613003565b6125d8565b34801561027557600080fd5b5061013b6127a5565b60006001600054141561033b5760006002805461029a90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546102c690613085565b80156103135780601f106102e857610100808354040283529160200191610313565b820191906000526020600020905b8154815290600101906020018083116102f657829003601f168201915b505050505080602001905181019061032b9190613137565b905061033960006008612cc6565b505b600260005414156103f65760006002805461035590613085565b80601f016020809104026020016040519081016040528092919081815260200182805461038190613085565b80156103ce5780601f106103a3576101008083540402835291602001916103ce565b820191906000526020600020905b8154815290600101906020018083116103b157829003601f168201915b50505050508060200190518101906103e69190613171565b90506103f460006008612cc6565b505b600360005414156104b15760006002805461041090613085565b80601f016020809104026020016040519081016040528092919081815260200182805461043c90613085565b80156104895780601f1061045e57610100808354040283529160200191610489565b820191906000526020600020905b81548152906001019060200180831161046c57829003601f168201915b50505050508060200190518101906104a191906131f4565b90506104af60006008612cc6565b505b6004600054141561056c576000600280546104cb90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546104f790613085565b80156105445780601f1061051957610100808354040283529160200191610544565b820191906000526020600020905b81548152906001019060200180831161052757829003601f168201915b505050505080602001905181019061055c919061322c565b905061056a60006008612cc6565b505b600560005414156106275760006002805461058690613085565b80601f01602080910402602001604051908101604052809291908181526020018280546105b290613085565b80156105ff5780601f106105d4576101008083540402835291602001916105ff565b820191906000526020600020905b8154815290600101906020018083116105e257829003601f168201915b5050505050806020019051810190610617919061322c565b905061062560006008612cc6565b505b600660005414156106e25760006002805461064190613085565b80601f016020809104026020016040519081016040528092919081815260200182805461066d90613085565b80156106ba5780601f1061068f576101008083540402835291602001916106ba565b820191906000526020600020905b81548152906001019060200180831161069d57829003601f168201915b50505050508060200190518101906106d291906132a3565b90506106e060006008612cc6565b505b60076000541415610797576000600280546106fc90613085565b80601f016020809104026020016040519081016040528092919081815260200182805461072890613085565b80156107755780601f1061074a57610100808354040283529160200191610775565b820191906000526020600020905b81548152906001019060200180831161075857829003601f168201915b505050505080602001905181019061078d91906132a3565b6040015192915050565b6107a360006008612cc6565b90565b600060016000541415610863576000600280546107c290613085565b80601f01602080910402602001604051908101604052809291908181526020018280546107ee90613085565b801561083b5780601f106108105761010080835404028352916020019161083b565b820191906000526020600020905b81548152906001019060200180831161081e57829003601f168201915b50505050508060200190518101906108539190613137565b90506108616000600b612cc6565b505b6002600054141561091e5760006002805461087d90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546108a990613085565b80156108f65780601f106108cb576101008083540402835291602001916108f6565b820191906000526020600020905b8154815290600101906020018083116108d957829003601f168201915b505050505080602001905181019061090e9190613171565b905061091c6000600b612cc6565b505b600360005414156109d95760006002805461093890613085565b80601f016020809104026020016040519081016040528092919081815260200182805461096490613085565b80156109b15780601f10610986576101008083540402835291602001916109b1565b820191906000526020600020905b81548152906001019060200180831161099457829003601f168201915b50505050508060200190518101906109c991906131f4565b90506109d76000600b612cc6565b505b60046000541415610a94576000600280546109f390613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1f90613085565b8015610a6c5780601f10610a4157610100808354040283529160200191610a6c565b820191906000526020600020905b815481529060010190602001808311610a4f57829003601f168201915b5050505050806020019051810190610a84919061322c565b9050610a926000600b612cc6565b505b60056000541415610b4f57600060028054610aae90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610ada90613085565b8015610b275780601f10610afc57610100808354040283529160200191610b27565b820191906000526020600020905b815481529060010190602001808311610b0a57829003601f168201915b5050505050806020019051810190610b3f919061322c565b9050610b4d6000600b612cc6565b505b60066000541415610c0a57600060028054610b6990613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9590613085565b8015610be25780601f10610bb757610100808354040283529160200191610be2565b820191906000526020600020905b815481529060010190602001808311610bc557829003601f168201915b5050505050806020019051810190610bfa91906132a3565b9050610c086000600b612cc6565b505b60076000541415610cbf57600060028054610c2490613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5090613085565b8015610c9d5780601f10610c7257610100808354040283529160200191610c9d565b820191906000526020600020905b815481529060010190602001808311610c8057829003601f168201915b5050505050806020019051810190610cb591906132a3565b60a0015192915050565b6107a36000600b612cc6565b60408051602081019091526000815260016000541415610d9557600060028054610cf490613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2090613085565b8015610d6d5780601f10610d4257610100808354040283529160200191610d6d565b820191906000526020600020905b815481529060010190602001808311610d5057829003601f168201915b5050505050806020019051810190610d859190613137565b9050610d936000600c612cc6565b505b60026000541415610e5057600060028054610daf90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610ddb90613085565b8015610e285780601f10610dfd57610100808354040283529160200191610e28565b820191906000526020600020905b815481529060010190602001808311610e0b57829003601f168201915b5050505050806020019051810190610e409190613171565b9050610e4e6000600c612cc6565b505b60036000541415610f0b57600060028054610e6a90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9690613085565b8015610ee35780601f10610eb857610100808354040283529160200191610ee3565b820191906000526020600020905b815481529060010190602001808311610ec657829003601f168201915b5050505050806020019051810190610efb91906131f4565b9050610f096000600c612cc6565b505b60046000541415610fc657600060028054610f2590613085565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5190613085565b8015610f9e5780601f10610f7357610100808354040283529160200191610f9e565b820191906000526020600020905b815481529060010190602001808311610f8157829003601f168201915b5050505050806020019051810190610fb6919061322c565b9050610fc46000600c612cc6565b505b6005600054141561108157600060028054610fe090613085565b80601f016020809104026020016040519081016040528092919081815260200182805461100c90613085565b80156110595780601f1061102e57610100808354040283529160200191611059565b820191906000526020600020905b81548152906001019060200180831161103c57829003601f168201915b5050505050806020019051810190611071919061322c565b905061107f6000600c612cc6565b505b6006600054141561113c5760006002805461109b90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546110c790613085565b80156111145780601f106110e957610100808354040283529160200191611114565b820191906000526020600020905b8154815290600101906020018083116110f757829003601f168201915b505050505080602001905181019061112c91906132a3565b905061113a6000600c612cc6565b505b600760005414156111f15760006002805461115690613085565b80601f016020809104026020016040519081016040528092919081815260200182805461118290613085565b80156111cf5780601f106111a4576101008083540402835291602001916111cf565b820191906000526020600020905b8154815290600101906020018083116111b257829003601f168201915b50505050508060200190518101906111e791906132a3565b6060015192915050565b6107a36000600c612cc6565b61120d6005600054146020612cc6565b6112278135158061122057506001548235145b6021612cc6565b60008080556002805461123990613085565b80601f016020809104026020016040519081016040528092919081815260200182805461126590613085565b80156112b25780601f10611287576101008083540402835291602001916112b2565b820191906000526020600020905b81548152906001019060200180831161129557829003601f168201915b50505050508060200190518101906112ca919061322c565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808201529091507f69bc0a11002ed02184e968b1c5dccad83f7c57051e043fa550c9c49fc70232ed9060a00160405180910390a16113343415601e612cc6565b602081015161134f906001600160a01b03163314601f612cc6565b6113936040805160c0810182526000808252602080830182905282840182905283519081019093528252906060820190815260200160008152602001600081525090565b815181526020808301516001600160a01b0390811682840152604080850151909116908301526113cb90368590038501908501613358565b60608083019190915260408085013560808401529084013560a08301526006600055436001555161140090829060200161337c565b60405160208183030381529060405260029080519060200190611424929190612f03565b50505050565b6000600160005414156114e15760006002805461144690613085565b80601f016020809104026020016040519081016040528092919081815260200182805461147290613085565b80156114bf5780601f10611494576101008083540402835291602001916114bf565b820191906000526020600020905b8154815290600101906020018083116114a257829003601f168201915b50505050508060200190518101906114d79190613137565b6020015192915050565b6002600054141561158c576000600280546114fb90613085565b80601f016020809104026020016040519081016040528092919081815260200182805461152790613085565b80156115745780601f1061154957610100808354040283529160200191611574565b820191906000526020600020905b81548152906001019060200180831161155757829003601f168201915b50505050508060200190518101906114d79190613171565b6003600054141561163e576000600280546115a690613085565b80601f01602080910402602001604051908101604052809291908181526020018280546115d290613085565b801561161f5780601f106115f45761010080835404028352916020019161161f565b820191906000526020600020905b81548152906001019060200180831161160257829003601f168201915b505050505080602001905181019061163791906131f4565b5192915050565b600460005414156116e95760006002805461165890613085565b80601f016020809104026020016040519081016040528092919081815260200182805461168490613085565b80156116d15780601f106116a6576101008083540402835291602001916116d1565b820191906000526020600020905b8154815290600101906020018083116116b457829003601f168201915b5050505050806020019051810190611637919061322c565b600560005414156117035760006002805461165890613085565b600660005414156117ae5760006002805461171d90613085565b80601f016020809104026020016040519081016040528092919081815260200182805461174990613085565b80156117965780601f1061176b57610100808354040283529160200191611796565b820191906000526020600020905b81548152906001019060200180831161177957829003601f168201915b505050505080602001905181019061163791906132a3565b600760005414156117c85760006002805461171d90613085565b6107a360006007612cc6565b600060016000541415611891576000600280546117f090613085565b80601f016020809104026020016040519081016040528092919081815260200182805461181c90613085565b80156118695780601f1061183e57610100808354040283529160200191611869565b820191906000526020600020905b81548152906001019060200180831161184c57829003601f168201915b50505050508060200190518101906118819190613137565b905061188f60006009612cc6565b505b6002600054141561194c576000600280546118ab90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546118d790613085565b80156119245780601f106118f957610100808354040283529160200191611924565b820191906000526020600020905b81548152906001019060200180831161190757829003601f168201915b505050505080602001905181019061193c9190613171565b905061194a60006009612cc6565b505b60036000541415611a075760006002805461196690613085565b80601f016020809104026020016040519081016040528092919081815260200182805461199290613085565b80156119df5780601f106119b4576101008083540402835291602001916119df565b820191906000526020600020905b8154815290600101906020018083116119c257829003601f168201915b50505050508060200190518101906119f791906131f4565b9050611a0560006009612cc6565b505b60046000541415611ac257600060028054611a2190613085565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4d90613085565b8015611a9a5780601f10611a6f57610100808354040283529160200191611a9a565b820191906000526020600020905b815481529060010190602001808311611a7d57829003601f168201915b5050505050806020019051810190611ab2919061322c565b9050611ac060006009612cc6565b505b60056000541415611b7d57600060028054611adc90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054611b0890613085565b8015611b555780601f10611b2a57610100808354040283529160200191611b55565b820191906000526020600020905b815481529060010190602001808311611b3857829003601f168201915b5050505050806020019051810190611b6d919061322c565b9050611b7b60006009612cc6565b505b60066000541415611c3857600060028054611b9790613085565b80601f0160208091040260200160405190810160405280929190818152602001828054611bc390613085565b8015611c105780601f10611be557610100808354040283529160200191611c10565b820191906000526020600020905b815481529060010190602001808311611bf357829003601f168201915b5050505050806020019051810190611c2891906132a3565b9050611c3660006009612cc6565b505b60076000541415611ce357600060028054611c5290613085565b80601f0160208091040260200160405190810160405280929190818152602001828054611c7e90613085565b8015611ccb5780601f10611ca057610100808354040283529160200191611ccb565b820191906000526020600020905b815481529060010190602001808311611cae57829003601f168201915b50505050508060200190518101906114d791906132a3565b6107a360006009612cc6565b611cff6002600054146013612cc6565b611d1981351580611d1257506001548235145b6014612cc6565b600080805560028054611d2b90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054611d5790613085565b8015611da45780601f10611d7957610100808354040283529160200191611da4565b820191906000526020600020905b815481529060010190602001808311611d8757829003601f168201915b5050505050806020019051810190611dbc9190613171565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051611def9291906133db565b60405180910390a1611e08816060015134146011612cc6565b6040810151611e23906001600160a01b031633146012612cc6565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611e60573d6000803e3d6000fd5b506040805180820182526000808252602080830182815285820151808552868601516001600160a01b039081168352600390945543600155855192830152519091169281019290925290606001611400565b611ec2600160005414600f612cc6565b611edc81351580611ed557506001548235145b6010612cc6565b600080805560028054611eee90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054611f1a90613085565b8015611f675780601f10611f3c57610100808354040283529160200191611f67565b820191906000526020600020905b815481529060010190602001808311611f4a57829003601f168201915b5050505050806020019051810190611f7f9190613137565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a1611fd43415600e612cc6565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186523385528c8701358352600290975543600155895195860196909652925197840197909752519092169481019490945251908301529060a001611400565b61205d6003600054146017612cc6565b6120778135158061207057506001548235145b6018612cc6565b60008080556002805461208990613085565b80601f01602080910402602001604051908101604052809291908181526020018280546120b590613085565b80156121025780601f106120d757610100808354040283529160200191612102565b820191906000526020600020905b8154815290600101906020018083116120e557829003601f168201915b505050505080602001905181019061211a91906131f4565b90507fee3bc1f4d4c499b854813d79a19675a1ad29af723ef5be60c1811a34d1413978338360405161214d929190613413565b60405180910390a161216134156015612cc6565b602081015161217c906001600160a01b031633146016612cc6565b6040805160608101825260008082526020820181905291810191909152815181526020808301516001600160a01b0316818301526121c0906040850190850161344e565b6001600160a01b0390811660408381019182526004600055436001558051845160208083019190915285015184169181019190915290519091166060820152608001611400565b612217600460005414601c612cc6565b6122318135158061222a57506001548235145b601d612cc6565b60008080556002805461224390613085565b80601f016020809104026020016040519081016040528092919081815260200182805461226f90613085565b80156122bc5780601f10612291576101008083540402835291602001916122bc565b820191906000526020600020905b81548152906001019060200180831161229f57829003601f168201915b50505050508060200190518101906122d4919061322c565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516123079291906133db565b60405180910390a161231b34156019612cc6565b61233561232e3383604001516001612cec565b601a612cc6565b6020810151612350906001600160a01b03163314601b612cc6565b6040805160608082018352600080835260208084018281528486018381528751808752888401516001600160a01b039081168452898901518116835260059095554360015587519384015290518316958201959095529351169083015290608001611400565b6000606060005460028080546123cb90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546123f790613085565b80156124445780601f1061241957610100808354040283529160200191612444565b820191906000526020600020905b81548152906001019060200180831161242757829003601f168201915b50505050509050915091509091565b6124636007600054146027612cc6565b61247d8135158061247657506001548235145b6028612cc6565b60008080556002805461248f90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546124bb90613085565b80156125085780601f106124dd57610100808354040283529160200191612508565b820191906000526020600020905b8154815290600101906020018083116124eb57829003601f168201915b505050505080602001905181019061252091906132a3565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33836040516125539291906133db565b60405180910390a161256c816080015134146026612cc6565b80602001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156125ad573d6000803e3d6000fd5b506125be8160400151336001612d04565b600080805560018190556125d490600290612f87565b5050565b6125e86006600054146024612cc6565b612602813515806125fb57506001548235145b6025612cc6565b60008080556002805461261490613085565b80601f016020809104026020016040519081016040528092919081815260200182805461264090613085565b801561268d5780601f106126625761010080835404028352916020019161268d565b820191906000526020600020905b81548152906001019060200180831161267057829003601f168201915b50505050508060200190518101906126a591906132a3565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33836040516126d89291906133db565b60405180910390a16126ec34156022612cc6565b6020810151612707906001600160a01b031633146023612cc6565b61274b6040805160c0810182526000808252602080830182905282840182905283519081019093528252906060820190815260200160008152602001600081525090565b815181526020808301516001600160a01b039081168284015260408085015190911681840152606080850151908401526080808501519084015260a08085015190840152600760005543600155516114009183910161337c565b600060016000541415612862576000600280546127c190613085565b80601f01602080910402602001604051908101604052809291908181526020018280546127ed90613085565b801561283a5780601f1061280f5761010080835404028352916020019161283a565b820191906000526020600020905b81548152906001019060200180831161281d57829003601f168201915b50505050508060200190518101906128529190613137565b90506128606000600a612cc6565b505b6002600054141561291d5760006002805461287c90613085565b80601f01602080910402602001604051908101604052809291908181526020018280546128a890613085565b80156128f55780601f106128ca576101008083540402835291602001916128f5565b820191906000526020600020905b8154815290600101906020018083116128d857829003601f168201915b505050505080602001905181019061290d9190613171565b905061291b6000600a612cc6565b505b600360005414156129d85760006002805461293790613085565b80601f016020809104026020016040519081016040528092919081815260200182805461296390613085565b80156129b05780601f10612985576101008083540402835291602001916129b0565b820191906000526020600020905b81548152906001019060200180831161299357829003601f168201915b50505050508060200190518101906129c891906131f4565b90506129d66000600a612cc6565b505b60046000541415612a93576000600280546129f290613085565b80601f0160208091040260200160405190810160405280929190818152602001828054612a1e90613085565b8015612a6b5780601f10612a4057610100808354040283529160200191612a6b565b820191906000526020600020905b815481529060010190602001808311612a4e57829003601f168201915b5050505050806020019051810190612a83919061322c565b9050612a916000600a612cc6565b505b60056000541415612b4e57600060028054612aad90613085565b80601f0160208091040260200160405190810160405280929190818152602001828054612ad990613085565b8015612b265780601f10612afb57610100808354040283529160200191612b26565b820191906000526020600020905b815481529060010190602001808311612b0957829003601f168201915b5050505050806020019051810190612b3e919061322c565b9050612b4c6000600a612cc6565b505b60066000541415612c0957600060028054612b6890613085565b80601f0160208091040260200160405190810160405280929190818152602001828054612b9490613085565b8015612be15780601f10612bb657610100808354040283529160200191612be1565b820191906000526020600020905b815481529060010190602001808311612bc457829003601f168201915b5050505050806020019051810190612bf991906132a3565b9050612c076000600a612cc6565b505b60076000541415612cbe57600060028054612c2390613085565b80601f0160208091040260200160405190810160405280929190818152602001828054612c4f90613085565b8015612c9c5780601f10612c7157610100808354040283529160200191612c9c565b820191906000526020600020905b815481529060010190602001808311612c7f57829003601f168201915b5050505050806020019051810190612cb491906132a3565b6080015192915050565b6107a36000600a5b816125d45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000612cfa83853085612d1d565b90505b9392505050565b612d0f838383612df7565b612d1857600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612d849161346b565b60006040518083038185875af1925050503d8060008114612dc1576040519150601f19603f3d011682016040523d82523d6000602084013e612dc6565b606091505b5091509150612dd782826001612ec8565b5080806020019051810190612dec9190613487565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612e569161346b565b60006040518083038185875af1925050503d8060008114612e93576040519150601f19603f3d011682016040523d82523d6000602084013e612e98565b606091505b5091509150612ea982826002612ec8565b5080806020019051810190612ebe9190613487565b9695505050505050565b60608315612ed7575081612cfd565b825115612ee75782518084602001fd5b60405163100960cb60e01b815260048101839052602401612ce3565b828054612f0f90613085565b90600052602060002090601f016020900481019282612f315760008555612f77565b82601f10612f4a57805160ff1916838001178555612f77565b82800160010185558215612f77579182015b82811115612f77578251825591602001919060010190612f5c565b50612f83929150612fc4565b5090565b508054612f9390613085565b6000825580601f10612fa3575050565b601f016020900490600052602060002090810190612fc19190612fc4565b50565b5b80821115612f835760008155600101612fc5565b600060808284031215612feb57600080fd5b50919050565b600060408284031215612feb57600080fd5b60006040828403121561301557600080fd5b612cfd8383612ff1565b60005b8381101561303a578181015183820152602001613022565b838111156114245750506000910152565b828152604060208201526000825180604084015261307081606085016020870161301f565b601f01601f1916919091016060019392505050565b600181811c9082168061309957607f821691505b60208210811415612feb57634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff811182821017156130eb57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156130eb57634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114612fc157600080fd5b60006040828403121561314957600080fd5b6131516130ba565b825161315c81613122565b81526020928301519281019290925250919050565b60006080828403121561318357600080fd5b6040516080810181811067ffffffffffffffff821117156131b457634e487b7160e01b600052604160045260246000fd5b60405282516131c281613122565b81526020838101519082015260408301516131dc81613122565b60408201526060928301519281019290925250919050565b60006040828403121561320657600080fd5b61320e6130ba565b82518152602083015161322081613122565b60208201529392505050565b60006060828403121561323e57600080fd5b6040516060810181811067ffffffffffffffff8211171561326f57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015161328481613122565b6020820152604083015161329781613122565b60408201529392505050565b600081830360c08112156132b657600080fd5b60405160c0810181811067ffffffffffffffff821117156132e757634e487b7160e01b600052604160045260246000fd5b6040528351815260208401516132fc81613122565b6020820152604084015161330f81613122565b60408201526020605f198301121561332657600080fd5b61332e6130f1565b60608581015182528201526080808501519082015260a09384015193810193909352509092915050565b60006020828403121561336a57600080fd5b6133726130f1565b9135825250919050565b815181526020808301516001600160a01b03908116918301919091526040808401519091169082015260608083015151908201526080808301519082015260a0918201519181019190915260c00190565b8015158114612fc157600080fd5b6001600160a01b038316815281356020808301919091526060820190830135613403816133cd565b8015156040840152509392505050565b6001600160a01b038381168252823560208084019190915260608301919084013561343d81613122565b818116604085015250509392505050565b60006020828403121561346057600080fd5b8135612cfd81613122565b6000825161347d81846020870161301f565b9190910192915050565b60006020828403121561349957600080fd5b8151612cfd816133cd56fea26469706673582212201661ca5ed57ba8d6978fb0a90ac36af2e10120a916833ad8e04c8eb3df2efb8f64736f6c634300080c0033`,
  BytecodeLen: 14209,
  Which: `oD`,
  version: 7,
  views: {
    Main: {
      feePer: `Main_feePer`
      },
    NFT: {
      id: `NFT_id`,
      owner: `NFT_owner`,
      price: `NFT_price`,
      size: `NFT_size`,
      title: `NFT_title`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:58:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:93:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:105:13:after expr stmt semicolon',
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
