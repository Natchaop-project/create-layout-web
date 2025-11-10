import '../assets/css/EditBar.css';
import CustomerInfo from './CustomerInfo';

function EditBar() {
  return (
    <div className="editbar-wrapper mt-4">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center editbar-header">
        
        {/* Nav Tabs */}
        <div className="tab-scroll-wrapper">
          <ul className="nav nav-tabs custom-tabs flex-nowrap" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="detail-tab"
                data-bs-toggle="tab"
                data-bs-target="#detail"
                type="button"
                role="tab"
              >
                รายละเอียด
              </button>
            </li>
            <span className="divider">|</span>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="receive-tab"
                data-bs-toggle="tab"
                data-bs-target="#receive"
                type="button"
                role="tab"
              >
                รายละเอียดการรับเงิน
              </button>
            </li>
            <span className="divider">|</span>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tax-tab"
                data-bs-toggle="tab"
                data-bs-target="#tax"
                type="button"
                role="tab"
              >
                ภาษีหัก ณ ที่จ่าย
              </button>
            </li>
            <span className="divider">|</span>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="addinfo-tab"
                data-bs-toggle="tab"
                data-bs-target="#addinfo"
                type="button"
                role="tab"
              >
                ภาษีมูลค่าเพิ่มเพิ่มเติม
              </button>
            </li>
            <span className="divider">|</span>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="extra-tab"
                data-bs-toggle="tab"
                data-bs-target="#extra"
                type="button"
                role="tab"
              >
                เพิ่มเติม
              </button>
            </li>
            <span className="divider">|</span>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="gl-tab"
                data-bs-toggle="tab"
                data-bs-target="#gl"
                type="button"
                role="tab"
              >
                GL
              </button>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="editbar-action mt-2 mt-md-0">
          <button className="btn btn-outline-danger rounded-5 px-3 py-1">
            <i className="bi bi-plus-circle-fill"></i> เลือกเอกสาร
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content mt-4" id="myTabContent">
        <div className="tab-pane fade show active" id="detail" role="tabpanel">
          <CustomerInfo />
        </div>
        <div className="tab-pane fade" id="receive" role="tabpanel">
          <div className="container">รายละเอียดการรับเงิน</div>
        </div>
        <div className="tab-pane fade" id="tax" role="tabpanel">
          <div className="container">ภาษีหัก ณ ที่จ่าย</div>
        </div>
        <div className="tab-pane fade" id="addinfo" role="tabpanel">
          <div className="container">ภาษีมูลค่าเพิ่มเพิ่มเติม</div>
        </div>
        <div className="tab-pane fade" id="extra" role="tabpanel">
          <div className="container">เพิ่มเติม</div>
        </div>
        <div className="tab-pane fade" id="gl" role="tabpanel">
          <div className="container">GL</div>
        </div>
      </div>
    </div>
  );
}

export default EditBar;
