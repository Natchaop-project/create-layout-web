import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Header.css";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  // ✅ ฟังก์ชันแสดง breadcrumb
  const getBreadcrumb = () => {
    if (path === "/") {
      return <span className="text-danger fw-bold">การขาย</span>;
    }

    if (path === "/sale") {
      return (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          className="nav-title">
          <Link to="/" className="text-decoration-none text-secondary hover-underline">
            การขาย
          </Link>{" "}
          › <span className="text-danger fw-bold">ข้อมูลการขาย</span>
        </motion.div>
      );
    }

    if (path === "/sale/deposit") {
      return (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="nav-title">
          <Link to="/" className="text-decoration-none text-secondary hover-underline">
            การขาย
          </Link>{" "}
          ›{" "}
          <Link to="/sale" className="text-decoration-none text-secondary hover-underline">
            ข้อมูลการขาย
          </Link>{" "}
          › <span className="text-danger fw-bold">รับมัดจำ</span>
        </motion.div>
      );
    }

    if (path === "/sale/deposit/edit") {
      return (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="nav-title"
        >
          <Link to="/" className="text-decoration-none text-secondary hover-underline">
            การขาย
          </Link>{" "}
          ›{" "}
          <Link to="/sale" className="text-decoration-none text-secondary hover-underline">
            ข้อมูลการขาย
          </Link>{" "}
          ›{" "}
          <Link to="/sale/deposit" className="text-decoration-none text-secondary hover-underline">
            รับมัดจำ
          </Link>{" "}
          › <span className="text-danger fw-bold">สร้าง/แก้ไข</span>
        </motion.div>
      );
    }

    return <span className="text-danger">หน้าหลัก</span>;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="header-wrapper container-fluid bg-white shadow-sm mt-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center">

        <div className="breadcrumb-area mb-2 mb-md-0">
          <div className="text-secondary">{getBreadcrumb()}</div>
        </div>


        {path === "/sale/deposit/edit" && (
          <div className="button-area d-flex flex-wrap justify-content-middle">
            <button className="nav-btn btn btn-outline-danger rounded-5 me-2 mb-2">
              <i className="bi bi-x-circle-fill me-1"></i> ยกเลิกเอกสาร
            </button>
            <button className="nav-btn btn btn-outline-danger rounded-5 me-2 mb-2">
              <i className="bi bi-printer-fill me-2"></i> พิมพ์
            </button>
            <button className="nav-btn btn btn-outline-danger rounded-5 me-2 mb-2">
              Close
            </button>
            <button className="nav-btn btn btn-danger rounded-5 mb-2">Save</button>
          </div>)}
      </div>
    </motion.header>
  );
}
