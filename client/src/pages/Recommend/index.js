import {useSearchParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {useQuery} from "@apollo/client";
import {MOVIES_BY_IDS_QUERY} from "./queries";
import {Grid} from "@mui/material";
import {MovieCard} from "../../components";

const Recommend = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {loading, error, data} = useQuery(MOVIES_BY_IDS_QUERY, {
        variables: {
            ids: searchParams.get('ids')?.split(',').map((id) => +id)
        }
    });

    if (loading) {
        <div>loading</div>
    }

    if (error) {
        <div>Error</div>
    }


    return (
        <>
            <Typography variant="h1" gutterBottom>
                {searchParams.get('title')}
            </Typography>
            {data && (<Grid container spacing={2}>
                    {data.moviesByIds.map((movie) => (
                        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                            <MovieCard movie={movie} isPreviewMode={true} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}

export default Recommend;