import React, {Component} from 'react';
import {Modal, TextField, withStyles} from "material-ui";
import { TimePicker, DatePicker, DateTimePicker } from 'material-ui-pickers'



const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    label:{

    }

});

const options = [
    'one', 'two', 'three'
]

class CreateCourseModal extends Component {


    render() {
        const {classes} = this.props;
        return (
            <form className={classes.root}>
                <h1>Créer un cours</h1>

                <label className={classes.label}>
                    Intitulé du cours
                </label>
                <TextField placeholder="Intitulé du cours" onChange={this.handleChange}/>

                <label className={classes.label}>
                    Nom du professeur
                </label>
                <TextField placeholder="Nom du professeur" onChange={this.handleChange}/>

                <label className={classes.label}>
                    Promo
                </label>


                <label className={classes.label}>
                    Date du cours
                </label>

                <DatePicker/>

                <label className={classes.label}>
                    Heure de début du cours

                </label>
                <TimePicker/>

                <label className={classes.label}>
                    Heure de fin du cours
                </label>
                <TimePicker/>





            </form>

        );
    }

    handleChange = (event) => {
        console.log(event);
    }
}

export default withStyles(styles)(CreateCourseModal);