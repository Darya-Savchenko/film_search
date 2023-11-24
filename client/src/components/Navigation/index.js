import {useCallback, useContext, useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Drawer, Hidden,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {LOCALES} from "../../const";
import translate from '../../utils/translate';
import {FormattedMessage} from "react-intl";
import {AppContext} from "../../providers/context";

const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const {state, dispatch} = useContext(AppContext)

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, []);

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"

        >
        </Box>
    );

    return (
        <Box>
            <AppBar sx={{flexGrow: 1}} position="static">
                <Toolbar>
                    <Hidden only={['lg', 'xl']}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon onClick={() => setIsDrawerOpen(true)}/>
                        </IconButton>
                    </Hidden>
                    <Typography component={Link} to="/" variant="h6"
                                sx={{color: "white", flexGrow: 1, textDecoration: 'none'}}>
                        <FormattedMessage id="navigation.home" />
                    </Typography>
                    <Box>
                        <Button disabled={state.locale === LOCALES.ENGLISH}
                                sx={{my: 2, color: 'white'}}
                                onClick={() => setLanguage(LOCALES.ENGLISH)}>
                            ENGLISH
                        </Button>
                        <Button disabled={state.locale === LOCALES.UKRAINIAN}
                                sx={{my: 2, color: 'white'}}
                                onClick={() => setLanguage(LOCALES.UKRAINIAN)}>
                            Українська
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                {list()}
            </Drawer>
        </Box>

    );
}

export default Navigation;
