import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-solid-svg-icons';

function SocialIcon(){
    return(
        <div>
             <a href="#"><FontAwesomeIcon icon={faTwitter} /></a> <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
    );
}

export default SocialIcon;