import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initial = true) {
    const [isFacingUp, setIsFacingUp] = useState(initial);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
      };

    return [isFacingUp, flipCard];
}

function useAxios(key, url) {
    const [res, setRes] = useLocalStorage(key);
    
    const add = async (formatter = data => data, restOfUrl = "") => {
        const r = await axios.get(`${url}${restOfUrl}`);
        setRes(data => [...data, formatter(r.data)]);
    };

    const clear = () => setRes([]);

    return [res, add, clear];
}

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
}
  
export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };