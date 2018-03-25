import React, {Component} from 'react';
import {Button, TextField, withStyles, MenuItem, Select} from "material-ui";
import {DatePicker, TimePicker} from 'material-ui-pickers';
import {connect} from "react-redux"
import {changeInput, saveCourse} from "../actions/courseAction"
import {ArrowBack, ArrowForward} from 'material-ui-icons'
import {toggleAttendanceSheet, toggleCourseForm} from "../actions/attendanceActions";


const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    formElement: {
        margin: "10px 0"
    }

});

const mapStateToProps = state => ({
    course: state.course.course,
    courseFetched: state.course.fetched,
    promos: state.promos.promos
})

const mapDispatchToProps = dispatch => ({
    changeValue: (name, value) => dispatch(changeInput(name, value)),
    saveCourse: (promoId, course) => dispatch(saveCourse(promoId, course)),
    toggleAttendanceSheet: (isVisible) => dispatch(toggleAttendanceSheet(isVisible)),
    toggleCourseForm : (isVisible) => dispatch(toggleCourseForm(isVisible)),
})


class CreateCourse extends Component {


    render() {
        const {classes} = this.props;


        return (
            <form className={classes.root} onSubmit={this.props.handleSubmit}>
                <h1>Créer un cours</h1>

                <label className={classes.formElement}>
                    Intitulé du cours
                </label>
                <TextField name="name" placeholder="Intitulé du cours" onChange={this.handleInputChange}
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

                <DatePicker leftArrowIcon={<ArrowBack/>}
                            rightArrowIcon={<ArrowForward/>} value={this.props.course.date}
                            onChange={this.handleDateChange}/>

                <label className={classes.formElement}>
                    Heure de début du cours

                </label>
                <TimePicker value={this.props.course.startHour} ampm={false} onChange={this.handleStartHourChange}/>

                <label className={classes.formElement}>
                    Heure de fin du cours
                </label>
                <TimePicker value={this.props.course.endHour} ampm={false} onChange={this.handleEndHourChange}/>


                <Button className={classes.formElement} variant="raised" color="primary" type="submit"
                        onClick={this.showAttendanceSheet}>Créer</Button>

            </form>

        );
    }


    handleDateChange = (date) => {
        this.props.changeValue("date", date);
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
        this.props.saveCourse(1, this.props.course)
    }

    showAttendanceSheet = () => {
        this.props.toggleCourseForm(false);
        this.props.toggleAttendanceSheet(true);
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateCourse));