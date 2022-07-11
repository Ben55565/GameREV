import React, { useContext } from "react";
import "./HomeCard.css";
import SavedContext from "../../SavedContext";

function HomeCard(props) {
  // const [clicked, setClicked] = useState(false);
  const { SavedList, setSavedList } = useContext(SavedContext);

  return (
    <div className="wrapper">
      <table className="card">
        <tbody>
          <tr>
            <td className="top-row">
              <img className="main-img" src={props.game.coverPhoto} alt="" />
            </td>

            <td className="summ">{props.game.summery}</td>
          </tr>
          <tr>
            <td>
              <p className="game-name">{props.game.name}</p>
            </td>
            <td className="btn">
              <button
                className="add"
                onClick={() => {
                  setSavedList([...SavedList, props.game]);
                }}
              >
                <span>Save To List</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomeCard;
