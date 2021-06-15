import React from 'react';
import { Link } from 'gatsby';
import { Typography, Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    height: 9 * theme.spacing(5),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(5),
  },
  section: {
    minWidth: 100,
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  bottomText: {
    fontSize: '14px',
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing(4),
  },
  sectionSocial: {},
  itemSocial: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconSocial: {
    width: 40,
    height: 40,
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    background: 'white',
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      transition: '0.2s',
    },
    '&:hover svg': {
      width: 30,
      height: 30,
    },
  },
  tooltip: {
    backgroundColor: 'rgb(0 0 0 / 40%)',
    color: '#fff',
    padding: 5,
    fontSize: '.9em',
    fontWeight: '600',
  },
  Youtube: {
    display: (props) => (!!props.youtube ? 'block' : 'none'),
  },
  Facebook: {
    display: (props) => (!!props.facebook ? 'block' : 'none'),
  },
  Instagram: {
    display: (props) => (!!props.instagram ? 'block' : 'none'),
  },
  GitHub: { display: (props) => (!!props.gitHub ? 'block' : 'none') },
  Twitter: {
    display: (props) => (!!props.twitter ? 'block' : 'none'),
  },
  Twitch: {
    display: (props) => (!!props.twitch ? 'block' : 'none'),
  },
}));
const ItemSocial = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemSocial}>
      <div className={classes.iconSocial}>{children}</div>
    </div>
  );
};

const BottomFooter = ({
  copyright,
  mail,
  youtube,
  facebook,
  instagram,
  gitHub,
  twitter,
  twitch,
}) => {
  const classes = useStyles({
    youtube,
    facebook,
    instagram,
    gitHub,
    twitter,
    twitch,
  });
  return (
    <>
      <Grid
        container
        alignItems="center"
        wrap="wrap"
        className={classes.bottomBar}
      >
        <Grid
          container
          item
          md={4}
          justify="center"
          className={classes.section}
        >
          <Typography className={classes.bottomText}>
            {copyright}
          </Typography>
        </Grid>
        <Grid container item md={4} justify="center">
          <Typography className={classes.bottomText}>
            Email: {mail}
          </Typography>
        </Grid>
        <Grid container item md={4} justify="center">
          <Tooltip title="Twitter" classes={classes}>
            <Grid item xs={2} className={classes.Twitter}>
              <Link className={classes.link} to={twitter}>
                <ItemSocial>
                  <TwitterIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="Youtube" classes={classes}>
            <Grid item xs={2} className={classes.Youtube}>
              <Link className={classes.link} to={youtube}>
                <ItemSocial>
                  <YouTubeIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="Facebook" classes={classes}>
            <Grid item xs={2} className={classes.Facebook}>
              <Link className={classes.link} to={facebook}>
                <ItemSocial>
                  <FacebookIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="Instagram" classes={classes}>
            <Grid item xs={2} className={classes.Instagram}>
              <Link className={classes.link} to={instagram}>
                <ItemSocial>
                  <InstagramIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="GitHub" classes={classes}>
            <Grid item xs={2} className={classes.GitHub}>
              <Link className={classes.link} to={gitHub}>
                <ItemSocial>
                  <GitHubIcon />
                </ItemSocial>
              </Link>
            </Grid>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default BottomFooter;
