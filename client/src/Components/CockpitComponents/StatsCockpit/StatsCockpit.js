import React, { Component } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import classes from './StatsCockpit.css';

class StatsCockpit extends Component {
    render() {
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        const data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };

        let body = [];

        for (var i = 0; i < 5; i++) {
            body.push(<div className={classes.chartContainer}>
                        <Doughnut data={data}/>
                    </div>);
            
            body.push(<div className={classes.chartContainer}>
                        <Bar data={data2} />
                    </div>
            );
        }

        return (
            <div>
                <div>
                    <button onClick={() => this.props.setShowStats(false)}>Hide Stats</button>
                </div>
                {body}
            </div>
        )
    }
}

export default StatsCockpit;