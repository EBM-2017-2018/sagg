import React, {Component} from 'react';
import {Button, MenuItem, Select, TextField, withStyles} from "material-ui";
import {DatePicker, TimePicker} from 'material-ui-pickers';
import {connect} from "react-redux"
import {changeInput, saveCourse} from "../actions/courseAction"
import {ArrowBack, ArrowForward} from 'material-ui-icons'
import {toggleAttendanceSheet, toggleCourseForm} from "../actions/attendanceActions";
import {format} from "date-fns"


const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        borderRadius: "5px",
        boxShadow: "4px -4px 4px 4px  #555",
        width: "800px",

    },
    formElement: {
        margin: "15px 0",
    },

    button:{
        margin: "25px 0"
    }

});


class CreateCourse extends Component {


    render() {
        const {classes} = this.props;


        return (
            <form className={classes.root} onSubmit={this.submitForm}>
                <h1>Créer un cours</h1>

                <label className={classes.formElement}>
                    Intitulé du cours
                </label>
                <TextField style={{alignItem: "center"}}name="name" placeholder="Intitulé du cours" onChange={this.handleInputChange}
                           value={this.props.course.name}/>

                <label className={classes.formElement}>
                    Nom du professeur
                </label>
                <TextField name="teacher" placeholder="Nom du professeur" onChange={this.handleInputChange}
                           value={this.props.course.teacher}/>

                <label className={classes.formElement}>
                    Promo
                </label>

                {this.props.promos ?
                    <Select
                        onChange={this.handleInputChange}
                        value={this.props.course.promo}
                        name="promo"

                        style={{
                            width: '200px',
                            textAlign: 'center'
                        }}>

                        {this.props.promos ? this.props.promos.map(promo =>
                            <MenuItem key={promo._id}
                                      value={promo.nomPromo}>
                                {promo.nomPromo}
                            </MenuItem>) : ''
                        }
                    </Select> : null
                }


                <label className={classes.formElement}>
                    Date du cours
                </label>

                <DatePicker format="DD-MM-YYYY"
                            leftArrowIcon={<ArrowBack/>}
                            rightArrowIcon={<ArrowForward/>} value={this.props.course.date}
                            onChange={this.handleDateChange}/>

                <label className={classes.formElement}>
                    Heure de début du cours

                </label>
                <TimePicker format="HH:mm" value={this.props.course.startHour} ampm={false}
                            onChange={this.handleStartHourChange}/>

                <label className={classes.formElement}>
                    Heure de fin du cours
                </label>
                <TimePicker format="HH:mm" value={this.props.course.endHour} ampm={false}
                            onChange={this.handleEndHourChange}/>


                <Button className={classes.button} variant="raised" color="primary" type="submit">Créer</Button>

            </form>

        );
    }

    submitForm = (event) => {
        event.preventDefault();
        this.saveCourse();
        this.showAttendanceSheet();
    }

    handleDateChange = (date) => {
        const formattedDate = format(date, "YYYY-MM-DD")
        this.props.changeValue("date", formattedDate);
    }
    handleStartHourChange = (hour) => {

        this.props.changeValue("startHour", hour);
    }
    handleEndHourChange = (hour) => {

        this.props.changeValue("endHour", hour);
    }


    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        console.log(value, name)

        this.props.changeValue(name, value);
    }

    saveCourse = () => {
        const course = this.props.course;
        this.props.saveCourse(this.getPromoId(course.promo), course)
    }

    showAttendanceSheet = () => {
        this.props.toggleCourseForm(false);
        this.props.toggleAttendanceSheet(true);
    }

    getPromoId = (promoName) => {
        const promos = this.props.promos;
        for (let i = 0; i < promos.length; i++) {
            if (promoName === promos[i].nomPromo) {
                return promos[i]._id;
            }
        }
        return undefined;
    }


}

const mapStateToProps = state => ({
    course: state.course.course,
    courseFetched: state.course.fetched,
    promos: state.promos.promos
})

const mapDispatchToProps = dispatch => ({
    changeValue: (name, value) => dispatch(changeInput(name, value)),
    saveCourse: (promoId, course) => dispatch(saveCourse(promoId, course)),
    toggleAttendanceSheet: (isVisible) => dispatch(toggleAttendanceSheet(isVisible)),
    toggleCourseForm: (isVisible) => dispatch(toggleCourseForm(isVisible)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateCourse));