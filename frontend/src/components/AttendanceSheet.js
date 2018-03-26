import React, {Component} from 'react';
import {List, withStyles} from 'material-ui';
import StudentRow from "./StudentRow";
import ControlsBlock from "./ControlsBlock";
import {connect} from "react-redux"
import {changeCommentary, getPromo, toggleCheckbox} from "../actions/attendanceActions";


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

    componentDidMount() {

        this.props.getPromo(this.props.course.promo);
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
                <List className={classes.list}>{this.getRows()}</List>
                <footer className={classes.header}>
                    <ControlsBlock onSave={this.props.onSave} discard={this.props.discard}/>
                </footer>

            </div>
        );
    }


    getRows = () => {
        const rows = [];
        if (!this.props.promo.membres) return;
        for (var i = 0; i < this.props.promo.membres.length; i++) {
            rows.push(this.renderRow(i));
        }
        return rows
    }
    renderRow = (i) => {
        return <StudentRow key={i} onCheckboxClick={this.toggleCheckbox(i)} student={this.props.students[i]}
                           changeCommentary={this.changeCommentary(i)}
        />
    }
    toggleCheckbox = (checkboxKey) => {
        return () => this.props.toggleCheckbox(checkboxKey);
    }

    changeCommentary = (key) => {
        return (text) => this.props.changeCommentary(key, text);
    }

}


const mapStateToProps = state => ({
    course: state.course.course,
    promos: state.promos.promos,
    promo: state.attendance.promo,
    students: state.attendance.students,


})


const mapDispatchToProps = dispatch => ({
    getPromo: (nomPromo) => dispatch(getPromo(nomPromo)),
    toggleCheckbox: (checkboxKey) => dispatch(toggleCheckbox(checkboxKey)),
    changeCommentary: (key, text) => dispatch(changeCommentary(key, text)),


})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AttendanceSheet));