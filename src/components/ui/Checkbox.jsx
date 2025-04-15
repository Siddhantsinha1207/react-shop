import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckbox({ onChange, checkState }) {
  const { electronics, jewelery, mens, womens } = checkState;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={electronics}
                onChange={onChange}
                name="electronics"
                value="sid"
              />
            }
            label="electronics"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jewelery}
                onChange={onChange}
                name="jewelery"
              />
            }
            label="jewelery"
          />
          <FormControlLabel
            control={<Checkbox checked={mens} onChange={onChange} name="men" />}
            label="men's clothing"
          />
          <FormControlLabel
            control={
              <Checkbox checked={womens} onChange={onChange} name="women" />
            }
            label="women's clothing"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
