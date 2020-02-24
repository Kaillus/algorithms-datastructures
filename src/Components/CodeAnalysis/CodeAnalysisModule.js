import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
    code: {
        fontSize: "calc(4px + 1vw)",
        textAlign: "left!important",
        display: "inline-block!important",
        boxSizing: "border-box!important",
        position: "relative",
        left: "-100px",
    },
    tooltip: {
        position: 'relative',
    },
    text: {
        display: 'table',
        '&:hover': {
            color: '#eeeeee',
            backgroundColor: 'rgba(00, 00, 00, 0.6)',
            boxShadow: "0 0 10px 3px rgba(00, 00, 00, 0.6)",
        },
    },
}));

function CodeAnalysisModule(unit) {
    const classes = useStyles();
    const theme = useTheme();
    const [code, setCode] = useState([]);
    const _path = unit.unit;

    useEffect(() => {
        async function loadFile(path) {
            return await fetch(path)
                .then((r) => r.text())
                .then((r) => r.split("\n"))
                .then((r) => r.filter(a => !a.includes("////")))
                .then((r) => setCode(r));
        }

        loadFile(_path);
    });

    return (
        <div className={classes.code}>
            {code.map(item => 
            {if (!item.includes("}")) {
                return (
                    <Tooltip title={item} interactive className={classes.tooltip} placement="right">
                        <pre className={classes.text}>{item}</pre>
                    </Tooltip>)
            } else {
                return (<pre className={classes.text}>{item}</pre>)
            }})}
        </div>
    );
}

export default CodeAnalysisModule;