import {useState, useEffect} from 'react'
export default function Api() {
    const mainButonStye = {
        margin: "0 auto",
        width:'600x'

    }

    const [fetchedKeyWord , tabbingfatch] = useState('posts'),
     [initialData, dataInit] = useState([]);
    useEffect(()=>{;
        fetch(`https://jsonplaceholder.typicode.com/${fetchedKeyWord}`)
  .then(response => response.json())
  .then(json => dataInit(json))
    
    },[fetchedKeyWord])
    return(<div>
<div className='mainbutton' style={mainButonStye}>
    <button onClick={()=>tabbingfatch('posts')}>posts</button>
    <button onClick={()=>tabbingfatch('comments')}>Comments</button>
    <button onClick={()=>tabbingfatch('users')}>Users</button>
</div>
        <p>{JSON.stringify(initialData)}</p>
    </div>)

}

