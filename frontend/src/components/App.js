import React, {Component} from 'react';
import {MuiThemeProvider, Reboot, withStyles} from 'material-ui';
import PropTypes from 'prop-types';

import './App.css';
import theme from '../theme';
import GlobalAppBar from './GlobalAppBar';
import TabBar from './TabBar'
import AttendanceSheetContent from './AttendanceSheetContent';

import MyCoursesContent from "./CoursesHistoryContent";

const styles = theme => ({
    root: {
        marginTop: 56,
        '@media (min-width:0px) and (orientation: landscape)': {
            marginTop: 48
        },
        '@media (min-width:600px)': {
            marginTop: 64
        }
    },
    content: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 5,
    }
});

class App extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };


    constructor(props) {
        super(props);
        this.state = {
            tabSelected: 0
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>


                    <Reboot/>
                    <GlobalAppBar appTitle="EBM SAGG" hasTabBarBelow/>
                    <TabBar onTabChange={this.handleTabChange} tabValue={this.state.tabSelected}/>
                    {/* You should work mainly in the Content component */}
                    {this.state.tabSelected === 0 ? <AttendanceSheetContent className={classes.content}/> : null}
                    {this.state.tabSelected === 1 ? <MyCoursesContent className={classes.content}/> : null}


                </MuiThemeProvider>


            </div>
        );
    }

    handleTabChange = (event, value) => {

        this.setState({tabSelected: value});

    };
}

export default withStyles(styles)(App);
