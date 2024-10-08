import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
            return <div>
                <table className="table min-w-full bg-white table-auto border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 border border-gray-300">Name</th>
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
                <input type='number' name="postid" id="postid" value={this.state.postid} onChange={(e)=>{this.setState({postid:e.target.value});}}/>
                <button type='button' onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

Comments.propTypes = {};

export default Comments;
