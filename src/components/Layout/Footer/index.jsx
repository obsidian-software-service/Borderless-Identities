import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FooterNavBar from './FooterNavBar';
import BottomFooter from './BottomFooter';
import OctosoftLogo from '../../../assets/logoOctosoft.svg';

const useStyles = makeStyles((theme) => ({
  root: { margin: 0, padding: 0, maxWidth: 'none' },
  icon: { width: 100, height: 100, fill: '#007bff' },
  toolbar: {
    boxShadow: 'inset 0 2px 3px #ccc',
    color: theme.palette.main,
    background: theme.palette.primary.contrastText,
    '@media (max-width: 576px)': { flexDirection: 'column' },
  },
  section: {
    margin: theme.spacing(4),
    minWidth: 100,
  },
  sectionTitle: {
    color: theme.palette.primary.light,
    fontSize: '18px',
    fontWeight: 'bold',
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
  formContainer: {
    paddingTop: 10,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const footer = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        mail
        socialMedia {
          Facebook
          GitHub
          Instagram
          Twitch
          Twitter
          Youtube
        }
      }
    }
  `);

  const { mail, socialMedia } = footer.contentfulFooter;

  const { Facebook, GitHub, Instagram, Twitch, Twitter, Youtube } = socialMedia
    .values()
    .next().value;

  return (
    <>
      <Grid
        container
        justify="space-around"
        direction="row"
        alignItems="center"
        wrap="wrap"
        className={classes.toolbar}
      >
        <Grid
          container
          item
          md={2}
          alignItems="center"
          justify="center"
          direction="column"
          className={classes.section}
        >
          <Link
            className={classes.link}
            to="https://octosoftprofessionals.com/"
          >
            <OctosoftLogo className={classes.icon} />
            <Typography className={classes.sectionTitle}>OCTOSOFT</Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          container
          alignItems="center"
          justify="center"
          className={classes.section}
        >
          <FooterNavBar />
        </Grid>

        <BottomFooter
          mail={mail}
          facebook={Facebook}
          instagram={Instagram}
          gitHub={GitHub}
          youtube={Youtube}
          twitter={Twitter}
          twitch={Twitch}
        />
      </Grid>
    </>
  );
};

export default Footer;
