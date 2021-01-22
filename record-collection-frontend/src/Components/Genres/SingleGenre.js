import React, {useState, useEffect} from 'react'
import '../../Pages/Show.css';


const SingleGenre = (props) => {
    const [singleGenre, setSingleGenre] = useState ({});
    const fetchSingleGenre = async () => {
        try {
            console.log(props)
            const response = await fetch(`http://record-collection-api.herokuapp.com/genres/${props.match.params.id}`)
            const data = await response.json();
            setSingleGenre(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchSingleGenre();
    }, []);
    console.log(singleGenre);

    return(
        <div className="Show">
        
             <h1 className="showtitle">{singleGenre.name}</h1>
             <div className="showlist">
                    { singleGenre.artists
                        ? singleGenre.artists.map((artist) => {
                            return (
                                <div className="oneshow">Artist: {artist.name}</div>
                            )
                        })
                        : <h1>Loading...</h1>
                    }
                    { singleGenre.albums
                        ? singleGenre.albums.map((album) => {
                            return (
                                <div className="oneshow">Album: {album.name}</div>
                            )
                        })
                        : <h1>Loading...</h1>
                    }
                    { singleGenre.songs
                        ? singleGenre.songs.map((song) => {
                            return (
                                <div className="oneshow">Songs: {song.name}</div>
                            )
                        })
                        : <h1>Loading...</h1>
                    }
            </div>
            
        </div>
    )
}

export default SingleGenre;