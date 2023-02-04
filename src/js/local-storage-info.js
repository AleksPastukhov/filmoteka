const saveDataToLocalStorage = (key, value) => {
  try {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};

const getDataFromLocalStorage = key => {
  try {
    const data = localStorage.getItem(key);
    return result === null ? undefined : JSON.parse(data);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};

const removeDataFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
};
