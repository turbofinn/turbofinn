class CommonUtils {
    constructor() {
        if (!CommonUtils.instance) { CommonUtils.instance = this }
        return CommonUtils.instance
    }

    getBaseUrl = () => { return process.env.REACT_APP_IS_IN_PROD === "true" ? process.env.REACT_APP_BASE_URL_PROD : process.env.REACT_APP_BASE_URL_DEV; }

    toIndianCurrency = (num) => {
        const curr = parseInt(num)
        const ind = curr.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
        return ind.slice(0, -3);
    };
}

const apiService = new CommonUtils();
export default apiService;




