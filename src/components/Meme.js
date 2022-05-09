import React from 'react'
import memesData  from "../memesData";
function Meme(){

    const memesArray = memesData.data.memes

    const [memeImage, setMemeImage] = React.useState(memesArray[2].url);

    function getImage(){
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let imgUrl = memesArray[randomNumber].url;
        setMemeImage(imgUrl);
    }
    return (
        <>
        <div className='form'>
            <input type='text' placeholder="Top text" className='form-input' />
            <input type='text' placeholder="Bottom text"  className='form-input'/>
           <button className='form-btn' onClick={getImage}>Get a new meme image 🖼</button>
        </div>
        <img src={memeImage} alt="meme" className='meme-image'/>
        </>
    );
}
export default Meme;