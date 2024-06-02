import "./Testimonials.css"
import next_icon from "../edusity_assets/next-icon.png";
import back_icon from "../edusity_assets/back-icon.png";
import User_1 from "../edusity_assets/user-1.png";
import User_2 from "../edusity_assets/user-2.png";
import User_3 from "../edusity_assets/user-3.png";
import User_4 from "../edusity_assets/user-4.png";
import { useRef } from "react";
function Testimonials() {

    const slider = useRef();
    let tx = 0;
    const sliderForward = () => {
        if(tx > -50) {
         tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const sliderBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={sliderForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={sliderBackward}/>
      <div className="slider">
       <ul ref={slider}>
        <li>
         <div className="slide">
          <div className="user-info">
            <img src={User_1}/>
             <div>
              <h3>William Jackson</h3>
              <span>Edusity, USA</span>
             </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolor adipisci ipsam ipsa incidunt rerum, libero fuga recusandae atque voluptatibus magnam eligendi est provident qui suscipit quas architecto accusamus excepturi?</p>
         </div>
        </li>
        <li>
         <div className="slide">
          <div className="user-info">
            <img src={User_1}/>
             <div>
              <h3>William Jackson</h3>
              <span>Edusity, USA</span>
             </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolor adipisci ipsam ipsa incidunt rerum, libero fuga recusandae atque voluptatibus magnam eligendi est provident qui suscipit quas architecto accusamus excepturi?</p>
         </div>
        </li>
        <li>
         <div className="slide">
          <div className="user-info">
            <img src={User_3}/>
             <div>
              <h3>William Jackson</h3>
              <span>Edusity, USA</span>
             </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolor adipisci ipsam ipsa incidunt rerum, libero fuga recusandae atque voluptatibus magnam eligendi est provident qui suscipit quas architecto accusamus excepturi?</p>
         </div>
        </li>
        <li>
         <div className="slide">
          <div className="user-info">
            <img src={User_4}/>
             <div>
              <h3>William Jackson</h3>
              <span>Edusity, USA</span>
             </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolor adipisci ipsam ipsa incidunt rerum, libero fuga recusandae atque voluptatibus magnam eligendi est provident qui suscipit quas architecto accusamus excepturi?</p>
         </div>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Testimonials
