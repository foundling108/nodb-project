import React from 'react';
import './App.css';


function DisplayResponses(props)
{
    let listDisplay = props.show.map((e,i) =>
    {
        return (
            <div className="Response_list_parent"> 
                       
                <div key={i} className="Response_list">
                    <button 
                        key={e+i}
                        className="Edit_buttons">Edit</button>
                    {"#" + e.id + " " + e.answer}
                    <button key={i+e} className="Delete_buttons">Delete</button>
                </div>
            </div>
        );
    });

    return (
        <div>
            {listDisplay};
        </div> 
    );   


    // return (
    //     <div>
    //         <button></button>
    //         <List />
    //     </div>
    // );       
}
export default DisplayResponses;