import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SubjectIcon from '@material-ui/icons/Subject';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    marginBottom: 50,
    marginTop: 20
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<TagFacesIcon />} label="POKEMON" />
        <Tab icon={<SubjectIcon />} label="TYPE" />
         
      </Tabs>
    </Paper>
  );
}