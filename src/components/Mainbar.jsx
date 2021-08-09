import React,{useState} from 'react';
import '../index.css';
import { useRecoilState } from 'recoil';
import { chat } from './State'


const Mainbar = () => {
  const [message, setmessage] = useState("")
  const [friendChat,setFriendChat]= useRecoilState(chat)
  const handleSendMessage =()=> {
    const msgObj ={
      name:'you',
      msg:message,
      time:'19:46'
    }
    setFriendChat(data=>([...data, msgObj]))
    setmessage('')
  }
  
    return (
      <div className="container p-5">
        <div className="position-fixed top-20 chat-screen-box p-0">
            {friendChat.map( (item, index) =>{   
              return(
                <div className={`${item.name === "you" ? "mt-1 d-flex justify-content-end" : "mt-4 mb-3 d-flex justify-content-start"} p-1 `}>
                  <div className="force"
                  key={index}>{item.msg}</div>  
                </div>
            )})}
        </div>
        <div className="position-fixed bottom-0 top-90 chat-input-box">
           <form onSubmit={handleSendMessage}>
          <div className="input-group mb-2">
             <input type='text' className="form-control" placeholder="Type a message" value={message}
              aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={ (e) => setmessage(e.target.value)} />
             <button className="btn btn-outline-success lastpart" type="submit">Send</button>
          </div>
           </form>
        </div>
      </div>
    )
  }
  
  export default Mainbar
  
  //<span className="input-group-text bg-primary" id="basic-addon2">Send</span>