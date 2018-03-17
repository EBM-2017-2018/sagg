import React, {Component} from 'react';
import {List, withStyles} from 'material-ui';
import StudentRow from "./StudentRow";
import ControlsBlock from "./ControlsBlock";

//const studentList = [<StudentRow/>, <StudentRow/>, <StudentRow/>];
const studentList = [];
const styles = theme => ({
    root: {
        width: "calc(100%-40px)",
        margin: "0 40px",
        boxShadow: "1px 1px 12px #555"
    },

    list: {
        margin: "0 20px",
    },

    header: {
        fontSize: "20px",
        padding: "10px 0"
    }

});

class AttendanceSheet extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        const {classes} = this.props;

        for (var i = 0; i < 20; i++) {
            studentList.push(<StudentRow key={Math.random()}/>);
        }

        return (
            <div className={classes.root}>
                <header className={classes.header}>
                    <p style={{
                        width: "auto",
                        color: "#18435a",
                        fontSize: "35px",
                        fontFamily: "roboto",
                        borderBottom: "1px solid #18435a",
                        margin: "20px",
                        padding: "40px"
                    }}>Feuille d'appel</p>
                    <ControlsBlock onSave={this.props.onSave} discard={this.props.discard}/>
                </header>
                <List className={classes.list}>{studentList}</List>
                <footer className={classes.header}>
                    <ControlsBlock onSave={this.props.onSave} discard={this.props.discard}/>
                </footer>

            </div>
        );
    }


}

export default withStyles(styles)(AttendanceSheet);