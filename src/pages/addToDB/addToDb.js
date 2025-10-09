import { toast } from "react-toastify";


const getInstalledApps = () => {

    const installedAppsSTR = localStorage.getItem('installedList');
    if(installedAppsSTR) {
        const installedAppsData = JSON.parse(installedAppsSTR);
        return installedAppsData;
    }
    else {
        return [];
    }
}


const  addToInstalledAppsData = (id) => {
    const installedAppsData = getInstalledApps();

if(installedAppsData.includes(id)) {
    
        toast('You have already installed this app');
       
    }

    else {
        installedAppsData.push(id);
        localStorage.setItem('installedList', JSON.stringify(installedAppsData));
        toast('Apps are installed !');
        
      
    }
    
    
}


export { addToInstalledAppsData, getInstalledApps};