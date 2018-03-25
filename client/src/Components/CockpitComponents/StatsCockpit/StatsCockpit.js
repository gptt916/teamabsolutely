import React, { Component } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import classes from './StatsCockpit.css';

class StatsCockpit extends Component {
    render() {
        const data = {
            labels: [
                'YAY',
                'NAY'
            ],
            datasets: [{
                data: [this.props.item.countYAY, this.props.item.countNAY],
                backgroundColor: [
                '#36A2EB',
                '#FF6384'
                ],
                hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384'
                ]
            }]
        };

        const data2 = {
            labels: ['NA', 'SA', 'EU', 'AF', 'AS', 'OC'],
            datasets: [
              {
                label: 'YAY',
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderWidth: 1,
                hoverBackgroundColor: '#36A2EB',
                hoverBorderColor: '#36A2EB',
                data: [this.props.item.countContinent.NA.yay,
                    this.props.item.countContinent.SA.yay,
                    this.props.item.countContinent.EU.yay,
                    this.props.item.countContinent.AF.yay,
                    this.props.item.countContinent.AS.yay,
                    this.props.item.countContinent.OC.yay]
              },
              {
                label: 'NAY',
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1,
                hoverBackgroundColor: '#FF6384',
                hoverBorderColor: '#FF6384',
                data: [this.props.item.countContinent.NA.nay,
                    this.props.item.countContinent.SA.nay,
                    this.props.item.countContinent.EU.nay,
                    this.props.item.countContinent.AF.nay,
                    this.props.item.countContinent.AS.nay,
                    this.props.item.countContinent.OC.nay]
              }
            ]
          };

        let body = [];
        body.push(<div className={classes.chartContainer}>
                         <Doughnut data={data}/>
                     </div>);
        
        body.push(<div className={classes.chartContainer}>
                             <Bar data={data2} />
                         </div>);
        // for (var i = 0; i < 5; i++) {
        //     body.push(<div className={classes.chartContainer}>
        //                 <Doughnut data={data}/>
        //             </div>);
            
        //     body.push(<div className={classes.chartContainer}>
        //                 <Bar data={data2} />
        //             </div>
        //     );
        // }

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