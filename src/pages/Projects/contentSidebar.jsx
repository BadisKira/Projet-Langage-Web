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
    <Accordion sx={{ background: "rgba(0,0,0,.1)", marginBottom: "4px" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{}}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const ContentSidebar = () => {
  const [triValue, setTrieValue] = React.useState({
    al: "",
    date: "",
    projet: "",
  });
  const handleChange = (e) => {
    setTrieValue({ ...triValue, [e.target.name]: e.target.value });
    console.log(triValue);
  };
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
            <FormControlLabel
              name="al"
              value="asc"
              control={<Radio />}
              label="A-z"
            />
            <FormControlLabel
              name="al"
              value="desc"
              control={<Radio />}
              label="Z-a"
            />
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Deadline
          </FormLabel>

          <RadioGroup value={triValue.date} onChange={handleChange}>
            <FormControlLabel
              name="date"
              value="early"
              control={<Radio />}
              label="Early"
            />
            <FormControlLabel
              name="date"
              value="late"
              control={<Radio />}
              label="Latest"
            />
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Projects
          </FormLabel>

          <RadioGroup value={triValue.projet} onChange={handleChange}>
            <FormControlLabel
              name="projet"
              value="all"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
              name="projet"
              value="private"
              control={<Radio />}
              label="Private"
            />
            <FormControlLabel
              name="projet"
              value="public"
              control={<Radio />}
              label="public"
            />
          </RadioGroup>
        </FormGroup>
      </SortAccordion>

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
