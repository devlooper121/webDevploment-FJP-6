import { Component } from "react";
import axios from "axios";
import {movies} from "../movieData"

class Banner extends Component {
    constructor(){
        super()
        this.state = {
            movieData : "",
        }
    }
    async componentDidMount(){
        let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=81242a2aa2066e052c78ec9ac1700c59`
        let res = await axios.get(url)
        this.setState({movieData:res.data.results[0]})
        
    }
    render() {
        // console.log(this.state.movieData)
        let backdrop_path = this.state.movieData.backdrop_path;
        return (
            <>
                <div className="card banner-card">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} class="card-img-top" alt="..."/>
                    <div className="card-body banner-title-card">
                        <h5 className="card-title banner-title">{this.state.movieData.title}</h5>
                        <p className="card-text banner-text">{this.state.movieData.overview}</p>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Banner;