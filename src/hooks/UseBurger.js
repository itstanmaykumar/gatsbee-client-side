import axios from "axios";
import { useEffect, useState } from "react"


const useBurger = (id) => {
    const [burger, setBurger] = useState({});
    useEffect(() => {
        axios.get(`https://gatsbee.herokuapp.com/burgers/${id}`)
            .then(res => {
                setBurger(res.data);
            })
    }, [id]);
    return [burger, setBurger];
};

export default useBurger;