import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


import CreateCourseModal from "./CreateCourseModal";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

import {Button} from 'material-ui';
import AttendanceSheet from "./AttendanceSheet";


class AttendanceSheetContent extends PureComponent {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            showButton: true,
            showCourseForm: false,
            showAttendanceSheet: false
        };

    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={this.props.className}>


                    {this.state.showButton ? <Button variant="raised" color="primary" onClick={this.handleClick}>
                        Créer une feuille d'appel</Button> : null}

                    {this.state.showCourseForm ? <CreateCourseModal handleSubmit={this.handleSubmit}/> : null}
                    {this.state.showAttendanceSheet ? <AttendanceSheet onSave={this.save} discard={this.reset}/> : null}


                </div>
            </MuiPickersUtilsProvider>
        )
    }

    handleClick = () => {
        this.showCourseForm();
    }

    reset = () => {
        this.setState(
            {
                showButton: true,
                showCourseForm: false,
                showAttendanceSheet: false
            }
        )
    }


    showCourseForm = () => {
        this.setState(
            {
                showButton: false,
                showCourseForm: true,
                showAttendanceSheet: false
            }
        )
    }

    showAttendanceSheet = () => {
        this.setState(
            {
                showButton: false,
                showCourseForm: false,
                showAttendanceSheet: true
            }
        )
    }

    handleSubmit = (event) => {
        console.log(event);
        this.showAttendanceSheet();
        event.preventDefault();
    }


    save = () => {
        const url = 'https://sagg.ebm.nymous.io/api/attendances'
        const body = {
            title: "titre",
            attendees: [
                {
                    id: "1",
                    ishere: true,
                    comments: "En retard"
                }
            ]
        };
        console.log(body);

        var myInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        }


        fetch(url, myInit)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })
            .then(this.toggleForm());
    }
}

export default AttendanceSheetContent;
