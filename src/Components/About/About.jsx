import './About.css';
import  About_img from '../edusity_assets/collage_tumbnail.png';
import play_icon from '../edusity_assets/play-icon.png';

function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={About_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurtuing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni beatae ab et animi itaque, sed corporis expedita ratione odit laborum fugit deleniti dolorem a voluptates, esse illum eaque nemo iusto optio cupiditate in laboriosam voluptatum tempora. Sed, officia? Ipsum cum laudantium, doloremque fuga quasi dicta doloribus ratione quibusdam similique.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veniam, ducimus error quod minima libero dolor laudantium quis, nobis dolorem iusto ullam doloremque sapiente alias, corrupti deserunt debitis quaerat at.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure tenetur corporis voluptatibus doloribus magnam dicta corrupti, molestiae magni quos sint neque repellat, eos minima. Sequi ut voluptate, numquam necessitatibus, obcaecati mollitia et sapiente eum vel quidem, ratione quos vero?</p>

      </div>
    </div>
  )
}

export default About
