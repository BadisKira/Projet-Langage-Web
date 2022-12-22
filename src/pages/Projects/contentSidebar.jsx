import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FormLabel, TextField, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const SortAccordion = ({ children, title }) => {
  return (
    <Accordion
      sx={{ background: "rgba(0,0,0,.1)", marginBottom: "4px" }}
      // expanded={expanded === "panel1"}
      // onChange={handleChange("panel1")}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{}}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const ContentSidebar = () => {
  return (
    <Stack padding={3} bgcolor="whitesmoke">
      <Typography variant="h5" comp="h4">
        Sort by :
      </Typography>
      {/*  Premier trie*/}
      <SortAccordion title="Alphabetic order ">
        <FormGroup>
          <FormControlLabel
            name="al"
            control={<Checkbox name="al" size="small" />}
            label="A-Z"
          />
          <FormControlLabel
            name="al"
            control={<Checkbox name="al" size="small" />}
            label="Z-A"
          />
        </FormGroup>
      </SortAccordion>
      {/**Fin du Premier trie  */}
      {/**Deuxieme Trie */}
      <SortAccordion title="Deadline of realization">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Earliest date"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Latest date"
          />
          <FormControlLabel
            control={<TextField size="small" type={"date"} />}
            label="choose a date "
          />
        </FormGroup>
      </SortAccordion>
      {/**Fin du deuxieme Trie */}
      {/**Troisieme Trie */}
      <SortAccordion title="Projects ">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="My projects"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="public projects"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="private projects"
          />
        </FormGroup>
      </SortAccordion>
      {/**Fin du troisieme trie */}

      <Button
        sx={{
          marginTop: 2,
          background: "rgba(0,0,0,.3)",
          "&:hover": { background: "rgba(0,0,0,.35)" },
        }}
        variant="contained"
      >
        Sort
      </Button>
    </Stack>
  );
};

export default ContentSidebar;
/**
 * <Box>Mes projets de merde</Box>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptatem cupiditate totam amet magni! Explicabo nesciunt facilis
      </Box>
      <Box>
        <Typography component={"p"} variant="subtitle1">
          Trier par :{" "}
        </Typography>
        <Box>
          <FormLabel>Order alphabetic A-Z </FormLabel>
          <TextField variant="standard" type={"checkbox"} />
          <FormLabel>Order alphabetic Z-A </FormLabel>
          <TextField variant="standard" type={"checkbox"} />
        </Box>

        <Box alignItems={"baseline"}>
          <FormLabel>Date fin de projet </FormLabel>
          <TextField variant="standard" size="small" type={"date"} />
        </Box>
        <Box>
          <FormLabel>Mes projets </FormLabel>
          <TextField variant="standard" type={"checkbox"} />{" "}
        </Box>

        <Box>
          <FormLabel>Mes projets </FormLabel>
          <TextField variant="standard" type={"checkbox"} />{" "}
        </Box>
      </Box>
 */
