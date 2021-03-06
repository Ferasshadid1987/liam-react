import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import DownloadIcon from '@material-ui/icons/ThumbUp';
import Views from '@material-ui/icons/Visibility';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 150,
    width: '100%',
    margin: '0 0',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'left'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'left'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Asset_photo"
            className={classes.image}
            src={product.url}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          style={{paddingTop: "12px"}}
          /* onclick={}*/
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
            {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
            <Grid
                className={classes.statsItem}
                item
            >

                <ArrowUpwardIcon className={classes.differenceIcon} />
                <Typography
                    className={classes.differenceValue}
                    variant="body2"
                >
                    {product.setLimasCost}L
                </Typography>
                <ArrowDownwardIcon className={classes.differenceIcon} />
            </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <DownloadIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
                {product.likes}
            </Typography>
          </Grid>

          <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.downloads}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
