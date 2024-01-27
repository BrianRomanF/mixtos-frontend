import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Social from "./Social";
import Hidden from "@mui/material/Hidden";
import Zoom from "@mui/material/Zoom";
import field from "../images/field.jpg";
//import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    position: "relative",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  heroImage: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return (
    <Paper className={styles.section} id="about">
      <img
        className={styles.heroImage}
        src={field}
        alt=""
        style={{ position: "absolute" }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography
                component="h1"
                variant="h3"
                style={{ color: "white" }}
              >
                BECOME THE BEST.
              </Typography>
              <Typography variant="h6" style={{ color: "white" }}>
                Embrace the challenges, learn from each match, and cultivate a
                passion for the game that propels you beyond limits. With
                persistence and teamwork, you have the potential to rise above,
                making every game an opportunity to showcase your growth and
                claim your spot as the standout players on the pitch.
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:address@email.com"
                  variant="outlined"
                  color="secondary"
                >
                  Log in
                </Button>
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  );
}
