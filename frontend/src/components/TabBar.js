import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Tab, Tabs, withStyles} from 'material-ui';

const styles = {};

class TabBar extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };


    render() {
        return (
            <AppBar position="static">
                <Tabs
                    value={this.props.tabValue}
                    onChange={this.props.onTabChange}
                    fullWidth>
                    <Tab label="Feuille d'appel"/>
                    <Tab label="Groupes"/>
                </Tabs>
            </AppBar>
        );
    }
}

export default withStyles(styles)(TabBar);
