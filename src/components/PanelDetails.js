import React, { Fragment, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./Row";
import { Route, Routes } from "react-router";
import { Outlet, Navigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Button, Grid } from "@mui/material";
import ScorePage from "../pages/ScorePage";
import { useNavigate } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function PanelDetails(props) {
  console.log(props.user[0].interviewees[2].application)
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  function CustomTableCell(prop) {
    const { values } = prop;
    console.log(values)
    return (
      <TableCell>
        {Array.isArray(values) && values.map((value) => (
        <Chip key={value} label={value}></Chip>
      ))}

      </TableCell>
    );
  }

  function createData(name, stacks, schedule,submission) {
    return {
      name,
      stacks,
      schedule,
      submission
    };
  }

  const navigate = useNavigate();
  //console.log((props.interviewees))
  const rows = [
  ];
  let l=props.user[0].interviewees.length;
  for(let i=0;i<l;i++)
  {
    let st=[];
   let stl=props.user[0].interviewees[i].application.stack.length;
    for(let j=0;j<stl;j++)
    {
      st.push(props.user[0].interviewees[i].application.stack[j].name)
    }
    console.log(st)
    rows.push(createData(props.user[0].interviewees[i].user.name,st,'nan','aba'))
  }
  console.log(rows);
  const displaystack=()=>{
    let sl=props.user[0].interviewees[0].application.stack.length;
  };
console.log(props.user[0].interviewees[2].application.stack[0].name)

  return (

    <Grid item sm={12}>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name </TableCell>
              <CustomTableCell align="center">Skills</CustomTableCell>
              <TableCell align="center">Scheduled interview</TableCell>
              <TableCell align="center"> Submission Detail </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <CustomTableCell values={row.stacks}></CustomTableCell>
              <TableCell align="center">{row.schedule}</TableCell>
              <TableCell align="center"><Button><AssignmentIcon/></Button></TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
// {props.user.map((item, index) => (
//   <React.Fragment key={index}>
//     {item.interviewees.map((interviewee, i) => (
//       <React.Fragment key={i}>
//         {rows.map((_, index) => (
//           <Row
//             key={index}
//             value={index}
//             row={createData(
//               interviewee.user.name ? interviewee.user.name : "",
//               interviewee.application.stack.map((obj, i) => (
//                 <Fragment key={i}>
//                   <Chip
//                     label={obj.name}
//                     color="secondary"
//                     sx={{ margin: "5px" }}
//                     onClick={() => {
//                       navigate(
//                         `/admin/scorecard/${interviewee.user.sapid}`
//                       );
//                     }}
//                   />
//                   <Routes>
//                     <Route
//                       path="scorecard/:id"
//                       element={<PrivateRoute />}
//                     >
//                       <Route
//                         path="scorecard/:id"
//                         element={<ScorePage />}
//                       />
//                     </Route>
//                   </Routes>
//                 </Fragment>
//               )),
//               [
//                 {
//                   sapid: interviewee.user.sapid,
//                   gradyear: interviewee.user.grad_year,
//                   email: interviewee.user.email,
//                   resume: interviewee.application.resume_link,
//                   github: interviewee.application.stack,
//                 },
//               ]
//             )}
//           />
//         ))}
//       </React.Fragment>
//     ))}
//   </React.Fragment>
// ))}