import axios from "axios";
import { useEffect, useState } from "react"


const useBurgers = () => {
    const [burgers, setBurgers] = useState([]);
    useEffect(() => {
        axios.get('https://gatsbee.herokuapp.com/burgers')
            .then(res => {
                setBurgers(res.data);
            })
    }, []);
    return [burgers, setBurgers];
};

export default useBurgers;