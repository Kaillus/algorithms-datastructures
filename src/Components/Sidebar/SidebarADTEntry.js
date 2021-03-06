import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  top: {
    paddingLeft: theme.spacing(0),
  },
  list: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
  },
  listItems: {
    position: 'relative',
    marginTop: '0',
    marginBottom: '0',
  },
}));

export default function SidebarDSEntry() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.list}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Abstract Data Types" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} inset>
            <ListItemText primary="Queue" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Dictionary" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tree" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Map" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Priority Queue" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Set" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Graph" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
