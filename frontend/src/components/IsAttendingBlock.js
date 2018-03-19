import React, {Component} from 'react';
import {Checkbox, withStyles} from 'material-ui';


const styles = theme => ({
    attendanceBlock: {
        width: "20%",
        height: "100%",
        borderRight: "1px solid black",
        display: "flex",
        flexDirection: "vertical",
        justifyContent: "center",
        alignItems: "center"
    }

});

class IsAttendingBlock extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.attendanceBlock}>
                <label>Est présent</label>
                <Checkbox onClick={this.props.onCheckboxClick} checked={this.props.checkboxValue}/>
            </div>
        );
    }

}

export default withStyles(styles)(IsAttendingBlock);