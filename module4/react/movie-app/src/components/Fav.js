import { Component } from "react";
import { movies } from "../movieData";


class Fav extends Component {
    constructor(){
        super()
        this.state = {
            genres : [],
            movies : [],
            currGener : "All geners",
            serchInput:"",
        }
    }
    componentDidMount(){
        this.update();
    }
    update = ()=>{
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-data") || "[]");
        let genrePresent = ["All geners"]
        data.map(ele=>{
            if(!genrePresent.includes(genreIds[ele.genre_ids[0]])){
                genrePresent.push(genreIds[ele.genre_ids[0]])
            }
        })
        this.setState({
            genres : [...genrePresent],
            movies : [...data]
        })
    }
    handelChangeGenre = (genre)=>{
        this.setState({
            currGener : genre
        },this.updateMovies)
    }
    updateMovies= () =>{
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-data") || "[]");
        if(this.state.currGener === "All geners"){
            this.setState({
                movies : [...data]
            })
        }else{
            this.setState({
                movies : data.filter(movie=> genreIds[movie.genre_ids[0]]==this.state.currGener)
            })
        }
    }
    /**
     * 
     * @param {*} id
     * this delete the movie from localStorage 
     */
    removeFromFav = (id)=>{
        let data = JSON.parse(localStorage.getItem("movies-data") || "[]");
        data = data.filter(ele=>ele.id!=id);
        localStorage.setItem("movies-data",JSON.stringify(data))
        this.update()
    }
    /**
     * 
     * @param {String} userInput
     * userInput is e.target.value which is value of input tag
     * this update the state serchInput tha help to search movies
     * so after every state change we callBack serchMovie function  
     */
    serchHandeler = (userInput) =>{
        this.setState({
            serchInput:userInput
        },this.searchMovie)
    }
    /**
     * this filter the movie on the basis of search_input form state 
     * this implement by reading data from local
     * and filtering on the basis of current genre
     * then apply filter to update state.movies
     */
    searchMovie = ()=>{
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-data") || "[]");
        let filtered = []
        if(this.state.currGener === "All geners"){
            filtered = data;
        }else{
            filtered : data.filter(movie=> genreIds[movie.genre_ids[0]]==this.state.currGener)
        }
        let searchedMovie = filtered.filter(ele =>
            ele.title.toLowerCase().includes(this.state.serchInput.toLowerCase())
        )
        this.setState({
            movies:searchedMovie
        })
    }
    sortDec = (flag) =>{
        let temp = [...this.state.movies]
        temp.sort((a,b)=>{
            if(flag === 0){
                return b.popularity - a.popularity
            }else if(flag===1){
                return b.vote_average - a.vote_average
            }
        })
        this.setState({
            movies : [...temp]
        })
    }
    sortInc = (flag) =>{
        let temp = [...this.state.movies]
        temp.sort((a,b)=>{
            if(flag === 0){
                return a.popularity - b.popularity
            }else if(flag===1){
                return a.vote_average - b.vote_average
            }
        })
        this.setState({
            movies : [...temp]
        })
    }
    render() {
        
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
       
        return (
            <div className="container fav-container">
                <div className="row">
                    <div className="col me-5">
                        <ul class="list-group">
                            
                            {this.state.genres.map(genre=>(
                                this.state.currGener== genre ? (<li className="list-group-item active">{genre}</li>):
                                <li className="list-group-item " onClick={()=>this.handelChangeGenre(genre)}>{genre}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-9">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="search" aria-label="query" onChange={(e)=>this.serchHandeler(e.target.value)} />
                            <input type="number" class="form-control" aria-label="content-per-page" />
                        </div>
                        {/* table  */}
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col" ><button className="btn btn-sm btn-primary" onClick={()=>this.sortDec(0)} ><i className="fa fa-sort-up"></i></button> 
                                            Popularity
                                        <button className="btn btn-sm btn-primary" onClick={()=>this.sortInc(0)}><i className="fa fa-sort-down"></i></button></th>
                                    <th scope="col"><button className="btn btn-sm btn-primary" onClick={()=>this.sortDec(1)}><i className="fa fa-sort-up"></i></button>
                                        rating
                                    <button className="btn btn-sm btn-primary" onClick={()=>this.sortInc(1)}><i className="fa fa-sort-down"></i></button></th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.movies.map(movieEle=>(
                                    <tr>
                                    <th scope="row" ><img style={{width:"130px", margin:"5px 10px 5px 0"}} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} />{movieEle.title}</th>
                                    <td>{genreIds[movieEle.genre_ids[0]]}</td>
                                    <td>{movieEle.popularity}</td>
                                    <td>{movieEle.vote_average}</td>
                                    <td><button className="btn btn-danger" onClick={()=>this.removeFromFav(movieEle.id)}>delete</button></td>
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
                        {/* page no nav  */}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a class="page-link" href="#">1</a></li>
                                <li className="page-item"><a class="page-link" href="#">2</a></li>
                                <li className="page-item"><a class="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }
}

export default Fav;