import React from "react";import FilterByParametersPartners from "../../../../components/Filters/FilterByCompany/FilterByCompany";import {FilterMenu, SearchTitle, FilterText, Form} from "../../../../components/StyledFilters"import useStyles from "../../../../components/UseInputMaterialStyles";import FilterByBIN from "../../../../components/Filters/FilterByBIN/FilterByBIN";import ButtonGroup from "../../../../components/ButtonGroup/ButtonGroup";const   FilterBar = () => {const classes = useStyles();    return (        <FilterMenu>            <SearchTitle>                <FilterText>                    Поиск                </FilterText>            </SearchTitle>            <Form noValidate autoComplete="off"                  className={classes.root}            >                <FilterByParametersPartners/>                <FilterByBIN/>                <ButtonGroup/>            </Form>        </FilterMenu>    )}export default FilterBar