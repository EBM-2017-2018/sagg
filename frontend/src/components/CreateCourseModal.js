import React, {Component} from 'react';
import {Button, TextField, withStyles} from "material-ui";
import {DatePicker, TimePicker} from 'material-ui-pickers';



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

const options = [
    'one', 'two', 'three'
]

class CreateCourseModal extends Component {


    constructor(props) {
        super(props);
        this.state = {
            courseName: '',
            teacher: '',
            promo: '',
            courseDate: 0,
            startHour: 0,
            endHour: 0
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.root} onSubmit={this.props.handleSubmit}>
                <h1>Créer un cours</h1>

                <label className={classes.formElement}>
                    Intitulé du cours
                </label>
                <TextField placeholder="Intitulé du cours" onChange={this.handleCourseNameChange}
                           value={this.state.courseName}/>

                <label className={classes.formElement}>
                    Nom du professeur
                </label>
                <TextField placeholder="Nom du professeur" onChange={this.handleTeacherChange}
                           value={this.state.teacher}/>

                <label className={classes.formElement}>
                    Promo
                </label>
                <TextField placeholder="Promo" onChange={this.handlePromoChange} value={this.state.promo}/>

                <label className={classes.formElement}>
                    Date du cours
                </label>

                <DatePicker value={this.state.courseDate} onChange={this.handleDateChange}/>

                <label className={classes.formElement}>
                    Heure de début du cours

                </label>
                <TimePicker value={this.state.startHour} onChange={this.handleStartHourChange}/>

                <label className={classes.formElement}>
                    Heure de fin du cours
                </label>
                <TimePicker value={this.state.endHour} onChange={this.handleEndHourChange}/>


                <Button className={classes.formElement} variant="raised" color="primary" type="submit"
                        onClick={this.saveCourse}>Créer</Button>


            </form>

        );
    }

    handleCourseNameChange = (event) => {
        this.setState({courseName: event.target.value});
    }
    handleTeacherChange = (event) => {
        this.setState({teacher: event.target.value});
    }
    handlePromoChange = (event) => {
        this.setState({promo: event.target.value});
    }
    handleDateChange = (date) => {
        this.setState({courseDate: date});
    }
    handleStartHourChange = (hour) => {
        this.setState({startHour: hour});
    }
    handleEndHourChange = (hour) => {
        this.setState({endHour: hour});
    }

    saveCourse = () => {
        const promoId = 1;
        const values = JSON.stringify(this.state);
        const url = 'https://sagg.ebm.nymous.io/api/promos/' + promoId + '/courses';


        var myInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: values
        }


        fetch(url, myInit)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })
            .then(this.submit);
    }


}

export default withStyles(styles)(CreateCourseModal);