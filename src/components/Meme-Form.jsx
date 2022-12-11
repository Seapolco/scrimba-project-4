import React from 'react';


const MemeForm = () => {

    const logCon = (e) => {
        e.preventDefault();
        console.log('clicked!')
    }

    return (
        <form className='form-container'>
            <div className="inputs">
                <input type="text"  className="input-1" placeholder='Shut up'/>
                <input type="text" className="input-2" placeholder='and take my money!'/>
                <button onClick={logCon} className="new-meme-btn">Get a new meme image  🖼</button>
            </div>
        </form>
    )
}

export default MemeForm