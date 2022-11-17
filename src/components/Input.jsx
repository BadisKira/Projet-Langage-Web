import React from "react";
// je prefere creer mon input a moi et le styliser comme je vx et la gestion d'error d'aussi tu connais
import { Input } from "@mui/material";

const MyInput = ({
  iconStart = null,
  iconLast = null,
  name,
  fullWidth = true,
  messageError,
  type,
  placeholder = null,
  ref = null,
}) => {
  return (
    <Input
      placeholder={placeholder}
      startAdornment={() => {
        return { iconStart } || null;
      }}
      endAdornment={() => {
        return { iconLast } || null;
      }}
      type={type}
      inputRef={ref}
      name={name}
      fullWidth={fullWidth}
      onError={() => {
        return messageError || "Verifiez vos input";
      }}
      multiline={false}
      disableUnderline
    />
  );
};

export default MyInput;
