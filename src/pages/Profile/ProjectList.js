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
import { useGetOneUserKanbansQuery } from "../../features/kanban/KanbanApiSlice";

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



const rows = [];

export default function CollapsibleTable({ idUser }) {

  const { data: row, isLoading, isSuccess } = useGetOneUserKanbansQuery(idUser);

  if (isSuccess) {
    console.log(row);
  }



  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project</TableCell>
            <TableCell align="right">project owner</TableCell>
            <TableCell align="right">dateLimit</TableCell>
            <TableCell align="right">Role</TableCell>
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