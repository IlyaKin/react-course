import cl from './Content.module.css'

const Content = ()=>{
    return(
            <div className={cl.content}>
                <img src="https://klike.net/uploads/posts/2019-06/1561526578_1.jpg" alt=""/>
                <div className={cl.item}>
                    Posts
                </div>
            </div>
    )
}
export default Content;