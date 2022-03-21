const getters = {
    showSidbar: (state) => state.base.showSidbar,
    userDept: (state) => state.base.userDept,
    cashierData: (state) => state.base.cashierData,
    loginType: (state) => state.base.loginType,
    userInfo: (state) => state.base.userInfo,
    unLock: (state) => state.base.unLock,
    dateSelect: (state) => state.base.dateSelect,
    reloadCashier: (state) => state.base.reloadCashier,
    // 库存管理
    ordersList: (state) => state.stock.ordersList,
    orderDetails: (state) => state.stock.orderDetails,
    inOrdersMsg: (state) => state.stock.inOrdersMsg,
    outOrdersMsg: (state) => state.stock.outOrdersMsg,
    goodsMsgs: (state) => state.stock.goodsMsgs,
    // returnOrders:(state) => state.stock.returnOrders,
    returnDetails: (state) => state.stock.returnDetails,

};
export default getters;
