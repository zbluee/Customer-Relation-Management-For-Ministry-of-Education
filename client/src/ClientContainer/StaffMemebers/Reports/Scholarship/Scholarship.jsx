import { useEffect, useState } from 'react';
import axios from 'axios';
import ScholarshipReport from '../../../Admin/Pages/Reports/scholarShipReport/ScholarshipReport';

const Scholarship = (props) => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get("/issue/report", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { aggregateReport } = response.data;
        const transferReports = aggregateReport.filter(report => report.serviceType === "scholarshipRequest");
        setReportData(transferReports);
      } catch (error) {
        alert(error?.response?.data?.msg);
      }
    };

    fetchReportData();
  }, []);

  return (
    <div>
      <div className={`modal ${props.openScholarshipModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.scholarshipModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h5 className="modal-title ms-5">{props.title}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={props.closeScholarshipModal}></button>
            </div>
            <div className="modal-body">
            {reportData.length === 0 ? (
                <p style={{color:"red",fontSize:"3rem"}}>Currently No Data</p>
              ) : (
              reportData.map((report, index) => (
                <ScholarshipReport
                  key={index}
                  // title={report.serviceType}
                  title= "Scholarship Request"
                  issueType={report.serviceType}
                  details={report.mostCommonIssueDescriptions.join("\n")}
                  fromDate={props.fromDate}
                  toDate={props.toDate}
                  issuesReceived={report.count}
                  issuesHandled={report.count - report.issueStatus[0].count}
                  issuesProcessing={report.issueStatus[0].count}
                />
              )))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger rounded-pill" onClick={props.closeScholarshipModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
