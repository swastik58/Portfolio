import React from 'react'
import { BsTwitter, BsInstagram, BsSpotify, BsYoutube, BsGithub} from 'react-icons/bs';
import { FaFacebook} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.facebook.com/swastik.supakar.58" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/a_wave_with_0_amplitude/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href="https://github.com/swastik58" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="https://open.spotify.com/user/4h0tl3w6vz5333qsdr1zbhtox" target="_blank" rel="noreferrer">
            <BsSpotify />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UCSEn5MQ1HUGWqme0YIxhA_w" target="_blank" rel="noreferrer">
            <BsYoutube />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/SwastikSupakar" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia