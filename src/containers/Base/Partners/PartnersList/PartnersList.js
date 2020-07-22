import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import breadcrumbs from "../../../../img/outdoor_furniture/bx-breadcrumbs.svg"
import {Link, NavLink} from "react-router-dom";
import {
    BlockButton,
    BreadCrumbs,
    ListHeader,
    ListTitle,
    Section,
    StyledButton, StyledButtonBlue,
    Title,
    TitleLogo
} from "./PartnersStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";


export default function PartnersList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);
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
                    Контрагенты
                </Link>
            </BreadCrumbs>
            <ListHeader>
                <ListTitle>
                    <TitleLogo/>
                    <Title>
                        Контрагенты
                    </Title>
                </ListTitle>
                <BlockButton>
                    <NavLink to="/base/partner/info">
                        <StyledButton>
                            Создать контрагента
                        </StyledButton>
                    </NavLink>
                    <NavLink to="/base/partner/info">
                        <StyledButtonBlue>
                            Создать договор
                        </StyledButtonBlue>
                    </NavLink>
                </BlockButton>
            </ListHeader>
            <Table
                columns={columns}
                data={data}
            />

        </Section>
    )
}

