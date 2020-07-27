import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import {ListHeader, ListTitle, Section, StyledButton, Title, TitleLogo} from "../../../../components/ComponentsStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";
import { useHistory } from "react-router-dom";
import BreadCrumbs from "../../../../components/BreadCrumbs"

export default function OutdoorFurnitureList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    // const routeChange = () =>{
    //     const history = useHistory();
    //     let path = `/base/construction`;
    //     history.push(path);
    // }

    return (
        <Section>
          <BreadCrumbs/>
            <ListHeader>
                <ListTitle>
                    <TitleLogo/>
                    <Title>
                        Конструкции
                    </Title>
                </ListTitle>
                <StyledButton
                    // onClick={routeChange}
                >Создать конструкцию</StyledButton>
            </ListHeader>
            <Table
                columns={columns}
                data={data}
            />

        </Section>
    )
}

