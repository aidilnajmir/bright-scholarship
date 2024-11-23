import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import CommitteeDashboard from './pages/CommitteeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import ApplyScholarshipPage from './pages/ApplyScholarshipPage';
import ApplicationStatusPage from './pages/ApplicationStatusPage';
import VotingPage from './pages/VotingPage';
import ReimbursementPage from './pages/ReimbursementPage';
import SendResults from './pages/SendResultEmails';
import ViewApplications from './pages/ViewApplications';
import ManageUsers from './pages/ManageUsers';
import ManageApplication from './pages/ManageDates';
import ViewAllApplications from './pages/ViewApplicationsAdmin';

function App() {
    return (
        <Router>
            <Routes>
                {/* General Pages */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Student Pages */}
                <Route path="/student/dashboard" element={<StudentDashboard />} />
                <Route path="/student/apply" element={<ApplyScholarshipPage />} />
                <Route path="/student/status" element={<ApplicationStatusPage />} />

                {/* Committee Pages */}
                <Route path="/committee/dashboard" element={<CommitteeDashboard />} />
                <Route path="/committee/view-applications" element={<ViewApplications />} />
                <Route path="/committee/voting" element={<VotingPage />} />
                <Route path="/committee/send-emails" element={<SendResults />} />
                <Route path="/committee/reimbursement" element={<ReimbursementPage />} />

                {/* Admin Pages */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/manage-users" element={<ManageUsers />} />
                <Route path="/admin/manage-dates" element={<ManageApplication />} />
                <Route path="/admin/view-applications" element={<ViewAllApplications />} />
            </Routes>
        </Router>
    );
}

export default App;
