import { toast } from "react-toastify";

const getFromLS = () => {
    const existingAppListLS = localStorage.getItem('intalledApps');
    if(existingAppListLS) {
        const savedLSApps = JSON.parse(existingAppListLS);
        return savedLSApps;
    }
    return [];
}

const addToLS = id => {
    const getAppListsFromLS = getFromLS();
    if(!getAppListsFromLS.includes(id)) {
        getAppListsFromLS.push(id);
        const convertIDStr = JSON.stringify(getAppListsFromLS);
        localStorage.setItem('intalledApps', convertIDStr);
        toast('App installed successfully');
    }
}

const removeFromLS = id => {
    const getAppListsFromLS = getFromLS();
    if(getAppListsFromLS) {
        const filteredApp = getAppListsFromLS.filter(LSid => parseInt(LSid) !== id);
        const convertIDStr = JSON.stringify(filteredApp);
        localStorage.setItem('intalledApps', convertIDStr);
    }
}

export {getFromLS, addToLS, removeFromLS};