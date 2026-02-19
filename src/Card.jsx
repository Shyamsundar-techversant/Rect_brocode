import profilePic from './assets/cr7.png';
function Card(){
    return (
        <div className="card">
            <img src={profilePic} alt="Shyam profile img" className='profileImg'/>           
            <h2>Shyam</h2>
            <p>Software developer.</p>
        </div>
    )
}
export default Card;