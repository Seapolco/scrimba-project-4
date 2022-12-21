import React, {useEffect, useState} from 'react';


// import memeData from '../meme-data'

// const memesArray = memeData.data.memes


const MemeForm = () => {



   // const [memeImage,setMeme] = React.useState('https://i.imgflip.com/9ehk.jpg');


    const [meme, setMeme] = useState(
        {   topText:"Shut up", 
            bottomText:'and take my money',
            randomImage : 'https://i.imgflip.com/9ehk.jpg'
        }
    )

    const [allMemeImages, setMemeImages] = useState([])


    function getMemeImage(e) {

        e && e.preventDefault();
        let randomNum =  Math.floor(Math.random() * allMemeImages.length);

        let newImage = allMemeImages[randomNum].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: newImage
            }
        })

    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
            const memesArray = data.data.memes;
            // let randomNum =  Math.floor(Math.random() * allMemeImages.length);
            // let newImage = memesArray[randomNum].url
           
            setMemeImages(memesArray)
            
        
        })
        
    },[])



    function updateText(e) {
        const {name, value} = e.target;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

   

    return (
        <>
        <form className='form-container'>
            <div className="inputs">
                <input name='topText' value={meme.topText} id="1" type="text"  className="input-1" onChange={updateText} placeholder={meme.topText}/>
                <input name='bottomText' value={meme.bottomText } id="2" type="text" className="input-2" onChange={updateText} placeholder={meme.bottomText}/>
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