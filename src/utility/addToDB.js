const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installList");
  return storedAppSTR ? JSON.parse(storedAppSTR) : [];
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();
  if (!storedAppData.includes(id)) {
    storedAppData.push(id);
    localStorage.setItem("installList", JSON.stringify(storedAppData));
  }
};

const removeFromStoredApp = (id) => {
  const storedAppData = getStoredApp();
  const updatedList = storedAppData.filter((appId) => parseInt(appId) !== id);
  localStorage.setItem("installList", JSON.stringify(updatedList));
};

export { getStoredApp, addToStoredDB, removeFromStoredApp };
