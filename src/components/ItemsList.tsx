import React from "react";
import {Product} from "../models/Product";
import {Button, Container, List} from "@material-ui/core";
import {Item} from "./Item";

export const ItemsList = (
     {items, toggleBoughtFn, clearListFn}: {items: Product[], toggleBoughtFn: Function, clearListFn: Function}
    ) => {

    const handleClearList = () => clearListFn();

    return (
        <Container maxWidth={"md"}>
            <List>
                {items.map( (prod: Product) => <Item key={prod.id} item={prod} toggleBoughtFn={toggleBoughtFn}/>)}
            </List>
            {items.length > 0 && <Button variant="contained" onClick={handleClearList}>Clear</Button>}
        </Container>
    );
}
