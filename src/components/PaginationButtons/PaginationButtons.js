import React from "react";
import Button from "@mui/material/Button";
import { createTheme,ThemeProvider  } from '@mui/material/styles';

const PaginationButtons = (props) => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#00ADB5',
            darker: '#053e85',
          }
        }
      });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Button
        onClick={props.prevPage}
        disabled={props.page === 1 ? true : false}
        variant="contained"
        color="primary"
      >
        Previos page
      </Button>
      <Button onClick={props.nextPage}
       variant="contained"
       disabled = {props.page === 42 ? true: false}
       color='primary'
       >
        Next page
      </Button>
    </ThemeProvider>
    </>
  );
};

export default PaginationButtons;
