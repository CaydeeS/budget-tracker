let db;

const request = indexedDB.open('budget_tracker', 1);


request.onupgradeneeded = function(event) {

    const db = event.target.result;

    db.createObjectStore('new_budget', { autoIncrement: true });
  };

//successful 
request.onsuccess = function(event) {

    db = event.target.result;
  
    // check if app is online, if yes run uploadPizza() function to send all local db data to api
    if (navigator.onLine) {
      // we haven't created this yet, but we will soon, so let's comment it out for now
      // uploadPizza();
    }
  };
  
  request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
  };  

function saveRecord(record) {

    const transaction = db.transaction(['new_budget'], 'readwrite');
  

    const budgetObjectStore = transaction.objectStore('new_budget');
  

    budgetObjectStore.add(record);
  }