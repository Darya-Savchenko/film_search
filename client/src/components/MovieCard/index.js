import {Box, Card, CardContent, CardMedia, styled, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import {CardMenu} from "../index";
import MenuItem from "@mui/material/MenuItem";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {FormattedMessage} from "react-intl";

const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
    }
}))

const PlusIcon = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, .6)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
        opacity: 1,
        transition: '0.3s',
    }
}))

const MovieCard = ({movie, onCardSelect, isPreviewMode }) => {
    return (
        <Card sx={{ maxWidth: 250, position: 'relative' }}>
            {!isPreviewMode && (
                <CardMenu>
                    <MenuItem onClick={() => onCardSelect(movie)}>
                        <FormattedMessage id="select"/>
                    </MenuItem>
                </CardMenu>
            )}
            <Box sx={{ position: 'relative'}}>
                <CardMedia
                    component="img"
                    height="250"
                    image={movie.image}
                    alt={movie.title}/>
                {!isPreviewMode && (
                    <PlusIcon onClick={() => onCardSelect(movie)}>
                        <AddBoxOutlinedIcon sx={{ fontSize: 80 }}/>
                    </PlusIcon>
                )}
            </Box>
            <CardInfo>
                <Typography variant="h5" gutterBottom component="div">
                    {movie.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {movie.releaseDate}
                </Typography>
            </CardInfo>
        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
    onCardSelect: PropTypes.func,
    isPreviewMode: PropTypes.bool
}

export default MovieCard;