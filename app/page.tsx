'use client'

import Image from "next/image"
import tomsialogo from "./../public/assets/images/tomsialogo.png"
import instalogo from "./../public/assets/images/insta.png"
import linkedinlogo from "./../public/assets/images/linkedin.png"
import fblogo from "./../public/assets/images/facebook.png"
import founderimg from "./../public/assets/images/founderimage.jpg"
import htmllogo from "./../public/assets/images/html5.png"
import csslogo from "./../public/assets/images/css3.png"
import javascriptlogo from "./../public/assets/images/javascript.png"
import figmalogo from "./../public/assets/images/figma.png"
import githublogo from "./../public/assets/images/github.png"
import reactlogo from "./../public/assets/images/atom.png"
import nextjslogo from "./../public/assets/images/nextjs.png"
import nodejslogo from "./../public/assets/images/nodejs.png"
import tailwindlogo from "./../public/assets/images/windy.png"
import webdesignlogo from "./../public/assets/images/webdesign.png"
import rightuparrow from "./../public/assets/images/rightuparrow.png"
import forwardarrow from "./../public/assets/images/arrow-forward.png"
import styles from "./styles.module.css"
import { useState } from "react"
import CircularText from "./circulartext"
import Carousel from "./carousel"
import Link from "next/link"

export default function Nav() {
  function moveScript() {
    window.scrollTo({
      top:4315,
      behavior: "smooth"
    })
  }
  
  return <div>
    <nav id="home">
      <div className={styles.sidenav}>
      <Image src={tomsialogo} alt="logo" width={80} height={80} />
      <div className={styles.iconnav}>
      <a href="https://www.instagram.com/tomsi21_/" target="_blank"><Image className={styles.iconnavimages} src={instalogo} alt="logo" width={20} height={20} /></a>
      <a href="https://www.linkedin.com/in/tom-siackhasone-4a20b7249/" target="_blank"><Image className={styles.iconnavimages} src={linkedinlogo} alt="logo" width={20} height={20} /></a>
      <a href="https://www.facebook.com/tom.si.357/" target="_blank"><Image className={styles.iconnavimages} src={fblogo} alt="logo" width={20} height={20} /></a>
      </div>
      </div>
    
      <ul className={styles.topnav}>
      <a href="#home"><li>Home</li></a>
      <a href="#about"><li>About</li></a>
      <a href="#work"><li>Work</li></a>
      <li><span className={styles.highlight} onClick={moveScript}>Contact Us</span></li>
      </ul>
      <div className={styles.herohead}>
      <h1><span className={styles.herohead1}>Your future</span></h1>
      <h1>Web Developer</h1>
        </div>
        <div className={styles.moretab}>
          <span className={styles.textring}>
            <CircularText text="Get in touch - Discover more -" radius={40}/>
            <Image className={styles.textringimg} src={forwardarrow} onClick={moveScript} alt="logo" width={100} height={100} />
          </span>
        </div>
    </nav>
    <div id="about" className={styles.wearesection}>
      <div className={styles.wearetext}>
      <h2 className={styles.wearehead}>We're TomSiaDevelopments, a web development agency.</h2>
      <p>We weave the web like artisans of the digital age, crafting experiences where design meets destiny. Each website we create is a living story — a symphony of elegance, innovation, and purpose. Guided by creativity and grounded in precision, we transform visions into vibrant realities, shaping online worlds where brands breathe, grow, and inspire. In every pixel and every line of code, there is poetry — and it is written for you.</p>
      <br></br><p>I'm Tom Sia, founder of TomSiaDevelopments. I didn’t start this company just to build websites — I started it to create something real. Every project is a piece of someone's dream, and I treat it like it’s my own. We pour heart, soul, and serious craft into every line of code and every design. This isn’t just work for me — it’s a passion, and it’s personal.</p>
      </div>
      <div className={styles.foundimg}>
        <Image className={styles.foundersimg} src={founderimg} alt="founder"/>
        <h3>Tom Sia</h3>
        <p>Founder Of TomSiaDevelopments</p>
      </div>
    </div>
    <div className={styles.whatwedo}>
      <div className={styles.whatwedotext}>
      <h2><span className={styles.yellow}>What</span> We Do</h2>
      <p>Custom designed, custom coded and powered by the world’s most popular content management system, your website will look great and be easy to manage.</p>
      <ul className={styles.wwdul1}>
        <span className={styles.first}><Image className={styles.wwdimg} src={htmllogo} alt="html3 logo"/>HTML5</span>
        <li><Image className={styles.wwdimg} src={csslogo} alt="html3 logo"/>CSS3</li>
        <li><Image className={styles.wwdimg} src={javascriptlogo} alt="html3 logo"/>JavaScript</li>
        <li><Image className={styles.wwdimg} src={figmalogo} alt="html3 logo"/>Figma</li>
        <li><Image className={styles.wwdimg} src={figmalogo} alt="html3 logo"/>GitHub</li>
        <li><Image className={styles.wwdimg} src={reactlogo} alt="html3 logo"/>React</li>
        <li><Image className={styles.wwdimg} src={nextjslogo} alt="html3 logo"/>NextJS</li>
        <li><Image className={styles.wwdimg} src={nodejslogo} alt="html3 logo"/>NodeJS</li>
        <li><Image className={styles.wwdimg} src={tailwindlogo} alt="html3 logo"/>TailWind</li>
        <li><Image className={styles.wwdimg} src={webdesignlogo} alt="html3 logo"/>Web Design</li>
      </ul>
      </div>
    </div>
        <div id="work" className={styles.projectsection}>
          <div className={styles.projecttext}>
            <h2>Projects we're proud to have been be apart of</h2>
            <p>Each project is a reflection of our craft and care — tailored, intentional, and built to last. Here’s a glimpse into the work we’ve brought to life with our clients: thoughtful design, seamless functionality, and stories told through code.</p>
          </div>
          <div className={styles.projectcontainer}>
            <div className={styles.projectcardL}>
              <div className={styles.projectimg}>
              </div>
              <div className={styles.projectcardtext}>
                <div className={styles.projectcardusage}>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={htmllogo} alt="html3 logo"/>HTML5
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={csslogo} alt="html3 logo"/>CSS3
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={javascriptlogo} alt="html3 logo"/>JavaScript
                  </span>
                </div>
                <h3>Upcoming Project 1</h3>
                <p>Lorem ipsum dolor sit apmet Lorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmet</p>
                <span className={styles.seemore}>
                  <p>See More</p>
                  <Image className="float-left mt-2" src={rightuparrow} alt="right up arrow" width = {14}/>
                </span>
              </div>
            </div>
            <div className={styles.projectcardR}>
            <div className={styles.projectimg}>
              </div>
              <div className={styles.projectcardtext}>
                <div className={styles.projectcardusage}>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={htmllogo} alt="html3 logo"/>HTML5
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={csslogo} alt="html3 logo"/>CSS3
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={javascriptlogo} alt="html3 logo"/>JavaScript
                  </span>
                </div>
                <h3>Upcoming Project 2</h3>
                <p>Lorem ipsum dolor sit apmet Lorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmet</p>
                <span className={styles.seemore}>
                  <p>See More</p>
                  <Image className="float-left mt-2" src={rightuparrow} alt="right up arrow" width = {14}/>
                </span>
              </div>
            </div>
            <div className={styles.projectcardL}>
              <div className={styles.projectimg}>
              </div>
              <div className={styles.projectcardtext}>
                <div className={styles.projectcardusage}>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={htmllogo} alt="html3 logo"/>HTML5
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={csslogo} alt="html3 logo"/>CSS3
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={javascriptlogo} alt="html3 logo"/>JavaScript
                  </span>
                </div>
                <h3>Upcoming Project 3</h3>
                <p>Lorem ipsum dolor sit apmet Lorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmet</p>
                <span className={styles.seemore}>
                  <p>See More</p>
                  <Image className="float-left mt-2" src={rightuparrow} alt="right up arrow" width = {14}/>
                </span>
              </div>
            </div>
            <div className={styles.projectcardR}>
            <div className={styles.projectimg}>
              </div>
              <div className={styles.projectcardtext}>
                <div className={styles.projectcardusage}>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={htmllogo} alt="html3 logo"/>HTML5
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={csslogo} alt="html3 logo"/>CSS3
                  </span>
                  <span className={styles.projectcardlang}>
                  <Image className={styles.wwdimg} src={javascriptlogo} alt="html3 logo"/>JavaScript
                  </span>
                </div>
                <h3>Upcoming Project 4</h3>
                <p>Lorem ipsum dolor sit apmet Lorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmetLorem ipsum dolor sit apmet</p>
                <span className={styles.seemore}>
                  <p>See More</p>
                  <Image className="float-left mt-2" src={rightuparrow} alt="right up arrow" width = {14}/>
                </span>
              </div>
            </div>
          <span className={styles.allprojects}>See All Projects</span>
        </div>
        <div className={styles.teamextension}>
          <div className={styles.teamtext}>
            <h2>We see ourselves as an extension of <span className={styles.yellow}>your team</span></h2>
            <p>Committing totally to the project at hand, we bring our team values with us, pursuing excellence and creating value through collaboration and respect.</p>
          </div>
          <div className={styles.teamscon}>
            <div>Upcoming</div>
            <div>Upcoming</div>
            <div>Upcoming</div>
            <div>Upcoming</div>
            <div>Upcoming</div>
            <div>Upcoming</div>
          </div>
        </div>
        <div className={styles.contactsection}>
          <div className={styles.contacttext}>
            <h2>Be brave, tell your story, let’s create something worthy of <span className={styles.yellow}>attention</span></h2>
          </div>
          <form className={styles.contactform}>
            <label>Name*</label><br></br>
            <input type="text required"></input>
            <label>Company</label><br></br>
            <input type="text"></input>
            <label>Email*</label><br></br>
            <input type="email required"></input>
            <label>Phone Number</label><br></br>
            <input type="number"></input>
            <label>How can we help?*</label><br></br>
            <textarea></textarea>
            <p>This site is protected by reCaptcha and the Google Privacy Policy and Terms of Service apply</p>
            <button type="submit">Get In Touch</button>
          </form>

        </div>
        <div className={styles.reviewsection}>
        <h2>What our <span className={styles.yellow}>clients say</span></h2>
          <Carousel />
        </div>
        <div className={styles.getstartedsection}>
          <div className={styles.getstartedbox}>
            <div className={styles.getstartedtext}>
              <h2>Want to get a project started?</h2>
              <p>Elegant. Bespoke. Unforgettable. Let’s craft a website that speaks volumes—without saying a word.</p>
            </div>
            <button className={styles.getstartedbutton} onClick={moveScript}>Let's Get Started</button>
          </div>
        </div>
        <div className={styles.getintouch}>
          <div className={styles.getintouchtext}>
            <h3>Get In Touch</h3>
            <p>Come and contact me about Jobs, Questions or if you just want to have a chat withme, I’ll try my best to respoond ASAP</p>
            <button type="button" onClick={moveScript}>Let's Get Started</button>
          </div>
          <div className={styles.getintouchemail}>
            <h4>tomsiadevelopm</h4>
            <h4>ents@gmail.com</h4>
          </div>
          <h5>© 2025 tomsiadevelopments. All rights reserved.</h5>
        </div>
      
</div>
</div>

}
