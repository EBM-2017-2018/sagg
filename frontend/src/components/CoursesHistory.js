import React, {Component} from 'react';
import {withStyles} from 'material-ui';


const styles = theme => ({
    root: {
        width: "150px",
        height: "150px",
        border: "4px solid black",
        borderRadius: "10px"
    }


});

class CourseHistory extends Component {


    render() {
        const {classes} = this.props;


        return (
            <div style={classes.root}/>
        );
    }


}


export default withStyles(styles)(CourseHistory);