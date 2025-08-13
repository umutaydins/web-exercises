


function ProfilePicture() {
    
    const imageUrl = './src/assets/j.jpg';
    const handleClick = (e) => e.target.style.display = "none";


    return (
        <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="x" />
    )

}export default ProfilePicture