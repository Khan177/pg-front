import React from "react";
import {Collapse} from "@material-ui/core";
import {FilterSectionTitle, FilterSection, FilterSectionTitleText} from "../../Styles/StyledFilters"
import ArrowDown from "../../CollapseArrows/CollapseArrowIcons/ArrowDown"
import ArrowUp from "../../CollapseArrows/CollapseArrowIcons/ArrowUp"
import InputAnchor from "../../Inputs/InputAnchor";

export default function FilterByBIN() {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
        console.log("click")
    };

    return (
        <FilterSection>
            <FilterSectionTitle
                onClick={handleClick}
            >
                <FilterSectionTitleText>
                    Поиск по БИН
                </FilterSectionTitleText>
                {open && < ArrowUp/>}
                {!open && <ArrowDown/>}
            </FilterSectionTitle>
            <Collapse in={open} >
                <InputAnchor
                    placeholder="Введите БИН"
                />

            </Collapse>
        </FilterSection>
    )

}
