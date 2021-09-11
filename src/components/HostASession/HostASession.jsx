import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './host.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';



function HostASession(props) {
   

    const [preferred_method, setPreferred_Method] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState(0)

    const dispatch = useDispatch();

    //enables history to move between pages
    const history = useHistory();

    console.log('preferred method', preferred_method);
    console.log('date', date);

    const handleSession = (event) => {
        event.preventDefault();
        if (preferred_method.length > 0 && date.length > 0 && time.length > 0 && address.length > 0 && numberOfPeople.length > 0) {
            //dispatch over to saga

            dispatch({
                type: 'ADD_HOST',
                payload: {
                    preferred_method: preferred_method,
                    date: date,
                    time: time,
                    address: address,
                    numberOfPeople: numberOfPeople,
                }
            })
            history.push('/Dashboard')
        }
        else alert('Please put valid data into all of the input feilds')
    
    }
   // end registerUser

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: 'teal',
            fontFamily: 'sans-serif'
        },
    }));

    
        const classes = useStyles();
    return (
        <>
        <h1>Host a Meditation Session</h1>
            <div className={classes.root}>

                <form onSubmit={handleSession}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Paper className={classes.paper}> I am interested in hosting <select
                            type="text"
                            name="preferred_method"
                            value={preferred_method}
                            required
                            onChange={(event) => setPreferred_Method(event.target.value)}>
                            <option defaultValue=""> Type of Session</option>
                            <option value="1">mindfulness meditation session</option>
                            <option value="2">spiritual meditation session</option>
                            <option value="3">focused meditation session</option>
                            <option value="4">movement meditation session</option>
                            <option value="5">mantra meditation session</option>
                            <option value="6">transcendental meditation session</option>
                            <option value="7">loving-kindness meditation session</option>
                            <option value="8">visualization meditation session</option>
                        </select>  
                         during 
                        <input
                            type="date"
                            name="date" 
                            value="2021-07-22"
                            min="2021-01-01" 
                            max="2022-12-31"
                            value={date}
                            required
                            onChange={(event) => setDate(event.target.value)}>
                        </input>
                         </Paper>
                
                    </Grid>
                   
                    <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <label for="time">Choose a time for your :</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    min="06:00"
                                    max="24:00"
                                    value={time}
                                    onChange={(event) => setTime(event.target.value)}
                                    required>
                                </input></Paper>
                    </Grid>
                    <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <label for="time">In Person or Virtual: </label>
                                <select
                                    type="test"
                                    name="location"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    required>
                                    <option defaultValue="">Choose one</option>
                                    <option value="1">In Person session</option>
                                    <option value="2">Virtual session</option>

                                </select></Paper>
                    </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <label for="number of people"> number of people able to attend: </label>
                                <select
                                    type="number"
                                    name="number of people"
                                    value={numberOfPeople}
                                    onChange={(event) => setNumberOfPeople(event.target.value)}
                                    required>
                                    <option defaultValue="">Number of people</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7 or more</option>
                                </select></Paper>
                            <Paper className={classes.paper}>
                                <Button type="submit" color="secondary">Submit</Button></Paper>
                        </Grid>
                </Grid>
                </form>
            </div>
       </>
    );
}

export default HostASession;