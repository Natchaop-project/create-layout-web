// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import CreatePage from '../pages/CreatePage.jsx';
import HomePage from "../pages/HomePage.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sale" element={<h4>หน้า ข้อมูลการขาย</h4>} />
            <Route path="/sale/deposit" element={<h4>หน้า รับมัดจำ</h4>} />
            <Route path="/sale/deposit/edit" element={<CreatePage />} />

        </Routes>
    );
}
