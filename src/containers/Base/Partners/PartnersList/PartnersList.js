import React from "react";
import "./../../../../assets/fonts/sf-ui-display-cufonfonts-webfont/style.css"
import {Section} from "../../../../components/Styles/ComponentsStyles"
import makeColumns from "./DataTable/columns";
import makeData from "./DataTable/data";
import Table from "../../../../components/Table/Table";
import HeaderList from "./HeaderList";
import {Col, Grid, Row} from "react-flexbox-grid";

export default function PartnersList() {

    const columns = React.useMemo(() => makeColumns, [])
    const data = React.useMemo(() => makeData, []);

    return (
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <HeaderList/>
                    <Table
                        columns={columns}
                        data={data}
                    />
                </Col>
            </Row>
        </Grid>
    )
};

