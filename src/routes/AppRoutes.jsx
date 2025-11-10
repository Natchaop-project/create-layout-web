// src/routes/AppRoutes.jsx
import { Routes, Route, Links } from "react-router-dom";
import CreatePage from '../pages/CreatePage.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Links to="/sale/deposit/edit">แก้ไขเอกสาร</Links> } />
            <Route path="/sale" element={<h4>หน้า ข้อมูลการขาย</h4>} />
            <Route path="/sale/deposit" element={<h4>หน้า รับมัดจำ</h4>} />
            <Route path="/sale/deposit/edit" element={<CreatePage />} />

        </Routes>
    );
}
