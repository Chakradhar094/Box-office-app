const Showmaindata=({name,genres,rating,image,summary})=>{
    return    (
       <div>
       <img src={image.medium} alt="imagse" />
        <h1>{name}</h1>
        <div>
         Genres:{
        genres.map((genre)=> <span key={genre}>{genre},</span>)}
        </div>
       <div>
        Rating :
        {rating.average?rating.average:'N/A'}
       </div>
       <div dangerouslySetInnerHTML={{__html:summary}}/>
         
       
       </div>
    );
}
export default Showmaindata;