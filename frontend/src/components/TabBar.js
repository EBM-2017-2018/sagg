import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Badge, Tab, Tabs, withStyles} from 'material-ui';
import {apiRoute} from '../config/routes';
import {checkAuthResponse, getAuthHeaders} from 'ebm-auth/dist/browser';


const styles = theme => ({
    padding: {
        marginLeft: '10px'
    },
});


class TabBar extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };


    componentDidMount() {
        fetch(`${apiRoute.sagg}promos/courses`, {
            method: 'GET',
            headers: getAuthHeaders(),

        })
            .then(checkAuthResponse)
            .then((response) => console.log(response) || response.json())
            .then(data => {
                    this.setState({nbCourse: data.courses ? data.courses.length : ''})
                }
            ).catch(error => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            nbCourse: ''
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <AppBar position="static">
                <Tabs
                    value={this.props.tabValue}
                    onChange={this.props.onTabChange}
                    fullWidth>
                    <Tab label="Feuille d'appel"/>
                    <Tab
                        label={
                            <Badge color="secondary" className={classes.padding} badgeContent={this.state.nbCourse}>
                                Mes cours
                            </Badge>
                        }
                    />
                </Tabs>
            </AppBar>
        );
    }
}

export default withStyles(styles)(TabBar);
