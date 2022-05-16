import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

export default function Demo() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  /* VARS SIMPLES*/
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const v = urlParams.get("v");
  const m = urlParams.get("m");
  console.log(v + "  " + m);
  /* */
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
      //console.log(progress);
      if (progress > 100) {
        if (v == 14 && m == 1) {
          window.location.href = "https://redcard1.netlify.app/";
        }
        if (v != 14 && m == 1) {
          window.location.href =
            "https://pirlotv-redirecciones.blogspot.com/2020/08/actualizar-app.html";
        }
        if (v == "null" && m == 1) {
          window.location.href =
            "https://pirlotv-redirecciones.blogspot.com/2020/08/actualizar-app.html";
        }
        //window.location.href = "https://redcard1.netlify.app/";
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h5" align="center">
        Cargando CALENDARIO
      </Typography>
      <br />
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </div>
  );
}
