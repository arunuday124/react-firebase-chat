import { useEffect, useRef, useState } from "react";
import "./chat.css"
import Emojipicker from "emoji-picker-react";
const Chat = () => {
const[open,setOpen] = useState(false);
const[text,setText] = useState("");

const endRef = useRef(null);
useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"})
},[]);

const handleEmoji = e =>{
    setText((prev) => prev + e.emoji);
    setOpen(false)
};
  return (
    <div className='chat'>
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Lorem ipsum dolor sit, amet .</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
        </div>


        <div className="center">

            <div className="message own">
                 <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>       

             <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>            
            
            <div className="message own">
                 <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>            
            
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>            
            
            <div className="message own">
                <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>           
            
             <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>            
            
            <div className="message own">
                <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>            
            
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>

            <div className="message own">
                
                <div className="texts">
                    <img src="https://images.pexels.com/photos/3889661/pexels-photo-3889661.jpeg" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Explicabo minus dignissimos voluptate dolores praesentium 
                         corrupti quasi nesciunt totam quas dolorem fugiat fugit provident 
                         nihil temporibus tempore, veritatis recusandae, eaque magni.
                    </p>
                    <span>1 min ago</span>
                </div>
            </div>

           <div ref={endRef}></div>

        </div>


        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>


            <input type="text" placeholder=" Type a message...."
            value={text}
            onChange={(e) => setText(e.target.value)}/>


            <div className="emoji">
                <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
                
                <div className="picker">
                <Emojipicker open = {open} onEmojiClick={handleEmoji}/>
                </div>
            </div>
            <button className="sendButton">Send</button>
        </div>
        
    </div>

  )
}

export default Chat