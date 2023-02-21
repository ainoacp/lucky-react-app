import React from 'react'
import {EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from "react-share";
import './ShareButton.scss'

const ShareButton = () => {
  return (<>
   
    <div className="con">
    <div>
        <div className="con__logo"><FacebookShareButton url="https://adopcionanimal.es/"><FacebookIcon/></FacebookShareButton></div>
        <div className="con__logo"><WhatsappShareButton  url="https://adopcionanimal.es/"><WhatsappIcon round={true}/></WhatsappShareButton></div>
    </div>  
        <div>
            <div className="con__logo"><EmailShareButton 
                                    url="https://adopcionanimal.es/"
                                    subject="Salva vidas, adopta"
                                    body="Reenvia esto a 1000 contactos..."
                                    >
                                    <EmailIcon round={true} iconFillColor={'black'}/></EmailShareButton></div>
            <div className="con__logo"><TwitterShareButton
                                     url="https://adopcionanimal.es/"
                                     title="Adopta"
                                    hashtags={"#maltrato, #salvameSalvate"}
                                    related= {"elXonclas"}
                                     >
                                     <TwitterIcon borderRadius={23}/></TwitterShareButton></div>
        </div>
    </div>
    </>)
}

export default ShareButton