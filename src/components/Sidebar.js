import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import { friendList } from '../data'
import { chat } from './State'

const Sidebar = () => {
  const [index, setIndex] = useState()
  const handleChangeChat = (id) =>{
    const ch = friendList[id].chat
    setIndex(id)
    setFriendChat(ch)
  } 
  const [friendChat,setFriendChat]= useRecoilState(chat)
    return (
      <div>
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <svg className="bi me-2" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
          <span className="fs-5 fw-semibold">Friend List</span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
          {friendList.map((friend, ind) => (
          <a href="#" onClick={()=>handleChangeChat(ind)} className={`list-group-item list-group-item-action ${index === ind ?"active" :""} py-3 lh-tight`} aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{friend.name}</strong>
              <small>{friend.date}</small>
            </div>
            <div className="col-10 mb-1 small">{friend.chat[0].msg} {friend.chat[0].time}</div>
          </a>))}
        </div>
      </div>
    )
}

export default Sidebar
