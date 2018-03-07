import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'material-ui';
import AttendanceSheet from "./AttendanceSheet";

class Content extends PureComponent {


  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  constructor(props){
    super(props);
    this.state = {showButton : true};
    this.handleClick = this.handleClick.bind(this);
    this.discard = this.discard.bind(this);

  }

  render() {
    return (
      <div className={this.props.className}>


          { this.state.showButton ? <Button variant="raised" color="primary" onClick={this.handleClick}>Créer une feuille d'appel</Button> : null }
          { !this.state.showButton ? <AttendanceSheet discard={this.discard}/> : null }



      </div>
    )
  }

  handleClick () {
      this.setState({showButton: false});
  }

  discard(){
    this.setState({showButton: true});
  }
}

export default Content;
