"use client";
import React, { useState, useEffect } from "react";
import LabelManager from "../components/LabelManager";
import { useUser } from "@clerk/nextjs";

//use auth name

const EmailAgentPage = () => {
  const { user } = useUser();
  const [userId, _] = useState(user?.primaryEmailAddress?.emailAddress || "");
  const [monitoringStatus, setMonitoringStatus] = useState(false);
  const [authUrl, setAuthUrl] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if monitoring is active on component mount
  useEffect(() => {
    checkMonitoringStatus();
    checkAuthStatus();
  }, []);

  const checkMonitoringStatus = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/active_monitors");
      const data = await response.json();
      setMonitoringStatus(data.active_monitors.includes(userId));
    } catch {
      setError("Failed to check monitoring status");
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/check_auth/${userId}`
      );
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch {
      setIsAuthenticated(false);
      setError("Failed to check authentication status");
    }
  };

  const startAuthentication = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/authenticate/${userId}`
      );
      const data = await response.json();

      if (data.needs_auth) {
        setAuthUrl(data.auth_url);
      } else {
        setIsAuthenticated(true);
        setError("");
      }
    } catch {
      setError("Failed to start authentication");
    }
  };

  const startMonitoring = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/start_monitoring/${userId}`
      );
      const data = await response.json();

      if (data.needs_auth) {
        setAuthUrl(data.auth_url);
      } else {
        setMonitoringStatus(true);
        setError("");
      }
    } catch {
      setError("Failed to start monitoring");
    }
  };

  const stopMonitoring = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/stop_monitoring/${userId}`
      );
      const data = await response.json();
      if (data.success) {
        setMonitoringStatus(false);
      }
    } catch {
      setError("Failed to stop monitoring");
    }
  };

  const submitAuthCode = async () => {
    try {
      if (!authCode.trim()) {
        setError("Please enter an authentication code");
        return;
      }

      const response = await fetch(
        `http://127.0.0.1:5000/submit_auth_code/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: authCode }),
        }
      );
      const data = await response.json();

      if (data.success) {
        setAuthUrl("");
        setAuthCode("");
        setIsAuthenticated(true);
        setError("");
        // Check monitoring status after successful authentication
        await checkMonitoringStatus();
      } else if (data.error) {
        setError(data.error);
      } else {
        setError("Authentication failed");
      }
    } catch {
      setError("Failed to submit authentication code");
    }
  };

  const handleLabelsUpdate = async () => {
    // Refresh monitoring status after label update
    await checkMonitoringStatus();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Email Monitoring Agent</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="space-y-8">
        {!authUrl ? (
          <>
            <div className="space-y-4">
              <div className="mb-4">
                Authentication Status:{" "}
                {isAuthenticated ? (
                  <span className="text-green-600">Authenticated</span>
                ) : (
                  <span className="text-red-600">Not Authenticated</span>
                )}
              </div>

              <div className="mb-4">
                Monitoring Status:{" "}
                {monitoringStatus ? (
                  <span className="text-green-600">Monitoring Active</span>
                ) : (
                  <span className="text-red-600">Monitoring Inactive</span>
                )}
              </div>

              {!isAuthenticated && (
                <button
                  onClick={startAuthentication}
                  className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Authenticate with Gmail
                </button>
              )}

              {isAuthenticated && monitoringStatus && (
                <button
                  onClick={stopMonitoring}
                  className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
                >
                  Stop Monitoring
                </button>
              )}

              {isAuthenticated && !monitoringStatus && (
                <button
                  onClick={startMonitoring}
                  className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
                >
                  Start Monitoring
                </button>
              )}
            </div>

            {isAuthenticated && !monitoringStatus && (
              <LabelManager
                userId={userId}
                onLabelsUpdate={handleLabelsUpdate}
              />
            )}
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="mb-2">Please authenticate with Gmail:</p>
              <p className="mb-4 text-sm text-gray-600">
                1. Click the link below to get your authentication code
                <br />
                2. Sign in to your Google account and authorize the application
                <br />
                3. Copy the code provided by Google and paste it below
              </p>
              <a
                href={authUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline"
              >
                Click here to authenticate
              </a>
            </div>

            <div>
              <label
                htmlFor="authCode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Authentication Code
              </label>
              <input
                id="authCode"
                type="text"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                placeholder="Enter the code from Google"
                className="border p-2 rounded w-full max-w-md"
              />
            </div>

            <button
              onClick={submitAuthCode}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              disabled={!authCode.trim()}
            >
              Submit Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailAgentPage;
