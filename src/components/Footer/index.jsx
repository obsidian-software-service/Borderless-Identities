import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryInput from '../PrimaryInput';
import FooterNavBar from './FooterNavBar';
import OctosoftLogo from '../../assets/logoOctosoft.svg';
import BottomFooter from './BottomFooter';

const useStyles = makeStyles((theme) => ({
  root: { margin: 0, padding: 0, maxWidth: 'none' },
  icon: { width: 100, height: 100 },
  toolbar: {
    boxShadow: 'inset 0 2px 3px #ccc',
    padding: theme.spacing(4),
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
  const [email, setEmail] = useState('');
  const classes = useStyles();
  const footer = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        mail
        copyright
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

  const { mail, copyright, socialMedia } = footer.contentfulFooter;

  const {
    Facebook,
    GitHub,
    Instagram,
    Twitch,
    Twitter,
    Youtube,
  } = socialMedia.values().next().value;

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
            <Typography className={classes.sectionTitle}>
              OCTOSOFT
            </Typography>
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

        <Grid
          item
          xs={12}
          md={3}
          container
          direction="column"
          className={classes.section}
        >
          <Typography variant="h3" className={classes.sectionTitle}>
            SUSCRÍBITE
          </Typography>
          <Typography className={classes.linkText}>
            No se pierda nuestras últimas novedades!!!
          </Typography>
          <Grid item xs={9} className={classes.formContainer}>
            <form>
              <input type="hidden" name="form-name" value="contact" />
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                label="Tu Email"
                variant="filled"
                type="email"
                required
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
      <BottomFooter
        mail={mail}
        copyright={copyright}
        facebook={Facebook}
        instagram={Instagram}
        gitHub={GitHub}
        youtube={Youtube}
        twitter={Twitter}
        twitch={Twitch}
      />
    </>
  );
};

export default Footer;
