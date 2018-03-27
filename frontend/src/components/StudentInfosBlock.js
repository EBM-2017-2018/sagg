import React, {Component} from 'react';


class StudentInfosBlock extends Component {

    render() {


        return (
            <div style={{
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                minWidth: "250px",
                heigth: "100%",
                boxSizing: "border-box",
                
            }}>
                <p>{this.props.student.nom}</p>
                <p>{this.props.student.prenom}</p>
                <p>{this.props.student.email}</p>
            </div>
        );
    }
}

export default StudentInfosBlock;