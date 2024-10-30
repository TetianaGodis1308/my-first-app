import styles from './MyFirstComponent.css'

 const MyFirstComponent = (props) => {
    console.log("1:", props);
    console.log("2:", props.className)
    return (
        <div className='back'>
        <h2 className={[styles['hello'],props.className].join(' ')}>Hello~</h2>
        </div>
    )
}

export default MyFirstComponent