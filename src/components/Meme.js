import React from 'react'
import memesData  from "../memesData";
function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    return (
        <>
        <div className='form'>
            <input type='text' placeholder="Top text" className='form-input' />
            <input type='text' placeholder="Bottom text"  className='form-input'/>
           <button className='form-btn' onClick={getImage}>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">One does not simply</h2>
                <h2 className="meme-text bottom">Walk into Mordor</h2>
        </div>
        </>
    );
}
export default Meme;