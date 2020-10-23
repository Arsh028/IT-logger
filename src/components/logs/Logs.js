import React,{useState,useEffect} from 'react'

import Preloader from '../layout/Preloader'

import LogItem from './LogItem'

const Logs = () => {
    const [logs, setlogs] = useState([]);
    const [loading, setloading] = useState(false);

    //componentDidMount 
    useEffect(() => {
      getlogs();  
    },[]);

    const getlogs = async() =>{
        setloading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        setlogs(data);
        setloading(false);
    }

    if(loading)
    {
        return <Preloader/>
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
                {!loading && logs.length === 0 ? 
                    (<p className='center'>No logs to show...</p>) : 
                    (logs.map(log => <LogItem log={log} key={log.id} />))
                }
            </li>
        </ul>
    )
}

export default Logs;
