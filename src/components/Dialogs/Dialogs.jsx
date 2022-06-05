import cl from './Dialogs.module.css'

const Dialogs = (props)=>{
    return(
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog}>
                    Alexey
                </div>
                <div className={cl.dialog}>
                    Irina
                </div>
                <div className={cl.dialog}>
                    Sergey
                </div>
                <div className={cl.dialog}>
                    Ivan
                </div>
                <div className={cl.dialog}>
                    Alena
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>
                    Whats up
                </div>
                <div className={cl.message}>
                    Who are you?
                </div>
                <div className={cl.message}>
                    Shut up
                </div>
            </div>
        </div>
    )
}
export default Dialogs;