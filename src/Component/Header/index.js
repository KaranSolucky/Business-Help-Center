import React from 'react'
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ComponeyLogo from "../../assets/images/companyLogo.svg"
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className='header__Container'>
            <Container fixed>
                <div className='header__wrapper'>
                    <div className='header__leftSide'>
                        <div className='company__logoContainer'>
                            <img src={ComponeyLogo} alt="Componey logo" />
                        </div>
                        <div className='header__Content'>
                            <h1 className='header__Text'>Support Inbox</h1>
                        </div>
                    </div>
                    <div className='header__leftSide'>
                        <IconButton >
                            <SearchIcon sx={{ color: "#ffffff", fontSize: 24 }} />
                        </IconButton>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header