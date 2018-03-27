import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu';
import DetailCourse from './DetailCourse';
import {connect} from 'react-redux'

import {changePromo, getCoursesHistory, getListOfPromos} from "../actions/coursesHistoryActions";


class promotionsContent extends PureComponent {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };


    componentDidMount() {
        this.props.getListOfPromos();
    }

    handlePromoChange = (event) => {
        const value = event.target.value;
        console.log(value);
        //const promoId = this.props.promotions.find(el => el.nomPromo = value)._id;

        //this.props.getCoursesHistory(promoId);
        this.props.changePromo(value);
    }


    render() {
        return (
            <div align="center">

                {/*<Select
                    onChange={this.handlepromotionselect}
                    value={this.props.selectedPromo._id}
                    inputProps={{
                        name: 'selectedCourse',
                        id: 'promotions-simple',
                    }}
                    style={{
                        width: '75%',
                        textAlign: 'center'
                    }}>

                    {this.props.promotions ?
                        this.props.promotions.map(option =>
                            <MenuItem key={option._id}
                                      value={option._id}>
                                {option.nomPromo}
                            </MenuItem>) : ''}
                </Select>
                */}

                {this.props.promotions ?
                    <Select
                        onChange={this.handlePromoChange}
                        value={this.props.selectedPromo.nomPromo}
                        name="selectedPromo"

                        style={{
                            width: '200px',
                            textAlign: 'center'
                        }}>

                        {this.props.promotions ? this.props.promotions.map(promo =>
                            <MenuItem key={promo._id}
                                //value={promo}>
                            >
                                {promo.nomPromo}
                            </MenuItem>) : ''
                        }
                    </Select> : <h3>Veuillez choisir une promo</h3>
                }


                {this.props.selectedCourses ?
                    this.props.selectedCourses.map(cours =>
                        <DetailCourse
                            cours={cours}
                            key={cours._id}
                        />
                    )
                    : ''}
            </div>
        )
    }

}


const mapStateToProps = state => ({
    selectedCourses: state.coursesHistory.selectedCourses,
    selectedPromo: state.coursesHistory.selectedPromo,
    promotions: state.coursesHistory.promotions

})

const mapDispatchToProps = dispatch => ({
    getCoursesHistory: (promoId) => dispatch(getCoursesHistory(promoId)),
    getListOfPromos: () => dispatch(getListOfPromos()),
    changePromo: (promo) => dispatch(changePromo(promo)),
})


export default connect(mapStateToProps, mapDispatchToProps)(promotionsContent);
