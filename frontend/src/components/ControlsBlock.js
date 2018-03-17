import React, {Component} from 'react';

import {withStyles} from 'material-ui';
import Button from "material-ui/es/Button/Button";


const styles = theme => ({
    root: {

        display: "flex",
        flexDirection: "row",
        flexAlign: "right",
        justifyContent: "flex-end",
        width: "100%",
        paddingRight: "20px"

    },

    button: {
        margin: "5px 5px",
    }


});

class ControlsBlock extends Component {
    constructor(props) {
        super(props);
        this.discard = this.discard.bind(this);
        this.save = this.save.bind(this);

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Button className={classes.button} variant="raised" color="secondary"
                        onClick={this.discard}>Annuler</Button>
                <Button className={classes.button} variant="raised" color="secondary"
                        onClick={this.save}>Sauvegarder</Button>
            </div>
        );
    }

    save() {
        this.props.onSave();
    }

    discard() {
        this.props.discard();
    }

}

export default withStyles(styles)(ControlsBlock);