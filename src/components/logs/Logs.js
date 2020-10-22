import React,{useState,useEffect} from 'react'


export const Logs = () => {
    const [logs, setlogs] = useState([]);
    const [loading, setloading] = useState(false);

    //componentDidMount 
    useEffect(() => {
      getlogs();  
    },[])
    const getlogs = async() =>{
        setloading(true);
        const res = fetch('/logs');
        const data = (await res).json();
        setlogs(data);
        setloading(false);
    }
    return (
        <div>
            
        </div>
    )
}
