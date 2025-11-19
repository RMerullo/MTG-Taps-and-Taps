import './newplayer.css';
import { NavLink } from "react-router";

export default function NewPlayer() {
  return (<main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <input type="text" id="fname" name="firstname" placeholder="First name"></input>
        <input type="text" id="lname" name="lastname" placeholder="Last name"></input>
        <input type="text" id="email" name="email" placeholder="Email"></input>
        <input type="text" id="pn" name="pronouns" placeholder="Pronouns"></input>
      </div>
      <button className="view-players-button">View Players</button>
      <button className="save-button">Save</button>
      <NavLink to="/homepage"><button className="go-back-button">Go Back</button></NavLink>
    </div>
  </main>);
}