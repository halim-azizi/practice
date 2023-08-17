import axios from 'axios';
import {useEffect, useState} from "react";
function FetchAPI() {
    const url = 'https://thronesapi.com/api/v2/Characters';
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => {
                setData(res.data)
                setKeys(Object.keys(res.data[0]))
            }
        );
    };

    useEffect(() => {
        fetchInfo();
        console.log(keys)
        keys.forEach((key) => {
        console.log(key)
        })

    }, []);

    return(
        <div className="container">
            <table>
                <thead>
                {
                    keys.forEach((key) => {
                       return (<tr>
                        <th>{key}</th>
                        <th>{key}</th>
                        <th>{key}</th>
                        <th>{key}</th>
                        <th>{key}</th>
                        <th>{key}</th>
                        <th>{key}</th>
                    </tr>
                       )})
                }
                </thead>
                <tbody>
                {
                    data.map((user, index) => {
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.title}</td>
                            <td>{user.family}</td>
                            <td>{user.image}</td>
                            <td>{user.imageUrl}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );


}

export default FetchAPI