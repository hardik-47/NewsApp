import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {


   static defaultProps = {
    country:'in',
    category:'general'
   }
   static propTypes={
    country:PropTypes.string,
    category:PropTypes.string

   }
  constructor(props) {
    super(props);
    this.state = {
        articles : [],
        page:1,
        loading : false

    }
    document.title=`${this.props.category}-Newscom`;
}

 async componentDidMount(){

  console.log("cdm");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83de7b56bb9e498ab94693791e4947c2`;
  let data=await fetch(url);
  let parsedData= await data.json()
console.log(parsedData);
this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults})

 }

 handleonxt= async ()=>{

   if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

   }
   else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83de7b56bb9e498ab94693791e4947c2&page=${this.state.page+1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData= await data.json()
  console.log(parsedData);
  this.setState({articles:parsedData.articles,
    page:this.state.page + 1
  })
  
   }
 
 }
   
 handleoprev= async ()=>{

  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=83de7b56bb9e498ab94693791e4947c2&page=${this.state.page-1}&pageSize=20`;
  let data=await fetch(url);
  let parsedData= await data.json()
console.log(parsedData);
this.setState({articles:parsedData.articles,
  page:this.state.page - 1
})
 }
  render() {
    return (
      <div className="container my-3" >
        <h2 style={{marginTop:'90px'}}>Newscom - Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem className="text-truncate" title={element.title?element.title:""} description={element.description?element.description:""}
              imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author} date={element.publishedAt} ></NewsItem>
               </div>
          })}

          
        </div>
        <div className="container d-flex justify-content-between">
        
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handleoprev}>Prev</button>
        <button type="button" class="btn btn-dark" onClick={this.handleonxt}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
