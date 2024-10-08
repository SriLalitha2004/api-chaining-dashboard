import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard=()=>{
    const [stdData, setstdData] = useState(null);

    useEffect(()=>{
        !stdData && axios.get("https://jsonplaceholder.typicode.com/users")
        .then(respo=>{
            // console.log(respo.data);
                // respo.data=stdData
            setstdData(respo.data);
        })
        .catch(err=>console.log(err))
    }, [stdData]);
  
    return <div className="App-header container mx-auto px-4 overflow-x-auto">
    <Link to="/add">Add</Link>
    <Link to="/comments">Comments</Link>
        <table className="w-100 table min-w-full bg-Primary text-white table-auto border-collapse border border-white-300">
            <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 border border-gray-300">Name</th>
                    <th className="px-4 py-2 border border-gray-300">Phone</th>
                    <th className="px-4 py-2 border border-gray-300">Username</th>
                </tr>
            </thead>
            <tbody>
                {stdData && stdData.length && stdData.map((std, index) => {
                    return <tr id={index}>
                        <td className="px-4 py-2 border border-gray-300">{std.name}</td>
                        <td className="px-4 py-2 border border-gray-300">{std.phone}</td>
                        <td className="px-4 py-2 border border-gray-300">{std.username}</td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
}
export default Dashboard;