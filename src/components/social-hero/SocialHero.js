import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faYoutube, faDiscord, faTelegram,faTiktok,faGithub } from '@fortawesome/free-brands-svg-icons'

function SocialHero() {


    return (
        <div className="container-cards">
               <div className="card">
               <div className="face face1">
                <div className="content">
                  <a target='_blank' rel="noreferrer" href='https://t.me/+HqqMjL35NgY1ZWI8'>  <div className="icon">
                    <FontAwesomeIcon icon={faTelegram} />
                    </div></a>
                </div>
            </div>
        </div>
          
     
        <div className="card">
            <div className="face face1">
                <div className="content">
                  <a target='_blank' rel="noreferrer" href='https://www.tiktok.com/@samerpro_'>  <div className="icon">
                    <FontAwesomeIcon icon={faTiktok} />
                    </div></a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                  <a target='_blank' rel="noreferrer" href='https://www.youtube.com/@SamerPro_'>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                    </div>
                  </a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                 <a target='_blank' rel="noreferrer" href='https://discord.gg/GxfAgbqMaZ'>
                 <div className="icon">
                    <FontAwesomeIcon icon={faDiscord} />
                    </div>
                 </a>
                </div>
            </div>
        </div>

      
        <div className="card">
            <div className="face face1">
                <div className="content">
                <a target='_blank' rel="noreferrer" href='https://x.com/sam__935'>
                <div className="icon">
                    <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                </a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <a target='_blank' rel="noreferrer" href='https://github.com/SamerPro-115'>
                <div className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    </div>
                </a>
                </div>
            </div>
        </div>
      
        
    </div>
    )
}


export default SocialHero