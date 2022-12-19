/*import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Toolbar from "@mui/material/Toolbar";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const columns = [
 { label: "Nom hotel", id: "hotel" },
 { label: "date d'arrivée", id: "DateArrivee" },
 {
   id: "dateSortie",
   label: "Date de sortie",
   align: "right",
 },
 {
   id: "nbrChambres",
   label: "Nombre de chambres",

   align: "right",
 },
 {
   id: "total",
   label: "Prix de le réservation",

   align: "right",
 },
];

function createData(hotel, DateArrivee, dateSortie, nbrChambres, total) {
 return { hotel, DateArrivee, dateSortie, nbrChambres, total };
}

// let rows = [];
// // let rows = [
// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),
// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),
// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),

// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// //   ),

// //   createData(
// //     "India's curry hotel",
// //     "29-01-2021",
// //     "01-02-2022",
// //     "2",
// //     "20000.00 DZD"
// // ),

// // createData(
// //   "India's curry hotel",
// //   "29-01-2021",
// //   "01-02-2022",
// //   "2",
// //   "20000.00 DZD"
// // ),
// // ];

function ReservationsList() {
 const [page, setPage] = React.useState(0);
 const clientData = useSelector(state => state.client);
 const [reservationsInfo, setReservationsInfo] = useState(clientData.reservations);
 const [rows, setRows] = useState([]);

 useEffect(() => {
   setReservationsInfo(clientData.reservations);
 }, [clientData]);

 useEffect(() => {
   const { reservations, message } = reservationsInfo;
   //  function createData(hotel, DateArrivee, dateSortie, nbrChambres, total) {
   let temp = [];
   temp = reservations.map((reservation) => {
     return createData(reservation.nomh, reservation.datedep, reservation.datefin, reservation.nombrechambre, reservation.prixReservation)

   });

   setRows(temp);
 }, [reservationsInfo])

 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };

 return (
   <Box sx={{ width: "100%" }}>
     <Paper sx={{ width: "100%" }}>
       <Toolbar
         sx={{
           pl: { sm: 2 },
           pr: { xs: 1, sm: 1 },
         }}
       >
         <Typography
           sx={{ flex: "1 1 100%" }}
           variant="h6"
           id="tableTitle"
           component="div"
           color="primary.dark"
         >
           {rows.length} Réservation(s) effectuée(s){" "}
         </Typography>
       </Toolbar>
       <TableContainer>
         <Table stickyHeader size="medium">
           <TableHead>
             <TableRow>
               {columns.map((column) => (
                 <TableCell key={column.id} align={column.align}>
                   {column.label}
                 </TableCell>
               ))}
             </TableRow>
           </TableHead>
           <TableBody>
             {rows.slice(page * 5, page * 5 + 5).map((row) => {
               return (
                 <TableRow hover role="checkbox" tabIndex={-1} key={row.hotel}>
                   {columns.map((column) => {
                     const value = row[column.id];
                     return (
                       <TableCell key={column.id} align={column.align}>
                         {column.format && typeof value === "number"
                           ? column.format(value)
                           : value}
                       </TableCell>
                     );
                   })}
                 </TableRow>
               );
             })}
           </TableBody>
         </Table>
       </TableContainer>
       <TablePagination
         rowsPerPageOptions={5}
         component="div"
         count={rows.length}
         rowsPerPage={5}
         page={page}
         onPageChange={handleChangePage}
       />
     </Paper>
   </Box>
 );
}

export default ReservationsList;*/

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(projectName, projectOwner, dateLimit, role, tasks = [
  {
    taskName: "My tasks 1", taskDate: "11-02-2023", taskCol: "la colonne en cours "
  }, {
    taskName: "My tasks 1", taskDate: "11-02-2023", taskCol: "la colonne en cours "
  }, {
    taskName: "My tasks 1", taskDate: "11-02-2023", taskCol: "la colonne en cours "
  }, {
    taskName: "My tasks 1", taskDate: "11-02-2023", taskCol: "la colonne en cours "
  }, {
    taskName: "My tasks 1", taskDate: "11-02-2023", taskCol: "la colonne en cours "
  }

]) {
  return {
    projectName,
    projectOwner,
    dateLimit,
    role,
    tasks: tasks
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.projectName}</TableCell>
        <TableCell align="right">{row.projectOwner}</TableCell>
        <TableCell align="right">{row.dateLimit}</TableCell>
        <TableCell align="right">{row.role}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Tasks
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tasks.map((task) => (
                    <TableRow key={task.date}>
                      <TableCell component="th" scope="row">
                        {task.taskName}
                      </TableCell>
                      <TableCell>{task.taskDate}</TableCell>
                      <TableCell align="right">hohoho</TableCell>
                      <TableCell align="right">
                        1550
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const rows = [
  createData('Frozen yoghurt', 'fr', '11-02-250r', 'Bankai'),
  createData('Frozen yoghurt', 'fr', '11-02-250r', 'mppp'),
  createData('Frozen yoghurt', 'fr', '11-02-250r', 'dde'),
  createData('Frozen yoghurt', 'fr', '11-02-250r', 'Bankai'),

];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project</TableCell>
            <TableCell align="right">project owner</TableCell>
            <TableCell align="right">dateLimit&nbsp;(g)</TableCell>
            <TableCell align="right">Role&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}