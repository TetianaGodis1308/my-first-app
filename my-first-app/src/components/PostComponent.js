import './PostComponent.css'

export  const PostComponent = (props) => {
    return ( 
        <div className = 'main'>
            <img src= {props.className.author.photo} alt=" " className='photo'></img>
            <h2 className='author'>{props.className.author.name}</h2>
            <h3 className='nickname'>{props.className.author.nickname}</h3>
            <div className='date'>{props.className.date}</div>
            <p className='content'>{props.className.content}</p>
            <img className='image' src= {props.className.image} alt=" "></img>
        </div> 
    )
}