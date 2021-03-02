import React from 'react';
import './App.css';
import SearchContactCard from './components/SearchContactCard';

export default function App() {
  const user = {
    "userId": 1234,
    "fullName": "Gina Snelly",
    "profileImageUrl": "https://randomuser.me/api/portraits/women/55.jpg",
    "trust": 75
  }

  return (
    <div className="App">
      <SearchContactCard 
        userId={user.userId}
        fullName={user.fullName}
        profileImageUrl={user.profileImageUrl}
        trust={user.trust}
      />
    </div>
  );
}
