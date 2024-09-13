import React from 'react';
import { AppBar, Box, Button, Container, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const pages = ['players stats', 'blog', 'contact'];

export const Navbar = () => {
  
return (

    <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                          }}
                    >
                        Logo
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, display: 'block' }}
                            >
                                <Link style={{ color:'white', textDecoration:'none' }} 
                                    to = { 
                                        page.includes(" ") 
                                        ? `${ page.substring(0, page.indexOf(" ")).trim() }` 
                                        : `${ page }`  
                                    } 
                                    >
                                    { page }
                                </Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
  )
}
