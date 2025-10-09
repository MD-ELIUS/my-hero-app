import { toast } from "react-toastify";
import { getInstalledApps } from "../addToDB/addToDb";

const removeToInstalledAppsData = (id) => {
  const installedAppsData = getInstalledApps();

  const refineInstallAppsData = installedAppsData.filter(a => a !== id);


  localStorage.setItem('installedList', JSON.stringify(refineInstallAppsData));

  toast('Apps are uninstalled')
  
};

export { removeToInstalledAppsData };
