import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Interviewers(props) {

  return (
    <Grid container>
      <Grid item sm={12}>
        <Grid style={{ margin: "10px" }}>
          <h3 style={{ textAlign: "left" }}>Mentors: </h3>
        </Grid>
        <Grid style={{ margin: "10px" }}>
        <Stack direction="row" spacing={2}>
          {props.data.interviewers
            .filter((data) => (data.role === "TE" || data.role==="BE"))
            .map((interviewer, i) => (
              <>
              <div>hii</div>
              </>
              // <div key={i} style={{ margin: "10px" }}>
              //   <Avatar
              //     {...stringAvatar(interviewer.user.name)}
              //     style={{ margin: "10px" }}
              //   />
              //   {interviewer.user.name}
              // </div>
            ))}
        </Stack>
        </Grid>
      </Grid>
      
    </Grid>
  );
}
