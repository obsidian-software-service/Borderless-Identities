import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import KorovaIcon from '../../assets/logo_icono2.svg';

const useStyles = makeStyles((theme) => ({
  icon: { width: 100, height: 100 },
  sectionTitle: {
    cursor: 'default',
    color: theme.palette.primary.light,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  links: {
    maxWidth: 300,
    '@media (max-width: 576px)': { flexDirection: 'column' },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    color: 'gray',
    paddingTop: 5,
    fontSize: '14px',
    fontFamily: theme.typography.fontFamily,
  },
}));

const FooterBar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <KorovaIcon className={classes.icon} />
        <Typography variant="h3" className={classes.sectionTitle}>
          KOROVA DIGITAL
        </Typography>
      </Grid>

      <Grid item xs={9} container justify="space-around">
        <Link className={classes.link} to="/">
          <Typography
            variant="subtitle1"
            className={classes.linkText}
          >
            Home
          </Typography>
        </Link>

        <Link
          className={classes.link}
          to="blog/static-sites-are-great"
        >
          <Typography
            variant="subtitle1"
            className={classes.linkText}
          >
            Quiénes somos?
          </Typography>
        </Link>

        <Link className={classes.link} to="/">
          <Typography
            variant="subtitle1"
            className={classes.linkText}
          >
            Eventos
          </Typography>
        </Link>
        <Link className={classes.link} to="/">
          <Typography
            variant="subtitle1"
            className={classes.linkText}
          >
            COVID-19
          </Typography>
        </Link>
        <Link className={classes.link} to="/">
          <Typography
            variant="subtitle1"
            className={classes.linkText}
          >
            Membresia
          </Typography>
        </Link>
        <Link className={classes.link} to="/contact">
          <Typography
            variant="subtitle1"
            className={classes.linkText}
          >
            Contactanos
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default FooterBar;
