import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, Toolbar, Container, Typography, Button, Box} from '@material-ui/core'
import {Link} from 'react-router-dom';

import './_app-header.scss';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
        color: '#fff',
    },
    title: {
        flexGrow: 1,
    },
    header: {
        background: '#800000',
    },
    lang: {
        position: 'absolute',
        right: 5,
        zIndex: 1101,
        background: 'none',
    },
    link: {
        padding: '14px 24px',
        background: '#660000',
        color: '#fff',
        textDecoration: 'none',
    },
}))

const AppHeader = () => {
    const classes = useStyles();

    const {t} = useTranslation()

    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("ru");

    const handleLangChange = evt => {
        const lang = evt.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <>

            <IconButton aria-label="menu" className={classes.menuButton}>
                <MenuIcon />
            </IconButton>
            <AppBar position="fixed" className={classes.header}>
                <Container fixed maxWidth="md">
                    <Toolbar>

                        {/* <Typography variant="h6" color="initial" className={classes.title}>Tawmant</Typography>
                        <Box mr={3}>
                            <Button variant="outlined" color="light">Log in</Button>
                        </Box>
                        <Button variant="contained" color="secondary">Sign Up</Button> */}
                        <Box className={classes.nav}>
                            <Link to="/" className={classes.link + ' header__link'}>{t('header.main')}</Link>
                            <Link to="/" className={classes.link}>{t('header.main')}</Link>
                            <Link to="/" className={classes.link}>{t('header.main')}</Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <select onChange={handleLangChange} value={language} className={classes.lang}>
                <option value="en">EN</option>
                <option value="ru">ru</option>
                <option value="kg">kg</option>
            </select>
        </>
    )
}

export default AppHeader;