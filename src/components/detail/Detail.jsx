import { auth } from "../../lib/firebase"
import "./detail.css"
const Detail = () => {
  return (
    <div className='detail'>


      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2> Jane Doe</h2>
        <p>Lorem ipsum dolor sit, amet.</p>
      </div>


      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privecy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

      <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt=""  />
          </div>

          <div className="photos">
            <div className="photoItem">
            
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/3889661/pexels-photo-3889661.jpeg" alt="" />
                <span>photo_2024_25.png</span>
              </div>
                <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
            
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/3889661/pexels-photo-3889661.jpeg" alt="" />
                <span>photo_2024_25.png</span>
              </div>
                <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
            
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/3889661/pexels-photo-3889661.jpeg" alt="" />
                <span>photo_2024_25.png</span>
              </div>
                <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
            
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/3889661/pexels-photo-3889661.jpeg" alt="" />
                <span>photo_2024_25.png</span>
              </div>
                <img src="./download.png" alt=""  className="icon"/>
            </div>

            
        </div>
      </div>



        <div className="option">
          <div className="title">
            <span>shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>Log Out</button>

      </div>
    </div>
  )
}

export default Detail