function Meme(){
    return (
        <div className='form'>
            <input type='text' placeholder="Top text" className='form-input' />
            <input type='text' placeholder="Bottom text"  className='form-input'/>
           <button className='form-btn'>Get a new meme image 🖼</button>
        </div>
    );
}
export default Meme;