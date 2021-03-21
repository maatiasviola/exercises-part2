import './styles.css'

const Notification=({message,messageType})=>{
    if (message===null){
        return null
    }

    const className=messageType ? "success" : "error"
    return(
        <div className={className}>
            {message}
        </div>
    )
}

export default Notification;