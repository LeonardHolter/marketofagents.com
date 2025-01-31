import React, { useState, useEffect } from "react";

interface LabelManagerProps {
  userId: string;
  onLabelsUpdate: () => void;
}

const LabelManager: React.FC<LabelManagerProps> = ({
  userId,
  onLabelsUpdate,
}) => {
  const [newLabel, setNewLabel] = useState("");
  const [labels, setLabels] = useState<string[]>([]);
  const [error, setError] = useState("");

  // Fetch existing labels when component mounts
  useEffect(() => {
    const fetchLabels = async () => {
      try {
        // Get current labels for the user
        const response = await fetch(
          `http://127.0.0.1:5000/get_labels/${userId}`
        );
        const data = await response.json();
        if (data.labels) {
          setLabels(data.labels);
        }
      } catch (err) {
        setError("Failed to fetch existing labels");
      }
    };

    fetchLabels();
  }, [userId]);

  const addLabel = () => {
    if (newLabel.trim()) {
      setLabels([...labels, newLabel.trim()]);
      setNewLabel("");
    }
  };

  const removeLabel = (index: number) => {
    setLabels(labels.filter((_, i) => i !== index));
  };

  const startMonitoringWithLabels = async () => {
    try {
      // Convert labels array to URL query parameters
      const labelParams = labels
        .map((label) => `labels=${encodeURIComponent(label)}`)
        .join("&");
      const response = await fetch(
        `http://127.0.0.1:5000/start_monitoring/${userId}?${labelParams}`
      );
      const data = await response.json();

      if (data.success) {
        onLabelsUpdate();
        setError("");
      } else if (data.needs_auth) {
        // Handle authentication if needed
        window.location.href = data.auth_url;
      } else {
        setError("Failed to start monitoring");
      }
    } catch (err) {
      setError("Failed to start monitoring");
    }
  };

  const updateLabels = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/update_labels/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ labels }),
        }
      );
      const data = await response.json();

      if (data.success) {
        onLabelsUpdate();
        setError("");
      } else {
        setError(data.error || "Failed to update labels");
      }
    } catch (err) {
      setError("Failed to update labels");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Manage Labels</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          placeholder="Enter new label"
          className="border p-2 rounded flex-grow"
        />
        <button
          onClick={addLabel}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {labels.map((label, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 bg-gray-50 rounded"
          >
            <span className="flex-grow">{label}</span>
            <button
              onClick={() => removeLabel(index)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {labels.length > 0 && (
        <div className="space-y-2">
          <button
            onClick={startMonitoringWithLabels}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded w-full"
          >
            Start Monitoring with Labels
          </button>
          <button
            onClick={updateLabels}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded w-full"
          >
            Update Labels
          </button>
        </div>
      )}
    </div>
  );
};

export default LabelManager;
