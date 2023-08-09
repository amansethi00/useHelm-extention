import { LocalStorageKeys, listOfWhitelistedUrls } from "./src/common";

function matchUrlFunction(urls, currentUrl) {
  for (const url of urls) {
    const regex = new RegExp(url);
    if (regex.test(currentUrl)) {
      return url;
    }
  }
  return null; // Return null if no match is found
}

const getNewCount = (tabId,currentTime) => {
  return {
    count:1,
    lastStoredTimeStampMap: {
      [tabId]: currentTime,
    }
  }
}

const updateToStore = async (tabId, matchedUrl) => {
  let currentObject = {};
  const storedObject = (await chrome.storage.sync.get([LocalStorageKeys.count]))?.[LocalStorageKeys.count];
  const currentTime = Date.now();
    if(storedObject) {
      currentObject = storedObject;
      if(currentObject?.[matchedUrl]) {
        const storedTimeStamp = currentObject[matchedUrl].lastStoredTimeStampMap?.[tabId];
        if(storedTimeStamp) {
          // select and update
            currentObject[matchedUrl].lastStoredTimeStampMap[tabId] = currentTime;
            currentObject[matchedUrl].count = ++currentObject[matchedUrl].count;  
        } else {
          // update blindly
          if(!currentObject[matchedUrl]?.lastStoredTimeStampMap) {
            currentObject[matchedUrl] = {
              lastStoredTimeStampMap: {},
              count: 0,
            };
          }
          currentObject[matchedUrl].lastStoredTimeStampMap[tabId] = currentTime;
          currentObject[matchedUrl].count = ++currentObject[matchedUrl].count;
        }
      } else {
        currentObject[matchedUrl] = getNewCount(tabId, currentTime);
      }
    } else {
      currentObject = {}
      currentObject[matchedUrl] = getNewCount(tabId, currentTime)
    }
    console.log("updated obje", currentObject)
    await chrome.storage.sync.set({ [LocalStorageKeys.count]: currentObject });
}



var shouldCheckAndUpdate = false;

try {
chrome.tabs.onUpdated.addListener(async(tabId, changeInfo, tab)=> {
  if(shouldCheckAndUpdate) {
    const storedListOfWhiteListedUrls = (await chrome.storage.sync.get([LocalStorageKeys.urls]))?.[LocalStorageKeys.urls]
    const matchedUrl  = matchUrlFunction(storedListOfWhiteListedUrls ?? listOfWhitelistedUrls,tab.url);
    console.log("macthed url", matchedUrl );
    if(matchedUrl) {
      await updateToStore(tabId, matchedUrl);
    }
  }
  shouldCheckAndUpdate = false;
});
} catch(e) {
    console.log("Errroed", e)
}

try {
  chrome.tabs.onActivated.addListener(
    async (activeObject) => {
      shouldCheckAndUpdate = true;
    }
  )
  } catch(e) {
      console.log("Errroed", e)
  }
  

  chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.frameId === 0) {
      shouldCheckAndUpdate = true;
      console.log('Tab reloaded:', details.tabId);
      // Your code here
    }
  });