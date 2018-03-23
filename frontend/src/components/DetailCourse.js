import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Divider } from 'material-ui';
import SchoolIcon from 'material-ui-icons/School';
import AssignmentIcon from 'material-ui-icons/Assignment';
import CloseIcon from 'material-ui-icons/Close';
import UpdateIcon from 'material-ui-icons/Update';
import PeopleIcon from 'material-ui-icons/People';
import lightBlue from 'material-ui/colors/lightBlue';
import moment from 'moment';
import { apiRoute, testTokenProf } from '../config/routes';


const styles = theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        margin: 10,
      },
      blueAvatar: {
        margin: 10,
        cursor: 'pointer',
        color: '#fff',
        backgroundColor: lightBlue[500],
      },
      redAvatar: {
        margin: 10,
        cursor: 'pointer',
        color: '#fff',
        backgroundColor: '#F44336',
      },
      row: {
        display: 'flex',
        justifyContent: 'center',
      },
  });
  
class DetailCourses extends PureComponent {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    state = {
        open: false,
        memberDetail: {}
    }
    handleClickOpen = (param, e) => {
        this.setState({ 
          open: true,
          memberDetail: param 
        });
      };
    
    handleClose = () => {
    this.setState({ open: false });
    };

    render() {
        const {classes} = this.props;
        return (
            <div 
            style={{
                marginTop: '10px'
                }} 
            className={classes.root}>
              <List>
              <ListItem>
                  <Avatar>
                    <AssignmentIcon />
                  </Avatar>
                  <ListItemText primary="Nom du cours" secondary={this.props.cours.title} />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <SchoolIcon />
                  </Avatar>
                  <ListItemText primary="Professeur responsable" secondary={this.props.cours.teacher} />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <UpdateIcon />
                  </Avatar>
                  <ListItemText primary="Dates" 
                  secondary={`le ${moment(this.props.cours.start_time).format('DD/MM')} 
                  de ${moment(this.props.cours.start_time).format('HH:mm')} à 
                  ${moment(this.props.cours.end_time).format('HH:mm')} `} />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <PeopleIcon />
                  </Avatar>
                  <ListItemText primary="Elèves" secondary="Liste des élèves associé à ce cours" />
                </ListItem>

              </List>
              <div className={classes.row}>
      { this.props.cours.attendees ? 
                this.props.cours.attendees.map(e => 
                  // fetch(`${apiRoute.linkapp}/pictures/file/${e.username}`, {
                  //   method: 'GET',
                  //   headers : { 
                  //     'Authorization': testTokenProf.access_token
                  //    }
                  // })
                  // .then((response) => console.log(response) || response.json() )
                  // .then(data => {
                  //   console.log(data);
                  // })
                  <Avatar 
                  key={e._id}
                  className={e.ishere ? classes.blueAvatar : classes.redAvatar } 
                  onClick={this.handleClickOpen.bind(this, e)}>
                  { e.username ? e.username.substring(0,1).toUpperCase() : '' }
                  </Avatar> 
                )
                : '' }
    </div>
              <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                { this.state.memberDetail.firstname && this.state.memberDetail.lastname ? 
                  `${this.state.memberDetail.firstname} ${this.state.memberDetail.lastname}` : 
                  '' }
              </Typography>
            </Toolbar>
          </AppBar>
          <h3 style={{ textAlign: 'center'}}>
          { this.state.memberDetail.firstname && this.state.memberDetail.lastname ? 
                  `${this.state.memberDetail.firstname} ${this.state.memberDetail.lastname}` : 
                  '' }         
           </h3>
          <List>
            <ListItem button>
              <ListItemText primary="Commentaire" secondary={ this.state.memberDetail.comments ? this.state.memberDetail.comments : 'Pas de commentaire' } />
            </ListItem>
            <Divider />
            <p style={{ 
              textAlign: 'center',
              color: this.state.memberDetail.ishere ? lightBlue[500]: '#F44336'
              }} >
            { this.state.memberDetail.ishere ? 
              'Présent à ce cours' : 'Absent à ce cours'
            }
            </p>
          </List>
        </Dialog>
            </div>
          );       
    }
}

export default withStyles(styles)(DetailCourses);
