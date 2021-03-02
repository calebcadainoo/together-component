import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import './SearchContactCard.css'

export default function SearchContactCard() {
  const user = {
    "userId": 1234,
    "fullName": "Gina Snelly",
    "profileImageUrl": "https://randomuser.me/api/portraits/women/55.jpg",
    "trust": 75
  }

  return (
    <div className="search-contact">
      <section className="contact-container">
        <div className="contact-inner">
          <div className="contact-avatar-box">
            <div>
              <div className="contact-avatar-art">
                <Avatar className="contact-avatar" src={user.profileImageUrl} />
              </div>
              <div className="contact-trust">
                <div>{user.trust}</div>
              </div>
            </div>

            <div className="contact-details">
              <h3>Gina Snelly</h3>
              <div className="contact-status">
                nessuna connessione
              </div>
          </div>
          </div>

          <IconButton>
            <div className="contact-btn-add soft-back">
             <Add />
            </div>
          </IconButton>
        </div>
        <div className="contact-extras soft-back">
          Sta già condividendo <u><b>Disney Plus</b></u>
        </div>
      </section>
    </div>
  )
}
