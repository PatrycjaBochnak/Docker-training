import React from "react";
import {Product} from "../models/Product";
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


export const Item = ({item, toggleBoughtFn}: { item: Product, toggleBoughtFn: Function }) => {
    const handleBought = () => {
        toggleBoughtFn(item.id);
    }

    return(
        <ListItem dense button onClick={handleBought}>
            <ListItemIcon>
                <Checkbox
                    edge={"start"}
                    checked={item.bought}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText>
                {item.name} - {item.quantity} {item.unit}
            </ListItemText>
        </ListItem>
    )
}
