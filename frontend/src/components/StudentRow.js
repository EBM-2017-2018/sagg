import React, {Component} from 'react';
import StudentInfosBlock from './StudentInfosBlock';
import {withStyles} from 'material-ui';
import PhotoBlock from "./PhotoBlock";
import CommentaryBlock from "./CommentaryBlock";
import IsAttendingBlock from "./IsAttendingBlock";


const styles = theme => ({
    root: {
        border: "1px solid black",
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",
        height: "120px",
        boxSizing: "border-box"
    },


});

class StudentRow extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <PhotoBlock/>
                <StudentInfosBlock styles={{width: "60%"}}/>
                <IsAttendingBlock  checkboxValue={this.props.checkboxValue} onCheckboxClick={this.props.onCheckboxClick}/>
                <CommentaryBlock/>
            </div>
        );
    }

    renderIsAttendingBlock = (i) => {

    }

}

export default withStyles(styles)(StudentRow);