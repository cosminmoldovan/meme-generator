/**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
*/
import memesData  from "../memesData";
function Meme(){
    function getImage(){
        let randomNum = Math.floor(Math.random() * 101);
        let imgUrl = memesData.data.memes[randomNum].url;
        console.log(imgUrl);
    }
    return (
        <div className='form'>
            <input type='text' placeholder="Top text" className='form-input' />
            <input type='text' placeholder="Bottom text"  className='form-input'/>
           <button className='form-btn' onClick={getImage}>Get a new meme image 🖼</button>
        </div>
    );
}
export default Meme;