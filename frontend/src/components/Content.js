import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'material-ui';
import CreateCourseModal from "./CreateCourseModal";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

class Content extends PureComponent {


    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    constructor(props) {
        super(props);
        this.state = {showButton: true};
        this.handleClick = this.handleClick.bind(this);
        this.discard = this.discard.bind(this);
        this.toggleAttendanceSheet = this.toggleAttendanceSheet.bind(this);
        this.save = this.save.bind(this);



    }




    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={this.props.className}>

                {!this.state.showButton ? <CreateCourseModal/> : null}
                {this.state.showButton ?
                    <Button variant="raised" color="primary" onClick={this.handleClick}>Créer une feuille
                        d'appel</Button> : null}
                {/*{ !this.state.showButton ? <AttendanceSheet onSave={this.save} discard={this.discard}/> : null }*/}


            </div>
            </MuiPickersUtilsProvider>
        )
    }

    handleClick() {
        this.toggleAttendanceSheet();
    }

    discard() {
        this.toggleAttendanceSheet();
    }

    save() {
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
            .then(this.toggleAttendanceSheet());
    }


    toggleAttendanceSheet() {
        this.setState(prevState => {
            return {showButton: !prevState.showButton}
        });
    }
}

export default Content;
