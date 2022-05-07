function Meme(){
    return (
        <form className='meme'>
            <div className='meme-input-container'>
                <input type='text' placeholder="title" className='meme-input' />
                <input type='text' placeholder="body"  className='meme-input'/>
            </div>
           <button className='meme-btn'>Get a new meme image 🖼</button>
        </form>
    );
}
export default Meme;