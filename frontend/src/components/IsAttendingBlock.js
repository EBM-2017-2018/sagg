import React, {Component} from 'react';
import {Checkbox, withStyles} from 'material-ui';


const styles = theme => ({
    attendanceBlock:{
        width: "20%",
        height: "100%",
        borderRight: "1px solid black",
        display: "flex",
        flexDirection :"vertical",
        justifyContent : "center",
        alignItems: "center"
    }

});

class IsAttendingBlock extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.attendanceBlock}>
                <label>Est présent</label>
                <Checkbox onClick={this.handleClick}/>
            </div>
        );
    }

    handleClick(){
        console.log("click");



        const url = 'https://sagg.ebm.nymous.io/api/courses'
        fetch(url, { mode: 'cors'})
            .then(function(response){return response.json()})
            .then(function(blob){
                console.log(blob);
            });// Transform the data into json
    }
}

export default withStyles(styles)(IsAttendingBlock);