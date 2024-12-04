import { useEffect, useState } from "react"
import { useGetMovieQuery } from "../redux/api/movie-api"
import { MOVIE_LISTS } from "../static"
import Pagination from '@mui/material/Pagination';
import { useNavigate, useSearchParams } from "react-router-dom";


const Home = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const [page, setPage] = useState(+searchParams.get("count") || 1);
   const [type, setType] = useState(searchParams.get("path") || "now_playing")
   console.log({type});
   
   const {data} = useGetMovieQuery({type, params: {page}})
   const navigate = useNavigate()

   useEffect(()=>{
    if(!searchParams.get("path")){
        setType("now_playing")
    }
   }, [searchParams.get("path")])
   
   const handleChange = (event, value) => {
        setPage(value);
        const params = new URLSearchParams(searchParams);
        params.set("count", value)
        setSearchParams(params)
    };

    const handleChangeType = (path)=>{
        setType(path)
        setPage(1)
        setSearchParams({path, count: 1})
    }
  return (
    <div>
        <h2 className='text-center text-3xl bg-primary'>Home</h2>
        <div className="flex gap-5 justify-center">
            {MOVIE_LISTS?.map(item=> (
                <button onClick={()=>handleChangeType(item.path)} key={item.id}>{item.title}</button>
            ))}
        </div>
        <div className="flex flex-wrap gap-3 ">
            {
                data?.results?.map(movie=> (
                    <div key={movie.id}>
                        <img onClick={()=> navigate(`/movie/${movie.id}`)} src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} width={300}  alt="" />
                        <h3>{movie.title}</h3>
                        <p>{movie.vote_average}</p>
                    </div>
                ))
            }
        </div>
        <div className="flex justify-center pt-6 pb-10">
        <Pagination count={data?.total_pages > 500 ? 500 : data?.total_pages } page={page} onChange={handleChange} />
        </div>
    </div>
  )
}

export default Home