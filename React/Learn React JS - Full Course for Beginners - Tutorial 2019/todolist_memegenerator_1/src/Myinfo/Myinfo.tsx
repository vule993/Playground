import React from "react";
import styles from "./Myinfo.module.css";

const Myinfo: React.FC = () => {
  var phrase = "";
  const date = new Date();
  const time = date.getHours();

  //time of the day calculation
  if (time < 12) phrase = "morning";
  else if (time < 18) phrase = "afternoon";
  else phrase = "evening";

  return (
    <div className={styles.Myinfo} data-testid="Myinfo">
      <h1>Vukasin Radic</h1>
      <hr />
      <p>{`${date.toDateString()} Good ${phrase}!`}</p>
      <p>A passionate programmer who loves challenges</p>
      <h4>Vacation spots to visit:</h4>
      <ul>
        <li>Moscow</li>
        <li>Paris</li>
        <li>London</li>
      </ul>
    </div>
  );
};

export default Myinfo;
