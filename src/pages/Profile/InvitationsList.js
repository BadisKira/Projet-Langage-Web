import { React, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from "react-redux";
import { useEffect } from "react";



const customTableCell = {
  height: "35px",

}



const DialogConfirm = ({ dialogAction, setDialogAction }) => {
  const handleClose = () => {
    setDialogAction({ ...dialogAction, open: false });
  };
  const handleClick = () => {
    if (dialogAction.actionType === "ACCEPT") {
      // lancer une requete qui vas accepter l'invitaion
    }
    else if (dialogAction.actionType === "REJECT") {
      // lancer une requete qui vas supp l'invitaion
    }
    handleClose();
  }
  return (
    <Dialog
      open={dialogAction.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"What do you do to deedededede"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClick} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}



const headCells = [
  {
    id: "kanban-name",
    numeric: false,
    disablePadding: false,
    label: "kanban name",
  },
  {
    id: "kanban-owner",
    numeric: false,
    disablePadding: false,
    label: "kanban owner",
  },
  {
    id: "Action",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  }

];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{}}>
                  {order === "desc" ? "croissant" : "decroissant"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = (props) => {
  const { numSelected, rows } = props;
  return (
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
        {rows.length} Invitations{" "}
      </Typography>

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [dialogAction, setDialogAction] = useState({ open: false, actionType: "", idInvitation: "" });
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("kanbanName");
  const [page, setPage] = useState(0);
  //const clientData = useSelector(state => state.client);
  // const [rows, setRows] = useState([{ idkanban: 1, kanbanOwner: 'Badis', kanbanName: "celena", actions: "Kill" },
  // { idkanban: 2, kanbanOwner: 'Badis', kanbanName: "Aouaouche", actions: "Marry" }, { idkanban: 3, kanbanOwner: 'Badis', kanbanName: "celena", actions: "Marry" }
  //   , { idkanban: 93, kanbanOwner: 'Badis', kanbanName: "celena", actions: "Marry" }, { idkanban: 53, kanbanOwner: 'Badis', kanbanName: "celena", actions: "Marry" }, { idkanban: 7, kanbanOwner: 'Badis', kanbanName: "celena", actions: "Marry" }]);

  const rows = [];


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * 5 - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={0}
          rows={rows} />
        <TableContainer >
          <Table size="medium" >
            <EnhancedTableHead
              // numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {
                rows.slice(page * 5, page * 5 + 5)
                  .map((row, index) => {


                    //  const isItemSelected = isSelected(row.idkanban);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.kanbanName}
                      >

                        <TableCell
                          component="th"
                          id={row.kanbanName}
                          scope="row"
                          padding="none"
                          align="center"
                          sx={customTableCell}

                        >
                          {row.kanbanName}


                        </TableCell>
                        <TableCell
                          component="th"
                          id={row.kanbanName}
                          scope="row"
                          padding="none"
                          align="center"
                          sx={customTableCell}

                        >
                          {row.kanbanOwner}
                        </TableCell>
                        <TableCell
                          sx={customTableCell}
                          align="center"
                          component="th"
                          id={row.kanbanName}
                          scope="row"
                          padding="none"
                        >
                          <Button size="small" variant="contained" sx={{
                            textTransform: "none", margin: "3px"
                          }}
                            onClick={() => {
                              setDialogAction({ ...dialogAction, actionType: "ACCEPT", open: true });
                            }}
                          >
                            accept
                          </Button>
                          <Button size="small" variant="contained"
                            sx={{
                              textTransform: "none", margin: "3px", background: "red",
                              "&:hover": { background: "red" }
                            }}
                            onClick={() => {
                              setDialogAction({ ...dialogAction, actionType: "REJECT", open: true });
                            }}
                          >
                            Reject
                          </Button>
                        </TableCell>
                      </TableRow>
                    );


                  })
              }
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
      <DialogConfirm dialogAction={dialogAction} setDialogAction={setDialogAction} />
    </Box >
  );
}

