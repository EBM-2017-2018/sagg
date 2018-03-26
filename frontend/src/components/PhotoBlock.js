import React, {Component} from 'react';
import userPhoto from "./../avatar.png"
import {withStyles} from "material-ui";
import {apiRoute} from "../config/routes";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "horizontal",
        justifyContent: "left",
        alignItems: "center",
        height: "100%",
        width: "100px",


    },
    studentImg: {
        width: "100%"
    },


});

class PhotoBlock extends Component {


    render() {
        const {classes} = this.props;
        const photoExist = this.props.student.photoExist;
        const username = this.props.student.username;
        const photo_url = photoExist ? `${apiRoute.linkapp}pictures/file/${username}` : userPhoto;
        return (
            <div className={classes.root}>
                <img alt="profil" className={classes.studentImg} src={photo_url}/>
            </div>
        );
    }
}

export default withStyles(styles)(PhotoBlock);