import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FormLabel, TextField, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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
  const [triValue, setTrieValue] = React.useState({
    al: "asc",
    date: "",
    projet: "",
  });
  const handleChange = () => {};
  return (
    <Stack padding={3} bgcolor="whitesmoke">
      <Typography variant="h5" comp="h4"></Typography>
      {/*  Premier trie*/}
      <SortAccordion title="Sort by :">
        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Alphabetic order
          </FormLabel>

          <RadioGroup value={triValue.al} onChange={handleChange}>
            <FormControlLabel value="asc" control={<Radio />} label="A-z" />
            <FormControlLabel value="desc" control={<Radio />} label="Z-a" />
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Deadline
          </FormLabel>

          <RadioGroup value={triValue.data} onChange={handleChange}>
            <FormControlLabel value="asc" control={<Radio />} label="Early" />
            <FormControlLabel value="desc" control={<Radio />} label="Latest" />
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Projects
          </FormLabel>

          <RadioGroup value={triValue.data} onChange={handleChange}>
            <FormControlLabel value="all" control={<Radio />} label="public" />
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="Private"
            />
            <FormControlLabel
              value="public"
              control={<Radio />}
              label="public"
            />
          </RadioGroup>
        </FormGroup>
      </SortAccordion>

      {/**Fin du Premier trie  */}
      {/**Deuxieme Trie */}
      {/* <SortAccordion title="Deadline"></SortAccordion> */}
      {/**Fin du deuxieme Trie */}
      {/**Troisieme Trie */}
      {/* <SortAccordion title="Projects "></SortAccordion> */}
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
