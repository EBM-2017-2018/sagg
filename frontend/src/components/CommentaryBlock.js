import React, {Component} from 'react';
import {withStyles} from 'material-ui';


const styles = theme => ({
    root: {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "left"
    },


    textArea: {
        width: "100%",
        height: "100%"
    },

    title: {
        textAlign: "center",
        fontSize: "14px",
    }


});

class CommentaryBlock extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <p className={classes.title}>Commentaires</p>
                <textarea className={classes.textArea}/>
            </div>
        );
    }

}

export default withStyles(styles)(CommentaryBlock);