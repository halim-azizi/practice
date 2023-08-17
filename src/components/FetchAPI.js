import axios from 'axios';
import {useEffect, useState} from "react";
import './style.css'
function FetchAPI() {
    const url = 'https://thronesapi.com/api/v2/Characters';
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) =>
                setData(res.data)
        );
    };

    useEffect(() => {
        fetchInfo();
        // console.log(data)
        // console.log(data)
        // console.log("o",Object.keys(data[0] ? data[0] : []));
    }, []);

    return(
        <div className="container">
            {
                Object?.keys(data[0] ? data[0] : [])?.forEach((key,index) => {
                })
            }
            <table className="user-table">
                <thead>
                <tr>
                    {Object.keys(data[0] ? data[0] : []).map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.title}</td>
                            <td>{user.family}</td>
                            <td>
                                <img src={user.imageUrl} alt={user.image} />
                            </td>
                            <td>{user.imageUrl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchAPI