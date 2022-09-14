import { createTheme } from "@mui/material";

export const getTheme =()=>{
const theme = createTheme({
    palette: {
      primary: {
        main: '#352a78',
      },
      secondary: {
        main: '#aaa7c8',
      },
    },
  });
  return theme;
}