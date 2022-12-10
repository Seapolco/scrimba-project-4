import React from 'react';


const MemeForm = () => {

    return (
        <div className='form-container'>
            <div className="inputs">
                <input type="text"  className="input-1" placeholder='Shut up'/>
                <input type="text" className="input-2" placeholder='and take my money!'/>
                <button className="new-meme-btn">Get a new meme image  🖼</button>
            </div>
        </div>
    )
}

export default MemeForm