import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase';
import './dashboard.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Dashboard() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const host = useSelector((store) => store.hostReducer)
    console.log('host reducer', host);

    //Set up for the history
    const history = useHistory();

    //Set up for the dispatch
    const dispatch = useDispatch();

    //UseEffect is needed to run Fetch_DETAILS within component 
    useEffect(() => {
        dispatch({ type: 'FETCH_HOST' });
    }, []);


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));

    function hostASession() {
        history.push('/hostasession')
    }


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Dashboard</h1>
            <Paper className={classes.paper}>
                <h2>Mediatation Session</h2>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm container>
                        <table>
                            <thead>
                                <tr>
                                    <th>Host</th>
                                    <th>Type of Meditation</th>
                                    <th> Date</th>
                                    <th>Time</th>
                                    <th>Number of Attendees</th>
                                </tr>
                            </thead>
                            <tbody>
                                {host.map(session => (
                                    <tr>
                                        <th scope="row">{session.id}</th>
                                        <td><button>edit</button></td>
                                        <td>{session.preferred_method}</td>
                                        <td>{session.date}</td>
                                        <td>{session.time}</td>
                                        <td>{session.numberOfPeople}</td>
                                        <td>{session.time}</td>
                                        <td><button>delete</button></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </Grid>
                </Grid>
            </Paper>
            <Button onClick={hostASession} variant="contained" color="primary"> Host A Session</Button>
        </div>
    )
}

export default Dashboard;