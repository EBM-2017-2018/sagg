import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Avatar, Button,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    withStyles
} from 'material-ui';

import SchoolIcon from 'material-ui-icons/School';
import AssignmentIcon from 'material-ui-icons/Assignment';
import CloseIcon from 'material-ui-icons/Close';
import UpdateIcon from 'material-ui-icons/Update';
import PeopleIcon from 'material-ui-icons/People';
import lightBlue from 'material-ui/colors/lightBlue';
import moment from 'moment';
import {HighlightOff} from 'material-ui-icons'
import {apiRoute, testTokenProf} from "../config/routes";


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
        commentOpen: false,
        memberDetail: {},
        deleteOpen: false,
        deleteText: "Supprimer",
        isDeleted: false,

    }
    handleClickOpen = (param, e) => {
        this.setState({
            commentOpen: true,
            memberDetail: param
        });
    };

    handleClose = () => {
        this.setState({commentOpen: false, deleteOpen: false});
    };

    handleCloseClick = () => {
        this.setState({deleteOpen: true});
    }

    delete = () => {
        if (!this.state.isDeleted) {
            fetch(`${apiRoute.sagg}promos/courses/${this.props.cours._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': testTokenProf.access_token
                }

            })
                .then((response) => console.log(response) || response.json())
                .then(() => {
                    this.setState({deleteText: "Terminer", isDeleted: true})
                })
        }
        else {
            this.setState({deleteText: "Supprimer"});
            this.handleClose();
        }

    }


    render() {
        const {classes} = this.props;
        return (
            <div
                style={{
                    marginTop: '10px',
                    display: this.state.isDeleted ? "none" : "block"
                }}
                className={classes.root}>
                <List>
                    <ListItem>
                        <Avatar>
                            <AssignmentIcon/>
                        </Avatar>
                        <ListItemText primary="Nom du cours" secondary={this.props.cours.title}/>
                    </ListItem>
                    <ListItem>
                        <Avatar>
                            <SchoolIcon/>
                        </Avatar>
                        <ListItemText primary="Professeur responsable" secondary={this.props.cours.teacher}/>
                    </ListItem>
                    <ListItem>
                        <Avatar>
                            <UpdateIcon/>
                        </Avatar>
                        <ListItemText primary="Dates"
                                      secondary={`le ${moment(this.props.cours.start_time).format('DD/MM')}
                  de ${moment(this.props.cours.start_time).format('HH:mm')} à 
                  ${moment(this.props.cours.end_time).format('HH:mm')} `}/>
                    </ListItem>
                    <ListItem>
                        <Avatar>
                            <PeopleIcon/>
                        </Avatar>
                        <ListItemText primary="Elèves" secondary="Liste des élèves associé à ce cours"/>
                    </ListItem>

                </List>
                <div className={classes.row} style={{display: "flex", flexWrap: "wrap"}}>
                    {this.props.cours.attendees ?
                        this.props.cours.attendees.map(e =>
                            <div key={"div" + e._id}
                                 style={{border: "1px solid black", borderRadius: "3px", margin: "2px"}}>
                                <Avatar
                                    key={e._id}
                                    className={e.ishere ? classes.blueAvatar : classes.redAvatar}
                                    onClick={this.handleClickOpen.bind(this, e)}>
                                    {e.username ? e.username.substring(0, 1).toUpperCase() : ''}
                                </Avatar>
                                <img alt="" key={"img" + e._id} src={`${apiRoute.linkapp}pictures/file/${e.username}`}
                                     style={{width: "30px", height: "30px"}}/>
                            </div>
                        )
                        : ''}
                </div>
                <Dialog
                    open={this.state.commentOpen}
                    onClose={this.handleClose}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                {this.state.memberDetail.firstname && this.state.memberDetail.lastname ?
                                    `${this.state.memberDetail.firstname} ${this.state.memberDetail.lastname}` :
                                    ''}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <h3 style={{textAlign: 'center'}}>
                        {this.state.memberDetail.firstname && this.state.memberDetail.lastname ?
                            `${this.state.memberDetail.firstname} ${this.state.memberDetail.lastname}` :
                            ''}
                    </h3>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Commentaire"
                                          secondary={this.state.memberDetail.comments ? this.state.memberDetail.comments : 'Pas de commentaire'}/>
                        </ListItem>
                        <Divider/>
                        <p style={{
                            textAlign: 'center',
                            color: this.state.memberDetail.ishere ? lightBlue[500] : '#F44336'
                        }}>
                            {this.state.memberDetail.ishere ?
                                'Présent à ce cours' : 'Absent à ce cours'
                            }
                        </p>
                    </List>
                </Dialog>

                <HighlightOff style={{
                    position: "absolute",
                    right: "20px",
                    marginTop: "-200px",
                    width: "30px",
                    height: "30px",
                    color: "red"
                }} onClick={this.handleCloseClick}/>
                <Dialog
                    open={this.state.deleteOpen}
                    onClose={this.handleClose}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                {`${this.props.cours.title} date : ${moment(this.props.cours.start_time).format('DD-MM-YYYY HH:mm')}`}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={{width: "500px", height: "auto"}}>
                        {!this.state.isDeleted ? <h3 style={{textAlign: 'center', margin: "5px 10px"}}>
                            {`Voulez vous vraiment supprimer le cours ?`}
                        </h3> : <h3 style={{textAlign: 'center', margin: "5px 10px"}}>Cours Supprimé</h3>}
                        {!this.state.isDeleted ?
                            <h4 style={{textAlign: 'center', margin: "5px 10px"}}>{`titre : ${this.props.cours.title}`}</h4> : null}
                        {!this.state.isDeleted ? <h4 style={{
                            textAlign: 'center',
                            margin: "5px 10px"
                        }}>{`date : ${moment(this.props.cours.start_time).format('DD-MM-YYYY HH:mm')}`}</h4> : null}

                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            {!this.state.isDeleted ?
                                <Button variant="raised" onClick={this.handleClose}>Annuler</Button> : null}
                            <Button variant="raised" color="primary"
                                    onClick={this.delete}>{this.state.deleteText}</Button>
                        </div>
                    </div>
                </Dialog>

            </div>
        );
    }
}

export default withStyles(styles)(DetailCourses);
