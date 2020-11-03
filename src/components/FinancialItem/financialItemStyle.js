import {makeStyles} from "@material-ui/core/styles";

export const financialItemStyle = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        border: '1px solid white'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        color: 'white'
    },
    InputLabel: {
        color: 'white'
    }
}));