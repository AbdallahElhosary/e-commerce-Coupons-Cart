import React from 'react'
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
const UserAddAddress = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <h2>Add New Address</h2>
                <Col sm="8">
                    <FloatingLabel controlId="floatingPassword" label="Address Description(Home-Work)" className="my-3">
                        <Form.Control type="text" placeholder="Address Description(Home-Work)" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Address in detail">
                        <Form.Control
                            as="textarea"
                            placeholder="Address in detail"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Phone Number" className="my-3">
                        <Form.Control type="text" placeholder="Phone Number" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Add Address</button>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddAddress