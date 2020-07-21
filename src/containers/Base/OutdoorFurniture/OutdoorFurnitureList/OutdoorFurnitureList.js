import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import breadcrumbs from "../../../../img/outdoor_furniture/bx-breadcrumbs.svg"
import {Link} from "react-router-dom";
import {BreadCrumbs, ListHeader, ListTitle, Section, StyledButton, Title, TitleLogo} from "./OutdootFurnitureStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../Table/Table";


export default function OutdoorFurnitureList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);
    const clickHandler = () => {
        console.log("click")
    }

    return (
        <Section>
            <BreadCrumbs aria-label="breadcrumb"
                         style={{color: '#8aa1c1', fontSize: 13}}
            >
                <Link
                    to="/"
                >
                    <img src={breadcrumbs} alt=""/>
                </Link>
                <Link to="/"
                      style={{color: '#8aa1c1', fontSize: 13}}
                >
                    Главная
                </Link>
                <Link to="/installation/"
                      style={{color: '#8aa1c1', fontSize: 13}}
                >
                    Базы
                </Link>

                <Link to="/outdoor_furniture"
                      style={{color: '#8aa1c1', fontSize: 13}}
                >
                    Конструкции
                </Link>
            </BreadCrumbs>
            <ListHeader>
                <ListTitle>
                    <TitleLogo/>
                    <Title>
                        Конструкции
                    </Title>
                </ListTitle>
                <StyledButton
                    onClick={clickHandler}
                >Создать конструкцию</StyledButton>
            </ListHeader>
            <Table
                columns={columns}
                data={data}
            />;

        </Section>
    )
}

