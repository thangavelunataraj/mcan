import React from "react";
import "./DeleteConfirmation.css";

const DeleteConfirmationModal = ({ show, onDelete, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>⚠️ Delete confirmation</h3>
        <p>Are you sure you want to delete this Applicant?</p>
        <div className="modal-buttons">
          <button className="btn-delete" onClick={onDelete}>
            Delete
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
