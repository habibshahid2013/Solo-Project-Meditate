import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./editpage.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { Filter } from "@material-ui/icons";

function EditPage() {

  
  const { id } = useParams();

  const host = useSelector(store => store.hostReducer).filter(session => session.id == id)
 

  const [preferred_method, setPreferred_Method] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  

  const dispatch = useDispatch();

  //
  useEffect(() => {
    dispatch({
      type: "FETCH_ID",
      payload: id
    })
  }, [])
  //enables history to move between pages
  const history = useHistory();

  console.log("preferred method", preferred_method);
  console.log("date", date);

  const handleSession = (event) => {
    event.preventDefault();
    //  if (preferred_method.length > 0 && date.length > 0 && time.length > 0 && address.length > 0 && numberOfPeople.length > 0) {
    //dispatch over to saga

    console.log('calling host', host);
    dispatch({
      type: "EDIT",
      payload: {
        id: id,
        preferred_method: preferred_method,
        date: date,
        time: time,
        address: address,
        numberOfPeople: numberOfPeople,
      },
    });
    history.push("/Dashboard");
    // }
    //     else alert('Please put valid data into all of the input feilds')
  };
  // end registerUser

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "olive",
      fontFamily: "sans-serif",
    },
  }));

  const classes = useStyles();
  return ( 
    
    <>
      <h1>Edit Session</h1>
      <div className={classes.root}>
        { host.length > 0 &&
        <form onSubmit={handleSession}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            </Grid>
             <Grid item xs={4}>
              <Paper className={classes.paper}>
                <label>
                I am interested in hosting</label>
                <select
                  type="text"
                  name="preferred_method"
                  value={preferred_method}
                  required
                  onChange={(event) => setPreferred_Method(event.target.value)}
                >
                  <option defaultValue=""> Type of Session</option>
                  <option value="mindfulness meditation session">
                    mindfulness meditation session
                  </option>
                  <option value="spiritual meditation session">
                    spiritual meditation session
                  </option>
                  <option value="spiritual meditation session">
                    focused meditation session
                  </option>
                  <option value="movement meditation session">
                    movement meditation session
                  </option>
                  <option value="mantra meditation session">
                    mantra meditation session
                  </option>
                  <option value="transcendental meditation session">
                    transcendental meditation session
                  </option>
                  <option value="loving-kindness meditation session">
                    loving-kindness meditation session
                  </option>
                  <option value="visualization meditation session">
                    visualization meditation session
                  </option>
                </select>
               <label className="font"> during </label>
                <input
                  type="date"
                  name="date"
                  value="2021-07-22"
                  min="2021-01-01"
                  max="2022-12-31"
                  value={date}
                  required
                  onChange={(event) => setDate(event.target.value)}
                ></input>
              </Paper>
               <Paper className={classes.paper}>
                <label  className="font" for="time">Choose a time for your :</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  min="06:00"
                  max="24:00"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                ></input>
              </Paper>
              <Paper className={classes.paper}>
                <label  className="font" for="time">In Person or Virtual: </label>
                <select
                  type="test"
                  name="location"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  required
                >
                  <option defaultValue="">Choose one</option>
                  <option value="In Person session">In Person session</option>
                  <option value="Virtual session">Virtual session</option>
                </select>
              </Paper>
               <Paper className={classes.paper}>
                <label className="font"for="number of people">
                  
                  number of people able to attend:
                </label>
                <select
                  type="number"
                  name="number of people"
                  value={numberOfPeople}
                  onChange={(event) => setNumberOfPeople(event.target.value)}
                  required
                >
                  <option defaultValue="">Number of people</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7 or more</option>
                </select>
              </Paper>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
             
              <Paper className={classes.paper}>
                <Button  type="submit"  color="success" size="large"  variant="contained">
                  Submit
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </form>
        }
      </div>
    </>
  );
}

export default EditPage;
