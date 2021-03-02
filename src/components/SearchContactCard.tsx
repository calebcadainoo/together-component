import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import './SearchContactCard.css';

interface ContactProps {
  userId: number,
  fullName: string,
  profileImageUrl: string,
  trust:number
}

export default function SearchContactCard(props: ContactProps) {
  return (
    <div key={props.userId} className="search-contact">
      <section className="contact-container">
        <div className="contact-inner">
          <div className="contact-avatar-box">
            <div>
              <div className="contact-avatar-art">
                <Avatar className="contact-avatar" src={props.profileImageUrl} />
              </div>
              <div className="contact-trust">
                <div>{props.trust}</div>
              </div>
            </div>

            <div className="contact-details">
              <h3>{props.fullName}</h3>
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
  );
}
