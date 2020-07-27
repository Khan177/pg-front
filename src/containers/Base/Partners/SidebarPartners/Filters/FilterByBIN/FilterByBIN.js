import React from "react";
import {ArrowDropDown, ArrowDropUp} from "@material-ui/icons";
import {Collapse, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import {FilterSectionTitle, FilterSection, FilterSectionTitleText} from "../../../../../../components/StyledFilters"
import clsx from "clsx";
import icon_hash from "../../../../../../img/partners/bx-hash.svg";
import useStyles from "../../../../Partners/SidebarPartners/Filters/Styles/UseMaterialStyles"


export default function FilterByBIN() {

    const classes = useStyles();
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
                {open && < ArrowDropUp/>}
                {!open && <ArrowDropDown/>}
            </FilterSectionTitle>



            <Collapse in={open} >
                <TextField
                    id="outlined-search"
                    type="search"
                    placeholder="Введите БИН"
                    defaultValue=""
                    variant="outlined"
                    style={{marginBottom: 20}}
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <img src={icon_hash} alt=""/>
                        </InputAdornment>
                    }}
                />

            </Collapse>
        </FilterSection>
    )

}
