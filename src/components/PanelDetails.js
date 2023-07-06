import React, {  useState } from "react";
import Table from "@mui/material/Table";
import { styled } from '@mui/material/styles';
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Outlet, Navigate, Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Button, Grid } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Modal from 'react-bootstrap/Modal';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function PanelDetails(props) {
  const [pop, setPop] = useState()
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(prop) {
    
    return (
      <>
        {pop ? <>
          {localStorage.setItem("sapmod",pop.sapid)}
          <Modal
            {...prop}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <b>{pop.name}</b>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Grid container>
                <Grid item md={6}>
                  <b> SapId: </b>{pop.sapid}
                </Grid>
                <Grid item md={6}>
                  <b>Stacks Applied: </b>
                </Grid>
                <Grid item md={6}>
                  <b> Graduation Year: </b>{pop.year}
                </Grid>
                <Grid item md={6}>
                  {modst(pop.stacks)}
                </Grid>
                <Grid item md={6}>
                  <b>Github Link: </b>{modalgit(pop.github, pop.stacks)}
                </Grid>
                <Grid item md={6}>
                  <b>Email: </b>{pop.email}
                </Grid>

                <Grid item md={12} sx={{ textAlign: "center" }}>
                  <b>Resume Link: </b>{pop.resume}
                </Grid>
                <Grid item md={12} sx={{ textAlign: "center" }}>
                  <Button variant="outlined" onClick={scorecard(pop)}><Link to='/admin/scorecard' values={pop}>Score</Link></Button>
                </Grid>
              </Grid>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
          </Modal>
        </> : null}


      </>
    );
  }
  const scorecard=(val)=>{
    //navigate('/')

  }
  const mod = (i) => {
    setPop(rows[i]);
    console.log(rows[i]);
    setModalShow(true)
  }

  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  function modst(modalstack) {
    const values = modalstack;
    console.log(modalstack)
    return (
      <>
        {Array.isArray(values) && values.map((value) => (
          <Chip key={value} label={value} sx={{ backgroundColor: "#7290df", color: "white", margin: "5px" }}></Chip>
        ))}
      </>
    )

  };
  function modalgit(modalgithub, modalstack) {
    const values = modalgithub;
    const v = modalstack;
    //console.log(modalstack)
    return (
      <>
        {Array.isArray(values) && values.map((value, i) => (
          // <div>{values[i]}</div>
          // <Button label={v[i]} sx={{backgroundColor:"#7290df",color:"white",margin:"5px",borderRadius:"42%"}}><a href={values[i]} style={{textDecoration:"none",color:"white"}}>{v[i]}</a></Button>
          // <Button variant="contained" href={values[i]} sx={{backgroundColor:"#7290df",color:"white",margin:"5px",borderRadius:"42%"}}>{v[i]}</Button>
          <Chip
            label={v[i]}
            component="a"
            href={values[i]}
            variant="outlined"
            clickable
            sx={{ backgroundColor: "#7290df", color: "white", margin: "5px" }}
            
          />
        ))}
      </>
    )

  };
  function CustomTableCell(prop) {
    const { values } = prop;
    return (
      <TableCell>
        {Array.isArray(values) && values.map((value) => (
          <Chip key={value} label={value} sx={{ backgroundColor: "#7290df", color: "white", margin: "5px",fontSize:"15px" }}></Chip>
        ))}

      </TableCell>
    );
  }

  function createData(name, stacks, schedule, submission, email, year, github, resume, sapid) {
    return {
      name,
      stacks,
      schedule,
      submission,
      email, year, github, resume, sapid
    };
  }
  const rows = [];
  let l = props.user[0].interviewees.length;
  for (let i = 0; i < l; i++) {
    let st = []; let res = []
    let stl = props.user[0].interviewees[i].application.stack.length;
    for (let j = 0; j < stl; j++) {
      st.push(props.user[0].interviewees[i].application.stack[j].name)
      res.push(props.user[0].interviewees[i].application.stack[j].repo_link)

      //console.log(props.user[0].interviewees[i].application)
    }
    //console.log(props.user[0].interviewees[i].application.resume)
    rows.push(createData(props.user[0].interviewees[i].user.name, st, 'nan', 'aba', props.user[0].interviewees[i].user.email, props.user[0].interviewees[i].user.grad_year, res, props.user[0].interviewees[i].application.resume_link, props.user[0].interviewees[i].user.sapid))
  }
  const displaystack = () => {
    let sl = props.user[0].interviewees[0].application.stack.length;
  };
  //console.log(props.user[0].interviewees[2].application.stack[0].name)

  return (
    <>
      <Grid item sm={12} sx={{padding:'5x'}}>
        <TableContainer component={Paper} sx={{paddingRight:'25px',paddingLeft:'25px'}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{backgroundColor:"#8c7deecc",borderTopLeftRadius:'23px'}}>Name </TableCell>
                {/* <CustomTableCell >Skill</CustomTableCell>
                 */}
                 <TableCell align="center" sx={{backgroundColor:"#8c7deecc",paddingRight:'2px'}}>Skill</TableCell>
                <TableCell align="center" sx={{backgroundColor:"#8c7deecc",paddingRight:'2px'}}>Scheduled interview</TableCell>
                <TableCell align="center"sx={{backgroundColor:"#8c7deecc",borderTopRightRadius:'23px'}}> Submission Detail </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <CustomTableCell values={row.stacks}></CustomTableCell>
                  {/* <TableCell >{row.stacks}</TableCell> */}
                  <TableCell align="center">{row.schedule}</TableCell>
                  <TableCell align="center"><Button onClick={() => mod(i)}><AssignmentIcon /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}