
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }
            }>
            <Link to="/sale/deposit/edit" >
                <button className="nav-btn btn btn-danger rounded-5 mb-2">เพิ่มเอกสารใหม่
                </button>
            </Link>
        </motion.div >
    )
}

export default HomePage
