import React from 'react';


import memeData from '../meme-data'

const memesArray = memeData.data.memes


const MemeForm = () => {



    const [memeImage,setMemeImage] = React.useState('https://i.imgflip.com/9ehk.jpg');

    function randomMemeUrl(e) {
        e.preventDefault();
        let randomNum =  Math.floor(Math.random() * memesArray.length);

         setMemeImage(memesArray[randomNum].url);
    }

    return (
        <>
        <form className='form-container'>
            <div className="inputs">
                <input type="text"  className="input-1" placeholder='Shut up'/>
                <input type="text" className="input-2" placeholder='and take my money!'/>
                <button onClick={randomMemeUrl} className="new-meme-btn">Get a new meme image  🖼</button>
            </div>
        </form>

        <div className="meme-image-container">
         <img  src= {memeImage} alt="" className="da-image"/>
            <div className="meme-outputs">
                <p className='output-1'>SHUT UP</p>
                <p  className='output-2'>AND TAKE MY MONEY!</p>
            </div>
                 
        </div>
        </>
    )
}

export default MemeForm



{/* <div className="meme-image-container">
<div   style={{backgroundImage : `url(${memeImage})`}} alt="" className="da-image">
       <div className="meme-outputs">
           <p className='output-1'>SHUT UP</p>
           <p  className='output-2'>AND TAKE MY MONEY!</p>
       </div>
</div>
</div> */}