import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchImages } from "../redux/actions/fetch-image";
class Images extends Component {
    componentDidMount(){
      this.props.FetchImages()
    }
    
  render() {
    console.log(this.props.images)
    return <div>
      {this.props.images.length !==0 ? this.props.images.map(img=>{
        return<img key={img.id}src={img.download_url} className="img-fluid" alt="Responsive image"/>
        
      }):null}
    </div>;
  }
}
const mapStateToProps = (state) => ({
  images: state.images.listOfImages,
});
export default connect(mapStateToProps, { FetchImages })(Images);

