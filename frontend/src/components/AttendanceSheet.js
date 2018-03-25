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
        this.state = {
            isAttending: Array(20).fill(false)
        };
    }

    componentDidMount() {
        const promoId = 1;
        const url = 'https://sagg.ebm.nymous.io/api/promos/' + promoId + '/courses';


        var myInit = {
            method: 'GET',
            headers: {
                "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTZmMDlkYzM1YmZkZTBm",
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }


        fetch(url, myInit)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                return data;
            })

        for (var i = 0; i < 20; i++) {
            studentList.push(this.renderRow(i));
        }
    }


    render() {
        const {classes} = this.props;


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
                    {/*<ControlsBlock onSave={this.props.onSave} discard={this.props.discard}>*/}
                    <ControlsBlock onSave={this.showState} discard={this.props.discard}/>
                </header>
                <List className={classes.list}>{studentList}</List>
                <footer className={classes.header}>
                    <ControlsBlock onSave={this.props.onSave} discard={this.props.discard}/>
                </footer>

            </div>
        );
    }

    showState = () => {
        console.log(this.state);
    }


    handleAttendingClick = (i) => {

        this.setState(prevState => {
            const previousAttendancesArray = prevState.isAttending.slice();
            const attendancesArray = this.state.isAttending.slice();
            attendancesArray[i] = !previousAttendancesArray[i];
            return {isAttending: attendancesArray};

        });
    }

    renderRow = (i) => {
        return <StudentRow key={i} onCheckboxClick={this.handleAttendingClick(i)}
                           checkboxValue={this.state.isAttending[i]}/>
    }

}

export default withStyles(styles)(AttendanceSheet);