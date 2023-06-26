import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProductsItems from '../../Components/Admin/AdminAllProductsItems'
import { Route, Routes } from 'react-router-dom'
import AdminAllOrdersCom from '../../Components/Admin/AdminAllOrdersCom'
import AdminAddBrandCom from '../../Components/Admin/AdminAddBrandCom'
import AdminAddCategoriyCom from '../../Components/Admin/AdminAddCategoriyCom'
import AdminAddSubCategoriyCom from '../../Components/Admin/AdminAddSubCategoriyCom'
import AdminAddProductCom from '../../Components/Admin/AdminAddProductCom'
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetails'

const AdminPage = () => {
    return (
        <Container className="py-3">
            <Row>
                <Col sm="12" md="3">
                    <AdminSideBar />
                </Col>
                <Col sm="12" md="9">
                    <Routes>
                        <Route path="/" element={<AdminAllProductsItems />} />
                        <Route path="/allorders" element={<AdminAllOrdersCom />} />
                        <Route path="/addbrand" element={<AdminAddBrandCom />} />
                        <Route path="/addcategory" element={<AdminAddCategoriyCom />} />
                        <Route path="/addsubcategory" element={<AdminAddSubCategoriyCom />} />
                        <Route path="/addproduct" element={<AdminAddProductCom />} />
                        <Route path="/order/23" element={<AdminOrderDetails />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminPage