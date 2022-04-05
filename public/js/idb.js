let db;

const request = indexedDB.open('budget_tracker', 1);


request.onupgradeneeded = function(event) {

    const db = event.target.result;

    db.createObjectStore('new_budget', { autoIncrement: true });
  };

//successful 
request.onsuccess = function(event) {

    db = event.target.result;
  

    if (navigator.onLine) {

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