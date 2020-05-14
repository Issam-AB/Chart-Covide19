import React, { Component } from 'react'
// import Cards from './Component/Cards/Cards'
// import Chart from './Component/Chart/Chart'
// import ContryPicker from './Component/ContryPicker/ContryPicker'
import {Cards,Chart,ContryPicker} from './Component'
import style from './App.module.css'
import {fetchData} from './api/index'
import coronaImage from './image/unnamed.png'

class App extends Component {
 
  state = {
    data:{},
    country : ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({
      data : fetchedData 
    });
  }

  handleContryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data : fetchedData, country: country });
    //fetch Data 
    //set the state
  }

  render() {
    const { data, country } = this.state;
    return(
      <div className={style.container}>
      <img className={style.image} src={coronaImage} alt="covid-19" />
      <Cards data={data} />
      <ContryPicker  handleContryChange = {this.handleContryChange} />
      <Chart data={data} country={country} />
    </div>
    )
  }
}
export default  App ;

