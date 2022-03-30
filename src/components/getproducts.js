import React, { Component } from 'react'
import axios from 'axios'

export default class Getproducts extends Component {
    state = {
        type: "All",
        productdata:[],
    };

    componentDidMount() {
        axios.get("/api/products").then(res => {
            this.setState({productdata: res.data})
        });
    }
    filter(type) {
        return() => {
            this.setState({type}) 
        }
    }
  render() {
    return (
      <div>
          <h6>Filter By Category</h6>
          <div6>
              <button onClick={this.filter("All")}>All</button>
              <button onClick={this.filter("Strength")}>Strength Training</button>
              <button onClick={this.filter("Cardio")}>Cardio</button>
              <button onClick={this.filter("Rehabilitation")}>Rehabilitation</button>
              <button onClick={this.filter("Resistance")}>Resistance Training</button>
          </div6>
          <div className= "grid-container">
              {
                  this.state.productdata
                  .filter((record)=>{
                      if(this.state.type === "All") {
                          return true
                      } else{
                          return this.state.type === record.Category
                      }
                  })
                  .map(record => (
                      <div className = "griditem">
                      <h1>{record.Title}</h1>
                      <img src= {record.Image} alt= {record.Title} />
                      <h3>{record.Title}</h3>
                      <p>${record.Price}</p>
                      <p>{record.ProducDesc}</p>
                      <button>Buy Now!</button>
                    </div>
                  ))
              }
          </div>
      </div>


    )
  }
}
