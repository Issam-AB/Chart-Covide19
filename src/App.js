import React, { Component } from 'react'
// import Cards from './Component/Cards/Cards'
// import Chart from './Component/Chart/Chart'
// import ContryPicker from './Component/ContryPicker/ContryPicker'
import {Cards,Chart,ContryPicker} from './Component'
import style from './App.module.css'
import {fetchData} from './api/index'

class App extends Component {
 
  state = {
    data:{},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({
      data : fetchedData 
    });
  }

  render() {
    const { data } = this.state;
    return(
      <div className={style.container}>
      <Cards data={data} />
      <Chart />
      <ContryPicker />
    </div>
    )
  }
}
export default  App ;

