import cl from "../Dialogs.module.css";

const MessageItems = (props) => {
    return(
        <div className={cl.message}>{props.message}</div>
    )
}
export default MessageItems;