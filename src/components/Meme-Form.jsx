import React from 'react';


import memeData from '../meme-data'

const memesArray = memeData.data.memes


const MemeForm = () => {



   // const [memeImage,setMeme] = React.useState('https://i.imgflip.com/9ehk.jpg');


    const [meme, setMeme] = React.useState(
        {   topText:"Shut up", 
            bottomText:'and take my money',
            randomImage : "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setMemeImage] = React.useState(memesArray )

    // function randomMemeUrl(e) {
    //     e.preventDefault();
    //     let randomNum =  Math.floor(Math.random() * memesArray.length);

    //      setMemeImage(memesArray[randomNum].url);
    // }

    function getMemeImage(e) {
        e.preventDefault();
        let randomNum =  Math.floor(Math.random() * allMemeImages.length);

        let newImage = allMemeImages[randomNum].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: newImage
            }
        })

    }

    function updateTopText(e) {
        console.log(e.target.value)
        setMeme((prevMeme) => (
            {
                ...prevMeme,
                topText: e.target.value
            }
        ))
    }

    function updateBottomText(e) {
        console.log(e.target.value)
        setMeme((prevMeme) => (
            {
                ...prevMeme,
                bottomText: e.target.value
            }
        ))


    }


    return (
        <>
        <form className='form-container'>
            <div className="inputs">
                <input type="text"  className="input-1" onChange={updateTopText} placeholder={meme.topText}/>
                <input type="text" className="input-2" onChange={updateBottomText} placeholder={meme.bottomText}/>
                <button onClick={getMemeImage} className="new-meme-btn">Get a new meme image  🖼</button>
            </div>
        </form>

        <div className="meme-image-container">
         <img  src= {meme.randomImage} alt="" className="da-image"/>
            <div className="meme-outputs">
                <p className='output-1'>{meme.topText}</p>
                <p  className='output-2'>{meme.bottomText}</p>
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