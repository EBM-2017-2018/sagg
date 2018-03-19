import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Group from "./Group";


class GroupsContent extends PureComponent {

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
            <div>Groupes</div>

        )
    }


}

export default GroupsContent;
