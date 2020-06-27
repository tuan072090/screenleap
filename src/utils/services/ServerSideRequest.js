const cookie = require('cookie');

const ServerSideRequest = (PropsFunction) => (context) => {
    const {params, req, res, query, preview, previewData} = context;

    //  add tracking


    if (req.headers.cookie){
        const cookieData = cookie.parse(req.headers.cookie);

    }

    return PropsFunction({params: params ? params : {}, query});
};

export default ServerSideRequest;
