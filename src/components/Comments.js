import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postid: "",
            comment: null
        };
    }
    handleSubmit = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postid=${this.state.postid}`)
        .then(resp=>this.setState({comment:resp.data}))
        .catch(resp=>console.log(resp))
    }

    render() {
        const {comment} = this.state
        
       if (comment != null && comment.length) {
            return <div className="container mx-auto px-4 overflow-x-auto">
                <h1>Comments</h1>
                <div style={{marginBottom: "10px"}}>
                    <Link to="/" className="mr-10">Dashboard</Link>
                    <Link to="/add" >Add</Link></div>
                <table className="custom-table w-100 table min-w-full bg-Primary text-white table-auto border-collapse border border-white-300">
            <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 border border-white-300">Name</th>
                    <th className="px-4 py-2 border border-gray-300">body</th>
                    <th className="px-4 py-2 border border-gray-300">email</th>
                </tr>
            </thead>
            <tbody>
                {comment && comment.length && comment.map((std, index) => {
                    return <tr id={index}>
                        <td className="px-4 py-2 border border-gray-300">{std.name}</td>
                        <td className="px-4 py-2 border border-gray-300">{std.body}</td>
                        <td className="px-4 py-2 border border-gray-300">{std.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
            </div>
       } 
       return (
            <div>
                <div style={{marginBottom: "10px"}}>
                    <Link to="/" className="mr-10">Dashboard</Link>
                    <Link to="/add" >Add</Link></div>

                <input type='number' name="postid" id="postid" placeholder="Enter post id(numbers only)" value={this.state.postid} onChange={(e)=>{this.setState({postid:e.target.value});}}/><br />
                <button type='button' onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

Comments.propTypes = {};

export default Comments;
