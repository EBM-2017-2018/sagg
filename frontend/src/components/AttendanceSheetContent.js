import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


import CreateCourseModal from "./CreateCourse";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

import {Button} from 'material-ui';
import AttendanceSheet from "./AttendanceSheet";
import {connect} from "react-redux"
import {getPromos} from "../actions/promoActions";
import {refreshToken} from "../actions/loginActions"
import {saveAttendanceSheet, toggleAttendanceSheet, toggleButton, toggleCourseForm} from "../actions/attendanceActions"


class AttendanceSheetContent extends PureComponent {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };



    componentWillMount(){
        this.props.getPromos();
        this.props.getToken();
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={this.props.className}>


                    {this.props.buttonIsVisible ? <Button variant="raised" color="primary" onClick={this.showCourseForm}>
                        Créer une feuille d'appel</Button> : null}

                    {this.props.courseFormIsVisible ? <CreateCourseModal showCourseForm={this.showAttendanceSheet}/> : null}
                    {this.props.attendanceSheetIsVisible ? <AttendanceSheet onSave={this.save} discard={this.reset}/> : null}

                    <h1>{this.props.promos[0] ? this.props.promos[0].membres  : "booth" }</h1>


                </div>
            </MuiPickersUtilsProvider>
        )
    }


    reset = () => {
        this.props.toggleButton(true);
        this.props.toggleCourseForm(false);
        this.props.toggleAttendanceSheet(false);
    }


    showCourseForm = () => {
        this.props.toggleButton(false);
        this.props.toggleCourseForm(true);
    }

    showAttendanceSheet = () => {
       this.props.toggleCourseForm(false);
       this.props.toggleAttendanceSheet(true);
    }

    submit = () => {
        //this.props.saveAttendanceSheet(this.props.attendanceSheet);
        this.reset();
    }





}
const mapStateToProps = state => ({
    promos: state.promos.promos,
    error: state.promos.error,
    buttonIsVisible : state.attendance.button.isVisible,
    courseFormIsVisible : state.attendance.courseForm.isVisible,
    attendanceSheetIsVisible : state.attendance.attendanceSheet.isVisible,
})

const mapDispatchToProps = dispatch => ({
    getPromos: () => dispatch(getPromos()),
    getToken: ()=> dispatch(refreshToken()),
    toggleButton: (isVisible) => dispatch(toggleButton(isVisible)),
    toggleAttendanceSheet: (isVisible) => dispatch(toggleAttendanceSheet(isVisible)),
    toggleCourseForm: (isVisible) => dispatch(toggleCourseForm(isVisible)),
    saveAttendanceSheet : (attendanceSheet) => dispatch(saveAttendanceSheet(attendanceSheet))
})


export default connect(mapStateToProps,mapDispatchToProps)(AttendanceSheetContent);
