import { useEffect, useState } from "react";
import axios from 'axios';
export default function useTodos(n)  {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>  {
                const getData = async ()  => {
                const response = await axios.get('https://sum-server.100xdevs.com/todos');
                setTodos(response.data.todos);
                setLoading(false);
            };
            getData();
            const intervalID = setInterval(getData, n * 1000);

        return () => clearInterval(intervalID); // this is a cleanup function.Whenever the n changes, there will be multip;e 
        }, [n]);                                // clocks running in the bg. so to clear that clock, we do this.
        
        return {todos, loading};
}

//"https://sum-server.100xdevs.com/todos"

// we can use useSwr hook for doing the same thing.