import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { ButtonGroup, Button, Stack, InputBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";

const Elements = () => {
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
                "&:focus": {
                    width: "20ch",
                },
            },
        },
    }));

    return ( <
        div style = {
            { marginTop: 150 } } >
        <
        Stack direction = "row"
        spacing = { 2 } >
        <
        ButtonGroup >
        <
        Button sx = {
            { paddingRight: 10 } }
        variant = "contained" >
        PREDICT <
        /Button> <
        Button sx = {
            { paddingRight: 10 } }
        variant = "outlined" >
        ANALYTICS VIEW <
        /Button> <
        Button sx = {
            { paddingRight: 10 } }
        variant = "outlined" >
        ADVANCED SEARCH <
        /Button> <
        /ButtonGroup> <
        Button variant = "outlined" >
        <
        RefreshIcon / >
        <
        /Button> <
        Search >
        <
        SearchIconWrapper >
        <
        SearchIcon / >
        <
        /SearchIconWrapper> <
        StyledInputBase placeholder = "Search…"
        inputProps = {
            { "aria-label": "search" } }
        /> <
        /Search> <
        ButtonGroup >
        <
        Button variant = "outlined"
        startIcon = { < AddIcon / > } >
        Add <
        /Button> <
        Button variant = "outlined"
        startIcon = { < EditIcon / > } >
        Edit <
        /Button> <
        Button variant = "outlined"
        startIcon = { < DeleteIcon / > } >
        Delete <
        /Button> <
        /ButtonGroup> <
        /Stack> <
        /div>
    );
};

export default Elements;