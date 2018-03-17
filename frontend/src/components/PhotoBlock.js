import React, {Component} from 'react';
import userPhoto from "./../avatar.png"
import {withStyles} from "material-ui";


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
        return (
            <div className={classes.root}>
                <img className={classes.studentImg} src={userPhoto}/>
            </div>
        );
    }
}

export default withStyles(styles)(PhotoBlock);