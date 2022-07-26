import { Component } from "react";
import axios from "axios";
import {movies} from "../movieData"

class MovieList extends Component{
    constructor(){
        super()
        this.state = {
            hover: "",
            listArr:[1],
            details: "",
            pageNo:1,
            movieData:[],
            favourites:[],
        }
    }
    async componentDidMount(){
        console.log("run componentDivMount")
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.pageNo}`
        let res = await axios.get(url)
        this.setState({movieData:[...res.data.results]})
        // console.log(res);
    }
    updateMovieList = async ()=>{
        // console.log("run updateMovieList")
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.pageNo}`
        let res = await axios.get(url)
        this.setState({movieData:[...res.data.results]})
    }
    nextPageHandler=()=>{
        this.setState({
            pageNo:this.state.pageNo+1,
            listArr:[...this.state.listArr,this.state.listArr.length+1],
        },this.updateMovieList)
    }
    prevPageHandler=()=>{
        if(this.state.pageNo>1){
            this.setState({
                pageNo:this.state.pageNo-1,
                listArr:[...this.state.listArr,this.state.listArr.length-1],
            },this.updateMovieList)
        }
    }
    updateHandler = (page)=>{
        if(page!=this.state.pageNo){
            this.setState({
                pageNo:page
            },this.updateMovieList)
        }
        
    }
    favouriteHandeler = (movieEle)=>{
        let movieData = JSON.parse(localStorage.getItem("movies-data") || "[]");
        if(this.state.favourites.includes(movieEle.id)){
            // remove
            movieData = movieData.filter(movie=>movie.id!=movieEle.id)
        }else{
            movieData.push(movieEle)
        }
        localStorage.setItem("movies-data", JSON.stringify(movieData))
        this.favouriteStateHandeler();
    }
    favouriteStateHandeler = ()=>{
        let movieData = JSON.parse(localStorage.getItem("movies-data") || "[]")
        let temp = movieData.map(movie=>movie.id)
        this.setState({
            favourites:[...temp]
        },console.log(this.state.favourites))
    }
    render(){
        console.log(this.state.pageNo);
        
        let movieArr = this.state.movieData
        return(
            <>
            <div>
                <h3 className="text-center " ><strong>Trending</strong></h3>
            </div>
            <div className="movie-container" >
                {this.state.details !== "" && (
                    <>
                     <div className="card view-card" >
                        <button className="btn btn-dark cncl-btn" onClick={()=>this.setState({details:""})} >X</button>
                        <div className="view-img">
                            <img src={`https://image.tmdb.org/t/p/original${this.state.details.backdrop_path}`} class="card-img-top " alt="..."/>

                        </div>
                        
                        <div className="card-body view-title-card">
                            <h5 className="card-title view-title">titele : {this.state.details.title}</h5>
                            <h5 className="card-title view-title">language : {this.state.details.original_language}</h5>
                            <h5 className="card-title view-title">overview : {this.state.details.overview}</h5>
                            <h5 className="card-title view-title">release date : {this.state.details.release_date}</h5>
                            <h5 className="card-title view-title">popularity {this.state.details.popularity}</h5>
                        </div>
                    </div>
                    </>
                ) }
                {movieArr.map(movieEle=>
                    <div className="card movie-card"  onMouseEnter={()=>this.setState({hover:movieEle.id})} onMouseLeave={()=> this.setState({hover:""})}>
                        <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} class="card-img-top" alt="..."/>
                        <h5 className="card-title movie-title">{movieEle.title}</h5>
                        <div className="card-body movie-title-card">
                            {/* <p className="card-text banner-text">{movieEle.overview}</p> */}
                            {this.state.hover === movieEle.id && (
                                <a  type="button" className="btn btn-primary fav-btn" onClick={()=>this.favouriteHandeler(movieEle)}>
                                    {this.state.favourites.includes(movieEle.id) ? "Remove from favourite" : "Add to favourite"}
                                </a>
                                ) // we cant use if else so we using condition as like that
                            }
                            
                        </div>
                    </div>
                )}
            </div>
            <div style={{
                display:"flex",
                justifyContent: "center"
            }}>
                <nav aria-label="Page navigation Example"> 
                {/* page navigation from bootstrap */}
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={this.prevPageHandler} >previous</a></li>
                        {this.state.listArr.map(page=>{
                            if(this.state.pageNo == page){
                                return(
                                    <li className="page-item"><a className="page-link active" onClick={()=>this.updateHandler(page)} >{page}</a></li>
                                )
                            }
                            return(
                            <li className="page-item"><a className="page-link" onClick={()=>this.updateHandler(page)} >{page}</a></li>
                        )})}
                        
                        
                        <li className="page-item"><a className="page-link" onClick={this.nextPageHandler} >Next</a></li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }
}

export default MovieList 