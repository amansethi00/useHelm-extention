
import { useEffect, useRef, useState } from 'react';
import './index.css'
import { LocalStorageKeys, listOfWhitelistedUrls } from '../common';
import ListItem from './ListItem';
const Homepage = () => {
    const [listOfUrls, setListOfUrls] = useState([]);
    const [urlCountMap, setUrlCountMap]= useState({})
    const inputRef = useRef();
    
    useEffect(()=>{
        (async() => {
            const storedListOfWhiteListedUrls = (await chrome.storage.sync.get([LocalStorageKeys.urls]))?.[LocalStorageKeys.urls]
            console.log("utrr", storedListOfWhiteListedUrls)
            if(storedListOfWhiteListedUrls) {
                setListOfUrls(storedListOfWhiteListedUrls);
            } else {
                setListOfUrls(listOfWhitelistedUrls)
            }
        })();
        (async() => {
            const countMap = (await chrome.storage.sync.get([LocalStorageKeys.count]))?.[LocalStorageKeys.count];
            console.log("cmap",countMap)
            if(countMap) {
                setUrlCountMap(countMap);
            } 
        })();
    }, []);
    
    const addToWhitelistedUrls = async () => {
        try {
            const inputValue = inputRef.current?.value;
            const alreadyExists = listOfUrls.includes(inputValue);
            if(!alreadyExists) {
                const newUrls = [inputValue, ...listOfUrls];
                if(inputValue) {
                    setListOfUrls(newUrls)
                    await chrome.storage.sync.set({ [LocalStorageKeys.urls]: newUrls });
                    inputRef.current.value = '';
                }
            } else {
                alert("value already exists in the list");
            }
        } catch(error) {
            console.log("errr",error)
        }
        
    }

    const removeWhitelistedUrls = async (url) => {
        const newUrls = listOfUrls.filter(storedUrl=> storedUrl!==url);
        setListOfUrls(newUrls)
        await chrome.storage.sync.set({ [LocalStorageKeys.urls]: newUrls });
        const newUrlCountMap = structuredClone(urlCountMap);
        delete newUrlCountMap[url];
        setUrlCountMap(newUrlCountMap);
        await chrome.storage.sync.set({ [LocalStorageKeys.count]:  newUrlCountMap});

    }
    
        console.log('listOfUrls', listOfUrls)

    return (
        <div  className='container' >
            <p className='header-title' >List of Whitelist Urls</p>
            <div className='input-container' >
                <input onKeyDown={(e)=>{
                    if(e.key === 'Enter') {
                        addToWhitelistedUrls()
                    }
                }} placeholder='Enter url to whitelist for tracking' ref={inputRef} className='input' />
            </div>
            <br/>
    
        {
            listOfUrls?.length > 0 ? listOfUrls.map((url,index) => {
                return (
                    <ListItem key={index} url={url} removeHandler={()=>removeWhitelistedUrls(url)} count={urlCountMap?.[url]?.count ?? ''} />
                )
            }) : null
        }
        
        </div>
    )
}

export default Homepage;