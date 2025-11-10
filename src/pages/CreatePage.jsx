import EditBar from '../components/EditBar';
import "../assets/css/CreatePage.css";
import { useState, useEffect } from 'react';

import { motion } from "framer-motion";

function CreatePage() {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        setCurrentTime(`${hours}:${minutes}`);
        setCurrentDate(new Date().toISOString().split("T")[0]);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}   
            animate={{ opacity: 1, y: 0 }}     
            transition={{ duration: 0.5 }}     
            className="container-fluid createpage-container py-3 my-4">
            <div className="row g-3 doc-form">

                {/* วันที่เอกสาร */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">วันที่เอกสาร</label>
                    <input
                        type="date"
                        className="form-control"
                        value={currentDate}
                        onChange={(e) => setCurrentDate(e.target.value)}
                    />
                </div>

                {/* เวลา */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">เวลา</label>
                    <input
                        type="time"
                        value={currentTime}
                        onChange={(e) => setCurrentTime(e.target.value)}
                        className="form-control"
                    />
                </div>

                {/* เลขที่เอกสาร */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">เลขที่เอกสาร</label>
                    <select className="form-select">
                        <option>เลือก</option>
                    </select>
                </div>

                {/* รหัสเอกสาร */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">รหัสเอกสาร</label>
                    <select className="form-select">
                        <option>เลือก</option>
                    </select>
                </div>

                {/* รหัสเจ้าหนี้ */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">รหัสเจ้าหนี้</label>
                    <select className="form-select">
                        <option>เลือก</option>
                    </select>
                </div>

                {/* ประเภทภาษี */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">ประเภทภาษี</label>
                    <select className="form-select">
                        <option>ภาษีรวมใน</option>
                        <option>ภาษีแยกนอก</option>
                        <option>ไม่มีภาษี</option>
                    </select>
                </div>

                {/* วันที่ใบกำกับ */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">วันที่ใบกำกับ</label>
                    <input type="date" className="form-control" />
                </div>

                {/* เลขใบกำกับ */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">เลขใบกำกับ</label>
                    <input type="text" className="form-control" placeholder="กรอกข้อมูล" />
                </div>

                {/* ระยะเวลา (วัน) */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">ระยะเวลาภายใน (วัน)</label>
                    <input type="number" className="form-control" placeholder="ยังไม่มีข้อมูล" />
                </div>

                {/* ระยะเวลา (วันที่) */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">ระยะเวลาภายใน (วันที่)</label>
                    <input type="date" className="form-control" />
                </div>

                {/* วันที่เอกสารอ้างอิง */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">วันที่เอกสารอ้างอิง</label>
                    <input type="date" className="form-control" />
                </div>

                {/* เอกสารอ้างอิง */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">เอกสารอ้างอิง</label>
                    <input type="text" className="form-control" placeholder="กรอกข้อมูล" />
                </div>

                {/* สกุลเงิน */}
                <div className="col-12 col-sm-6 col-md-3">
                    <label className="form-label">รหัสสกุลเงิน</label>
                    <input type="text" className="form-control" placeholder="กรอกข้อมูล" />
                </div>

                {/* หมายเหตุ */}
                <div className="col-12 col-md-9">
                    <label className="form-label">หมายเหตุ</label>
                    <input type="text" className="form-control" placeholder="กรอกข้อมูล" />
                </div>
            </div>

            <EditBar />
        </motion.div>
    );
}

export default CreatePage;
