import {makeStyles} from "@material-ui/core/styles";import icon_collapse from "./../img/bx-collapse-down.svg"const useStyles = makeStyles((theme) => ({    root: {        // '& .MuiSelect-selectMenu': {        //     // width: 160,        //     fontFamily: "SF UI Display Light",        //     height: 40,        //     width: "100%",        //     display: 'flex',        //     justifyContent: 'center',        //     alignItems: 'center',        //     background: "#FFFFFF",        //     padding: 0,        //     margin: 0        // },        '& .MuiInputBase-input': {            fontFamily: "SF UI Display Light",            width: "100%",            height: 40,            margin: 0,            display: 'flex',            justifyContent: 'center',            alignItems: 'center',            background: "#FFFFFF",            padding: 0,        },        '& .MuiFormControlLabel-label': {            fontFamily: "SF UI Display Light",            fontSize: '12px',        },        '& .MuiOutlinedInput-adornedStart': {            backgroundColor: "#FFFFFF",        },        "& .MuiFormControl-root": {            width: "100%",        },        "& .MuiOutlinedInput-multiline": {            padding: "9px 14px",            background: "#fff"        },        "& .MuiFormGroup-root": {            flexDirection: "row"        },        "& .MuiFormControlLabel-root": {            marginBottom: 0,        },    },}));export default useStyles