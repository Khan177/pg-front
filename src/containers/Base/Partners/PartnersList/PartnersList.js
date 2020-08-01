import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import {Section} from "../../../../components/Styles/ComponentsStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";
import HeaderList from "./HeaderList";

export default function PartnersList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    return (
        <Section>
          <HeaderList/>
            <Table
                columns={columns}
                data={data}
            />
        </Section>
    )
};

