let initState ={
    friends:
        [{id:1, name:'Alexey'},
            {id:2, name:'Irina'},
            {id:3, name:'Sergey'},
            {id:4, name:'Ivan'},
            {id:5, name:'Alena'}
        ],
}
const usersReducer = (state= initState.friends, action) => {
            return state;
}
export default usersReducer;