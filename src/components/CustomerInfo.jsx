import '../assets/css/CustomerInfo.css';

function CustomerInfo() {
  return (
    <div className="container-fluid customer-info">
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead className="table-light text-center">
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">รหัสสินค้า</th>
              <th scope="col">ชื่อสินค้า (TH)</th>
              <th scope="col">คลัง</th>
              <th scope="col">พื้นที่เก็บ</th>
              <th scope="col">หน่วยนับ</th>
              <th scope="col">จำนวน</th>
              <th scope="col">ราคา</th>
              <th scope="col">ส่วนลด</th>
              <th scope="col">รวมมูลค่า</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th>1</th>
              <td>PRD001</td>
              <td>สินค้า A</td>
              <td>คลัง 1</td>
              <td>พื้นที่ 2</td>
              <td>ชิ้น</td>
              <td>10</td>
              <td>100.00</td>
              <td>5%</td>
              <td>950.00</td>
            </tr>
            <tr className="text-end fw-bold">
              <th className="text-start">Total</th>
              <td colSpan="5"></td>
              <td>10</td>
              <td></td>
              <td>5%</td>
              <td>950.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row g-3 summary-box">
        <div className="col-12 col-md-4 p-3">
          <div className="summary-card">
            <div className="d-flex justify-content-between">
              <p>มูลค่าสินค้า (สกุลเงิน)</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 p-3">
          <div className="summary-card">
            <div className="d-flex justify-content-between">
              <p>อัตราภาษี</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>ยอดต่อภาษี</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 p-3">
          <div className="summary-card">
            <div className="d-flex justify-content-between">
              <p>มูลค่าสินค้า</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>ภาษีมูลค่าเพิ่ม</p>
              <p>0.00</p>
            </div>
            <div className="d-flex justify-content-between text-danger fw-bold">
              <p>มูลค่าทั้งสิ้น</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
