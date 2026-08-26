import React, { useState } from "react";
import StatusModal from "../applications/components/StatusModal";

const ApplicationList = ({
  applications = [],
  loading = false,
  onRefresh,
  onView,
  onStatusChange,
}) => {
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const openStatusModal = (application) => {
    setSelectedApplication(application);
    setStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setStatusModalOpen(false);
    setSelectedApplication(null);
  };

  const handleStatusChange = async (applicationId, status) => {
    try {
      if (onStatusChange) {
        await onStatusChange(applicationId, status);
      }

      closeStatusModal();

      if (onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error("Failed to update application status:", error);
    }
  };

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "under_review":
      case "under review":
        return "bg-blue-100 text-blue-700";

      case "draft":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const formatStatus = (status) => {
    if (!status) return "N/A";

    return status
      .toString()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    try {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "N/A";
    }
  };

  if (loading) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl">
        <div className="flex items-center justify-center py-16">
          <div className="h-8 w-8 border-4 border-slate-200 border-t-slate-700 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Applications
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage and review loan applications
            </p>
          </div>

          {onRefresh && (
            <button
              type="button"
              onClick={onRefresh}
              className="px-4 py-2 text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              Refresh
            </button>
          )}
        </div>

        {/* Empty State */}
        {applications.length === 0 ? (
          <div className="py-16 text-center">
            <div className="text-4xl mb-3">📄</div>

            <h3 className="text-base font-semibold text-slate-800">
              No applications found
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Applications will appear here once they are created.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Application
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Applicant
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Loan Amount
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Created
                  </th>

                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {applications.map((application) => (
                  <tr
                    key={application.id}
                    className="hover:bg-slate-50 transition"
                  >
                    {/* Application */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-900">
                          {application.applicationNumber ||
                            application.applicationNo ||
                            application.id ||
                            "N/A"}
                        </p>

                        {application.loanType && (
                          <p className="text-xs text-slate-500 mt-1">
                            {application.loanType}
                          </p>
                        )}
                      </div>
                    </td>

                    {/* Applicant */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-800">
                          {application.applicant?.name ||
                            application.customer?.name ||
                            application.customerName ||
                            application.name ||
                            "N/A"}
                        </p>

                        {(application.applicant?.email ||
                          application.customer?.email ||
                          application.email) && (
                          <p className="text-xs text-slate-500 mt-1">
                            {application.applicant?.email ||
                              application.customer?.email ||
                              application.email}
                          </p>
                        )}
                      </div>
                    </td>

                    {/* Loan Amount */}
                    <td className="px-6 py-4">
                      <span className="font-medium text-slate-800">
                        {application.loanAmount != null
                          ? `₹${Number(application.loanAmount).toLocaleString(
                              "en-IN",
                            )}`
                          : application.amount != null
                            ? `₹${Number(application.amount).toLocaleString(
                                "en-IN",
                              )}`
                            : "N/A"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(
                          application.status,
                        )}`}
                      >
                        {formatStatus(application.status)}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDate(
                        application.createdAt || application.created_at,
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {onView && (
                          <button
                            type="button"
                            onClick={() => onView(application)}
                            className="px-3 py-1.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                          >
                            View
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => openStatusModal(application)}
                          className="px-3 py-1.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition"
                        >
                          Status
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Status Modal */}
      <StatusModal
        isOpen={statusModalOpen}
        application={selectedApplication}
        onClose={closeStatusModal}
        onStatusChange={handleStatusChange}
      />
    </>
  );
};

export default ApplicationList;
