import React, {Component} from 'react';
import {withStyles, Button} from 'material-ui';



const styles = theme => ({
    root: {

        display: "flex",
        flexDirection: "row",
        flexAlign : "right",
        justifyContent: "flex-end",
        width: "100%",
        paddingRight : "20px"

    },

    button:{
       margin: "5px 5px",
    }








});

class ControlsBlock extends Component {
    constructor(props){
        super(props);
        this.discard = this.discard.bind(this);

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Button className={classes.button} variant="raised"  color="secondary" onClick={this.save}>Sauvegarder</Button>
                <Button className={classes.button} variant="raised" color="secondary" onClick={this.discard}>Annuler</Button>
            </div>
        );
    }

    save(){
       // fetch()
    }

    discard(){
        this.props.discard();
    }

}

export default withStyles(styles)(ControlsBlock);