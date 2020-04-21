import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import pokeApi from '../../../services/pokeApi';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  const [ types, setTypes] = useState([]);

  useEffect(() =>{
    pokeApi.get('type')
    .then( response => {
        setTypes(response.data.results)
 
    })
  },[]);
   
  return (
    <div className={classes.root}>
      {types.map( type => (

          <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{(type.name).toUpperCase()}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Descriptions of types
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
       
       
    </div>
  );
}