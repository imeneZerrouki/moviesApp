import React, { useEffect, useState }  from 'react';
import Movie from './Movie';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
const Movies = () => {
    const[data,setData] = useState([]);
   /* data c'est un tableau et setData c'est pour mettre les données dans notre data*/
    /* stocker des donnees dans react 'states' les ouk de react */
    /* data nom de la variable, 
                        setNom l'element par lequel on passera pour actualiser cette données*/
    /*use effect pour fetcher la data et mettre notre requete pour aller recuperer nos donnees */
    useEffect(()=>{
        const fetchData = async()=> {
        const res= await axios(
                'https://api.themoviedb.org/3/discover/movie?api_key=99eef0b95f89b83a5c09ff60eaa72d4d',
                );
            setData(res.data.results)   /*mettre le resultat dans notre donnée */     
        };
        
        fetchData(); /* on lance la fonction  */
    },[]);
    
    const searchData = async(e)=>{
        let searchValue = e.target.value;
        console.log(searchValue);
        const res= await axios(
              'https://api.themoviedb.org/3/discover/movie?api_key=99eef0b95f89b83a5c09ff60eaa72d4d',
            );
            setData(res.data.results
               .filter((movie)=>
                  movie.original_title.toString().toLowerCase().includes(searchValue.toString().toLowerCase()))); 
                       
    };            
     
    return (
        <div className="movies">
            <header>
                <h2> Movies</h2>
                <form className="hello" noValidate autoComplete="off" >
                    <TextField 
                        id="outlined-basic" 
                        label="Search..." 
                        variant="outlined" 
                        color="secondary"
                        onChange={searchData}/>
                </form>
            </header>
            <div className="movies-list">
                {data.map((movie) => (
                    <Movie key ={movie.id} movie={movie}/> 
                ))}
            </div>
        </div>
    );
};

export default Movies;