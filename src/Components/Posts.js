import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = ({loading, posts}) => {
    const classes = useStyles();
    if (loading) {
        return (
            <h2> Loading... </h2>
        )
    }
    return (
        <>
            {posts.map((item) => (
                <Card className={classes.root} key={item.key}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {item.id}. {item.title}
                        </Typography>
                        <Typography gutterBottom>
                            {item.body}
                        </Typography>
                    </CardContent>
                </Card>
            ))}    
        </>
  );
}

export default Posts;
