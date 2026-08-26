import React, { useEffect, useState } from "react";

const STATUS_OPTIONS = [
  {
    value: "PENDING",
    label: "Pending",
    description: "Application is waiting for review.",
  },
  {
    value: "UNDER_REVIEW",
    label: "Under Review",
    description: "Application is currently being reviewed.",
  },
  {
    value: "APPROVED",
    label: "Approved",
    description: "Application has been approved.",
  },
  {
    value: "REJECTED",
    label: "Rejected",
    description: "Application has been rejected.",
  },
];

const StatusModal = ({
  isOpen,
  application,
  onClose,
  onStatusChange,
  loading = false,
}) => {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (application) {
      setStatus(
        application.status
          ? application.status.toString().toUpperCase()
          : "PENDING"
      );
      setError("");
    }
  }, [application]);

  useEffect(() => {
    if (!isOpen) {
      setStatus("");
      setError("");
    }
  }, [isOpen]);

  if (!isOpen || !application) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!status) {
      setError("Please select a status.");
      return;
    }

    try {
      setError("");

      await onStatusChange(application.id, status);
    } catch (err) {
      console.error("Status update failed:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update application status."
      );
    }
  };

  const applicationNumber =
    application.applicationNumber ||
    application.applicationNo ||
    application.id;

  const applicantName =
    application.applicant?.name ||
    application.customer?.name ||
    application.customerName ||
    application.name ||
    "N/A";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Update Status
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Change application status
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Application Info */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500">Application</p>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                {applicationNumber || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Applicant</p>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                {applicantName}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Application Status
            </label>

            <div className="space-y-2">
              {STATUS_OPTIONS.map((option) => {
                const selected = status === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setStatus(option.value)}
                    className={`w-full text-left p-3 rounded-xl border transition ${
                      selected
                        ? "border-slate-900 bg-slate-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center ${
                          selected
                            ? "border-slate-900"
                            : "border-slate-300"
                        }`}
                      >
                        {selected && (
                          <div className="w-2 h-2 rounded-full bg-slate-900" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {option.label}
                        </p>

                        <p className="text-xs text-slate-500 mt-0.5">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {error && (
              <div className="mt-4 px-3 py-2.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading || !status}
              className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Updating..." : "Update Status"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StatusModal;