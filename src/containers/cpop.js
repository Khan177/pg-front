import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

const cool = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={6} md={3}>
                    Hello, world!
                </Col>
            </Row>
        </Grid>
    );
}
export default cool
