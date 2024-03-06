import React from "react";
import {AppBar, Container} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth={"md"}>
                    <Typography variant={"h6"}>
                        Shopping List
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
