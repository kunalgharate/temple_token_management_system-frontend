import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import employeesData from '../data/employees.json';

const Employees = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const totalPages = Math.ceil(employeesData.employees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEmployees = employeesData.employees.slice(startIndex, endIndex);

  return (
    <div className="employees-page">
      <div className="page-header">
        <h1>{language === 'hi' ? 'कर्मचारी सूची' : 'Employee List'}</h1>
        <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>
          {language === 'hi' ? `कुल कर्मचारी: ${employeesData.employees.length}` : `Total Employees: ${employeesData.employees.length}`}
        </p>
      </div>
      
      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>{language === 'hi' ? 'क्रमांक' : 'Sr. No.'}</th>
              <th>{language === 'hi' ? 'नाम' : 'Name'}</th>
              <th>{language === 'hi' ? 'पद' : 'Position'}</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{startIndex + index + 1}</td>
                <td>
                  <div className="employee-name">
                    <div className="name-hi">{employee.name}</div>
                    <div className="name-en">{employee.nameEn}</div>
                  </div>
                </td>
                <td>
                  <div className="employee-position">
                    <div className="position-hi">{employee.position}</div>
                    <div className="position-en">{employee.positionEn}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          ← {language === 'hi' ? 'पिछला' : 'Previous'}
        </button>
        
        <div className="pagination-info">
          {language === 'hi' ? 'पृष्ठ' : 'Page'} {currentPage} {language === 'hi' ? 'का' : 'of'} {totalPages}
        </div>
        
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          {language === 'hi' ? 'अगला' : 'Next'} →
        </button>
      </div>
    </div>
  );
};

export default Employees;
