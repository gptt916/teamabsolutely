import React, { Component } from 'react';
import { Doughnut, Bar, Radar, defaults } from 'react-chartjs-2';
import classes from './StatsCockpit.css';

defaults.global.defaultFontColor = '#fff';

class StatsCockpit extends Component {

    getComparisonCharts() {
        const continent = {
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

          const gender = {
            labels: ['Male', 'Female', 'Other'],
            datasets: [
              {
                label: 'YAY',
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderWidth: 1,
                hoverBackgroundColor: '#36A2EB',
                hoverBorderColor: '#36A2EB',
                data: [this.props.item.countGender.male.yay,
                    this.props.item.countGender.female.yay,
                    this.props.item.countGender.other.yay]
              },
              {
                label: 'NAY',
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1,
                hoverBackgroundColor: '#FF6384',
                hoverBorderColor: '#FF6384',
                data: [this.props.item.countGender.male.nay,
                    this.props.item.countGender.female.nay,
                    this.props.item.countGender.other.nay]
              }
            ]
          };

          const age = {
            labels: ['0-12', '13-18', '19-26', '27-40', '40-65', '65+'],
            datasets: [
              {
                label: 'YAY',
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderWidth: 1,
                hoverBackgroundColor: '#36A2EB',
                hoverBorderColor: '#36A2EB',
                data: [this.props.item.countAge.child.yay,
                    this.props.item.countAge.teen.yay,
                    this.props.item.countAge.youngAdult.yay,
                    this.props.item.countAge.adult.yay,
                    this.props.item.countAge.middleAgedAdult.yay,
                    this.props.item.countAge.senior.yay]
              },
              {
                label: 'NAY',
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1,
                hoverBackgroundColor: '#FF6384',
                hoverBorderColor: '#FF6384',
                data: [this.props.item.countAge.child.nay,
                    this.props.item.countAge.teen.nay,
                    this.props.item.countAge.youngAdult.nay,
                    this.props.item.countAge.adult.nay,
                    this.props.item.countAge.middleAgedAdult.nay,
                    this.props.item.countAge.senior.nay]
              }
            ]
          };
          
          const genderOptions={
            title: {
                display: true,
                text: 'Gender',
                fontColor: 'white'
            }
        };

        const ageOptions={
            title: {
                display: true,
                text: 'Age',
                fontColor: 'white'
            }
        };

        const contOptions={
            title: {
                display: true,
                text: 'Continents',
                fontColor: 'white'
            }
        };
          return [
            (<div key="gender" className={classes.barChartContainer}><Bar data={gender} options={genderOptions}/></div>),
            (<div key="age" className={classes.barChartContainer}><Bar data={age} options={ageOptions}/></div>),
            (<div key="cont" className={classes.barChartContainer}><Bar data={continent} options={contOptions}/></div>)
          ];
    }

    getParticipationCharts() {
        let totalYay = 0;
        let totalNay = 0;

        for (var key in this.props.item.countGender) {
            totalYay += this.props.item.countGender[key].yay
            totalNay += this.props.item.countGender[key].nay
        }
        console.log(totalNay);

        const gender = {
            labels: ['Male', 'Female', 'Other'],
            datasets: [
              {
                label: 'YAY',
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                pointBackgroundColor: 'rgba(54,162,235,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54,162,235,1)',
                data: [Math.round(this.props.item.countGender.male.yay * 100 / totalYay),
                    Math.round(this.props.item.countGender.female.yay * 100 / totalYay),
                    Math.round(this.props.item.countGender.other.yay * 100 / totalYay)]
              },
              {
                label: 'YAY',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [Math.round(this.props.item.countGender.male.yay * 100 / totalNay),
                    Math.round(this.props.item.countGender.female.nay * 100 / totalNay),
                    Math.round(this.props.item.countGender.other.nay * 100 / totalNay)]
              }
            ]
          };

        totalYay = 0;
        totalNay = 0;

        for (var key in this.props.item.countAge) {
            totalYay += this.props.item.countAge[key].yay
            totalNay += this.props.item.countAge[key].nay
        }

        const age = {
            labels: ['0-12', '13-18', '19-26', '27-40', '40-65', '65+'],
            datasets: [
                {
                label: 'YAY',
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                pointBackgroundColor: 'rgba(54,162,235,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54,162,235,1)',
                data: [Math.round(this.props.item.countAge.child.yay * 100 / totalYay),
                    Math.round(this.props.item.countAge.teen.yay * 100 / totalYay),
                    Math.round(this.props.item.countAge.youngAdult.yay * 100 / totalYay),
                    Math.round(this.props.item.countAge.adult.yay * 100 / totalYay),
                    Math.round(this.props.item.countAge.middleAgedAdult.yay * 100 / totalYay),
                    Math.round(this.props.item.countAge.senior.yay * 100 / totalYay)]
                },
                {
                label: 'NAY',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [Math.round(this.props.item.countAge.child.nay * 100 / totalNay),
                    Math.round(this.props.item.countAge.teen.nay * 100 / totalNay),
                    Math.round(this.props.item.countAge.youngAdult.nay * 100 / totalNay),
                    Math.round(this.props.item.countAge.adult.nay * 100 / totalNay),
                    Math.round(this.props.item.countAge.middleAgedAdult.nay * 100 / totalNay),
                    Math.round(this.props.item.countAge.senior.nay * 100 / totalNay)]
                }
            ]
        };

        totalYay = 0;
        totalNay = 0;

        for (var key in this.props.item.countContinent) {
            totalYay += this.props.item.countContinent[key].yay
            totalNay += this.props.item.countContinent[key].nay
        }

        const continent = {
            labels: ['NA', 'SA', 'EU', 'AF', 'AS', 'OC'],
            datasets: [
                {
                label: 'YAY',
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                pointBackgroundColor: 'rgba(54,162,235,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54,162,235,1)',
                data: [Math.round(this.props.item.countContinent.NA.yay * 100 / totalYay),
                    Math.round(this.props.item.countContinent.SA.yay * 100 / totalYay),
                    Math.round(this.props.item.countContinent.EU.yay * 100 / totalYay),
                    Math.round(this.props.item.countContinent.AF.yay * 100 / totalYay),
                    Math.round(this.props.item.countContinent.AS.yay * 100 / totalYay),
                    Math.round(this.props.item.countContinent.OC.yay * 100 / totalYay)]
                },
                {
                label: 'NAY',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [Math.round(this.props.item.countContinent.NA.nay * 100 / totalNay),
                    Math.round(this.props.item.countContinent.SA.nay * 100 / totalNay),
                    Math.round(this.props.item.countContinent.EU.nay * 100 / totalNay),
                    Math.round(this.props.item.countContinent.AF.nay * 100 / totalNay),
                    Math.round(this.props.item.countContinent.AS.nay * 100 / totalNay),
                    Math.round(this.props.item.countContinent.OC.nay * 100 / totalNay)]
                }
            ]
        };
        
        const genderOptions={
            scale: {
                ticks: {
                    display: false
                }
            },
            title: {
                display: true,
                text: 'Gender',
                fontColor: 'white'
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        };

        const ageOptions={
            scale: {
                ticks: {
                    display: false
                }
            },
            title: {
                display: true,
                text: 'Age',
                fontColor: 'white'
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        };

        const contOptions={
            scale: {
                ticks: {
                    display: false
                }
            },
            title: {
                display: true,
                text: 'Continents',
                fontColor: 'white'
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        };

        return [
            (<div key="gender" className={classes.radarChartContainer}><Radar title="Test" data={gender} options={genderOptions}/></div>),
            (<div key="age" className={classes.radarChartContainer}><Radar data={age} options={ageOptions}/></div>),
            (<div key="cont" className={classes.radarChartContainer}><Radar data={continent} options={contOptions}/></div>)
          ];
    }

    getTotalParticipation() {
        let data = [];

        for (var key in this.props.item.countGender) {
            data.push(this.props.item.countGender[key].yay + this.props.item.countGender[key].nay);
        }

        const gender = {
            labels: ['Male', 'Female', 'Other'],
            datasets: [{
                data: data,
                backgroundColor: [
                    '#E74C3C',
                    '#3498DB'
                ],
                hoverBackgroundColor: [
                    '#E74C3C',
                    '#3498DB'
                ]
            }]
        };

        data = [];

        for (var key in this.props.item.countAge) {
            data.push(this.props.item.countAge[key].yay + this.props.item.countAge[key].nay);
        }

        const age = {
            labels: ['0-12', '13-18', '19-26', '27-40', '40-65', '65+'],
            datasets: [{
                data: data,
                backgroundColor: [
                    '#E74C3C',
                    '#3498DB',
                    '#8E44AD',
                    '#F39C12',
                    '#16A085',
                    '#DC7633'
                ],
                hoverBackgroundColor: [
                    '#E74C3C',
                    '#3498DB',
                    '#8E44AD',
                    '#F39C12',
                    '#16A085',
                    '#DC7633'
                ]
            }]
        };

        data = [];

        for (var key in this.props.item.countContinent) {
            data.push(this.props.item.countContinent[key].yay + this.props.item.countContinent[key].nay);
        }

        const continent = {
            labels: ['NA', 'SA', 'EU', 'AF', 'AS', 'OC'],
            datasets: [{
                data: data,
                backgroundColor: [
                    '#E74C3C',
                    '#3498DB',
                    '#8E44AD',
                    '#F39C12',
                    '#16A085',
                    '#DC7633'
                ],
                hoverBackgroundColor: [
                    '#E74C3C',
                    '#3498DB',
                    '#8E44AD',
                    '#F39C12',
                    '#16A085',
                    '#DC7633'
                ]
            }]
        };

        const genderOptions={
            title: {
                display: true,
                text: 'Gender',
                fontColor: 'white'
            }
        };

        const ageOptions={
            title: {
                display: true,
                text: 'Age',
                fontColor: 'white'
            }
        };

        const contOptions={
            title: {
                display: true,
                text: 'Continents',
                fontColor: 'white'
            }
        };

        return [
            (<div key="gender" className={classes.barChartContainer}><Doughnut data={gender} options={genderOptions}/></div>),
            (<div key="age" className={classes.barChartContainer}><Doughnut data={age} options={ageOptions}/></div>),
            (<div key="cont" className={classes.barChartContainer}><Doughnut data={continent} options={genderOptions}/></div>)
          ];
    }

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

        

          const data5 = {
            labels: ['Eating', 'Drinking', 'Sleeping'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(54,162,235,0.2)',
                borderColor: 'rgba(54,162,235,1)',
                pointBackgroundColor: 'rgba(54,162,235,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54,162,235,1)',
                data: [65, 59, 90]
              },
              {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40]
              }
            ]
          };


          let comparisons = this.getComparisonCharts();
          let participation = this.getParticipationCharts();
          let totalParticipation = this.getTotalParticipation();

        return (
            <div>
                <div>
                    <h1 className={classes.titleText}>{this.props.item.name}</h1>
                    <button className={classes.button} onClick={() => this.props.setShowStats(false)}>Hide Stats</button>
                </div>
                <hr/>
                <h2 className={classes.titleText}>Comparisons</h2>
                {comparisons}
                <hr/>
                <h2 className={classes.titleText}>Total Participation</h2>
                {totalParticipation}
                <hr/>
                <h2 className={classes.titleText}>Participation % by Vote</h2>
                {participation}
            </div>
        )
    }
}

export default StatsCockpit;