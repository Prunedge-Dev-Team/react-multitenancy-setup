const DOMAIN = process.env.REACT_APP_DOMAIN || 'prunedge.com';

export const getSubdomain = () => {
    let hostname = window.location.hostname.toLowerCase();
    const hasDomain = hostname.includes(DOMAIN) || hostname.includes('localhost');

    if(hasDomain){
        return hostname.split('.')[0]
    }
    return hostname;
}