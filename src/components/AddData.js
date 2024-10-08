import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

const AddData=()=>{
    const [userInput, setUserInput] = useState({
        title: "",
        body: "",
        userid: ""
    });
    const handleChange = (eve) => {
        // console.log(eve.target)
        const {id, value} = eve.target;
        setUserInput({...userInput, [id]:value});
    }
    const handleSubmit = (eve) => {
        console.log(userInput);
        axios.post("https://jsonplaceholder.typicode.com/posts", userInput)
        .then(resp=>console.log(resp))
        .catch(err=>console.error(err));
    }
    return <>
        <form className="container">
        <div style={{marginBottom: "10px"}}>
                    <Link to="/" className="mr-10">Dashboard</Link>
                    <Link to="/comments" >Comments</Link></div>
            <input type="text" id="title" name="title" onChange={handleChange}/>
            <input type="text" id="body" name="body" value={userInput.body} onChange={handleChange}/>            
            <input type="number" id="userid" name="userid" value={userInput.userid} onChange={handleChange}/>
            <button type="button" onClick={handleSubmit}>submit</button>
        </form>
    </>
}
export default AddData;