import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MenuItem, Select} from 'material-ui';
import DetailCourse from './DetailCourse';
import {connect} from 'react-redux'

import {changePromo, getCoursesHistory, getListOfPromos} from "../actions/coursesHistoryActions";
import {InputLabel} from "material-ui/";


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
        const promoId = event.target.value;
        this.props.changePromo(promoId);
        this.props.getCoursesHistory(promoId);
    }


    render() {
        return (
            <div align="center">

                <InputLabel htmlFor={"promotions-simple"}>
                    {this.props.promotions ? <h3>Veuiller selectionnez une promo</h3> : null}
                </InputLabel>

                {this.props.promotions ?

                    <Select
                        value={this.props.selectedPromoId ? this.props.selectedPromoId : ''}
                        onChange={this.handlePromoChange}
                        name="selectedPromo"

                        style={{
                            width: '200px',
                            textAlign: 'center'
                        }}>

                        {this.props.promotions ? this.props.promotions.map(promo =>
                            <MenuItem key={promo._id}
                                      value={promo._id}>
                                {promo.nomPromo}
                            </MenuItem>) : null
                        }
                    </Select> : null
                }


                {this.props.selectedCourses ?
                    this.props.selectedCourses.map(cours =>
                        <DetailCourse
                            cours={cours}
                            key={cours._id}
                        />
                    )
                    : null}
            </div>
        )
    }

}


const mapStateToProps = state => ({
    selectedCourses: state.coursesHistory.selectedCourses,
    selectedPromoId: state.coursesHistory.selectedPromoId,
    promotions: state.coursesHistory.promotions

})

const mapDispatchToProps = dispatch => ({
    getCoursesHistory: (promoId) => dispatch(getCoursesHistory(promoId)),
    getListOfPromos: () => dispatch(getListOfPromos()),
    changePromo: (promoId) => dispatch(changePromo(promoId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(promotionsContent);
