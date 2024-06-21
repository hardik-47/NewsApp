import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/T0ED5w74XqimUZhKCnSotrllYBc=/0x0:5000x2813/1200x628/filters:focal(2500x1407:2501x1408)/cdn.vox-cdn.com/uploads/chorus_asset/file/25134412/combosportcrossoverconcepturbansuvconcept_4.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
