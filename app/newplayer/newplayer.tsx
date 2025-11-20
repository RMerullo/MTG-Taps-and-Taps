import './newplayer.css';
import { useState, type SetStateAction } from "react";

export default function NewPlayer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [displayMessageFlag, setDisplayMessageFlag] = useState(Boolean);

  return (<main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <input id="fname" placeholder="First name" value={firstName} onChange={handleFirstNameChange}></input>
        <input id="lname" placeholder="Last name" value={lastName} onChange={handleLastNameChange}></input>
        <input id="email" placeholder="Email" value={emailAddress} onChange={handleEmailAddressChange}></input>
        <input id="pn" placeholder="Pronouns" value={pronouns} onChange={handlePronounsChange}></input>
      </div>
      {displayMessageFlag ? (
        <p className="message-font">SAVED</p>
      ) : (
        <p className="message-font">SOME TEXT CHANGED</p>
      )}
      <button className="view-players-button">View Players</button>
      <button className="save-button" onClick={() => validateUser()}>Save</button>
      <button className="go-back-button">Go Back</button>
    </div>
  </main>);

  function handleFirstNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setFirstName(e.target.value);
    setDisplayMessageFlag(false);
  }

  function handleLastNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setLastName(e.target.value);
    setDisplayMessageFlag(false);
  }

  function handleEmailAddressChange(e: { target: { value: SetStateAction<string>; }; }) {
    setEmailAddress(e.target.value);
    setDisplayMessageFlag(false);
  }

  function handlePronounsChange(e: { target: { value: SetStateAction<string>; }; }) {
    setPronouns(e.target.value);
    setDisplayMessageFlag(false);
  }

  function validateUser() {
    console.log("validateUser function");
    // TODO - Query whatever database, checking to see if the email exists
    //         Convert email to lowercase.
    const isNewUser = true;
    setDisplayMessageFlag(true);
  }

  function viewPlayers() {
    // TODO - Fetch list of players from database and display
    console.log("viewPlayers function");
  }

}
