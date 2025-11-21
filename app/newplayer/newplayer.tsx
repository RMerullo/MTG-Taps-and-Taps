import './newplayer.css';
import { useEffect, useState, type SetStateAction } from "react";

export default function NewPlayer() {
  useEffect(() => {
    // This function will run only once after the initial render
    console.log('Loaded newplayer');
    setSaveButtonDisabledFlag(true);
  }, []); // Empty dependency array ensures it runs only once

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [displayMessageFlag, setDisplayMessageFlag] = useState(Boolean);
  const [saveButtonDisabledFlag, setSaveButtonDisabledFlag] = useState(false);

  return (<main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <input id="fname" placeholder="First name" value={firstName} onChange={handleFirstNameChange}></input>
        <input id="lname" placeholder="Last name" value={lastName} onChange={handleLastNameChange}></input>
        <input id="email" placeholder="Email" value={emailAddress} onChange={handleEmailAddressChange}></input>
        <input id="pn" placeholder="Pronouns" value={pronouns} onChange={handlePronounsChange}></input>
        <div className="button-container">
          <button className="go-back-button">Go Back</button>
          <button className="save-button" onClick={() => validateUser()} disabled={saveButtonDisabledFlag}>Save</button>
        </div>
      </div>
      {displayMessageFlag ? (
        <p className="message-font">SAVED</p>
      ) : (
        <p className="message-font">SOME TEXT CHANGED</p>
      )}
    </div>
  </main>);

  function handleFirstNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setFirstName(e.target.value);
    setDisplayMessageFlag(false);
    toggleSaveButtonDisabled();
  }

  function handleLastNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setLastName(e.target.value);
    setDisplayMessageFlag(false);
    toggleSaveButtonDisabled();
  }

  function handleEmailAddressChange(e: { target: { value: SetStateAction<string>; }; }) {
    setEmailAddress(e.target.value);
    setDisplayMessageFlag(false);
    toggleSaveButtonDisabled();
  }

  function handlePronounsChange(e: { target: { value: SetStateAction<string>; }; }) {
    setPronouns(e.target.value);
    setDisplayMessageFlag(false);
    toggleSaveButtonDisabled();
  }

  function validateUser() {
    console.log("validateUser function");
    // TODO - Query whatever database, checking to see if the email exists
    //         Convert email to lowercase.
    const isNewUser = true;
    setDisplayMessageFlag(true);
  }

  function toggleSaveButtonDisabled(){
    console.log("toggleSaveButtonDisabled function");
    console.log("First Name = " + firstName);
    console.log("Last Name = " + lastName);
    console.log("Email = " + emailAddress);
    console.log("pronouns = " + pronouns);
    if((firstName != null && firstName != "") && (lastName != null && lastName != "") && 
       (emailAddress != null && emailAddress != "") &&(pronouns != null && pronouns != "")){
        console.log("ENABLED SAVE");
        setSaveButtonDisabledFlag(false);
       } else {
        console.log("DISABLED SAVE");
        setSaveButtonDisabledFlag(true);
       }
  }

}
