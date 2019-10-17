import React from 'react';
import pic from '../images/twitter-sign.svg';

function Footer() {
    return(
        <footer class="footer is-info">
        <div class="content has-text-centered">
            <p>
                Created by Kristian.
            </p>
            <br />
            <div class="columns is-centered is-mobile">
                    <figure class="image is-128x128">
                        <img src={pic} className="logo"></img>
                    </figure>
            </div>
        </div>
      </footer>
    )
}

export default Footer;