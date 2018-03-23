import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Tab, Tabs, withStyles, Badge} from 'material-ui';
import { apiRoute, testTokenProf } from '../config/routes';

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
        fetch(`${apiRoute.sagg_local}/promos/courses`, {
            method: 'GET',
            headers : { 
              'Authorization': testTokenProf.access_token
             }
      
          })
          .then((response) => console.log(response) || response.json() )
          .then(data => {
            this.setState({ nbCourse: data.courses ? data.courses.length : '' })
          }) 
    }

    constructor(props) {
        super(props);
        this.state = {
            nbCourse : ''
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Tabs
                    value={this.props.tabValue}
                    onChange={this.props.onTabChange}
                    fullWidth>
                    <Tab label="Feuille d'appel"/>
                    <Tab label="Groupes"/>
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
