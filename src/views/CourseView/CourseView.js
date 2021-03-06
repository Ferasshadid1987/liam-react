import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ProductsToolbar, ProductCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const CourseView = () => {
  const classes = useStyles();

  const products = JSON.parse(localStorage.getItem("current_course"));
  //console.log(JSON.parse(localStorage.getItem("current_course")));
  return (
    <div className={classes.root}>

      <div className={classes.content}>
        <Grid
          container
          spacing={2}
        >


            <Grid
              item
              key={products._id}
              lg={12}
              md={12}
              xs={12}
            >
              <ProductCard product={products} />
            </Grid>

        </Grid>
      </div>

    </div>
  );
};

export default CourseView;
