import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
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
import Table from "../Table/Table";
import Location from "../PartnersSearchBlock/Components/Blocks/location";


export default function PartnersList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);
    return (
        <Section>
            <Location/>
            <ListHeader>
                <ListTitle >
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
                index={"2"}
            />

        </Section>
    )
}

