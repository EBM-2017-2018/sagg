import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui';
import DetailCourse from './DetailCourse';
import { apiRoute, testTokenProf } from '../config/routes';


class promotionsContent extends PureComponent {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    handlepromotionselect = event => {
        console.log(event.target.value);
        fetch(`${apiRoute.sagg}/promos/${event.target.value}/courses`, {
            method: 'GET',
            headers : { 
              'Authorization': testTokenProf.access_token
             }
          })
          .then((response) => console.log(response) || response.json() )
          .then(data => {
            this.setState({ selectedCourse: data.courses,
                            selectedPromo: this.state.promotions.find(e => e._id === event.target.value) })
          }) 
    };

    componentDidMount() {
        fetch(`${apiRoute.linkapp}/promos/listpromoofresponsable`, {
            method: 'GET',
            headers : { 
              'Authorization': testTokenProf.access_token
             }
          })
          .then((response) => console.log(response) || response.json() )
          .then(data => {
            this.setState({ promotions: data.promotions })
          }) 
    }
    constructor(props) {
        super(props);
        this.state = {
            showButton: true,
            showCourseForm: false,
            showAttendanceSheet: false,
            value: 1,
            selectedCourse: false,
            open: false,
            promotions: []
        };
    }

    render() {
        return (
            <div align="center">
        <InputLabel htmlFor="promotions-simple">
        <h3>{this.state.selectedPromo ? this.state.selectedPromo.nomPromo 
            : 'Veuillez sélectionner une promo'}
        </h3>
        </InputLabel>
          <Select
            onChange={this.handlepromotionselect}
            value={this.state.selectedCourse._id || ''}
            inputProps={{
                name: 'selectedCourse',
                id: 'promotions-simple',
              }} 
              style={{
                width: '75%',
                textAlign: 'center'
              }}  
          >
            {  this.state.promotions ?
            this.state.promotions.map(option => 
            <MenuItem key={option._id}
            value={option._id}>
            {option.nomPromo}
            </MenuItem>) : '' } 
          </Select>      
          {this.state.selectedCourse ?
          this.state.selectedCourse.map(e => 
          <DetailCourse 
            cours={e} 
            key={e._id} 
            /> 
        )
            : '' }     
            </div>
        )
    }    
}

export default promotionsContent;
