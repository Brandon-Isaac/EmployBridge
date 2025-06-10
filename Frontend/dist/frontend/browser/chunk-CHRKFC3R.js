import {
  environment
} from "./chunk-IPERWXTS.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IDO4PSKF.js";

// src/app/services/application.service.ts
var ApplicationStatus;
(function(ApplicationStatus2) {
  ApplicationStatus2["PENDING"] = "PENDING";
  ApplicationStatus2["REVIEWED"] = "REVIEWED";
  ApplicationStatus2["INTERVIEW"] = "INTERVIEW";
  ApplicationStatus2["ACCEPTED"] = "ACCEPTED";
  ApplicationStatus2["REJECTED"] = "REJECTED";
})(ApplicationStatus || (ApplicationStatus = {}));
var ApplicationService = class _ApplicationService {
  http;
  apiUrl = `${environment.apiUrl}/applications`;
  constructor(http) {
    this.http = http;
  }
  createApplication(data) {
    return this.http.post(this.apiUrl, data);
  }
  getUserApplications(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  getApplication(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  updateApplicationStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status });
  }
  // Get all applications for a job
  getJobApplications(jobId) {
    return this.http.get(`${this.apiUrl}/job/${jobId}`);
  }
  // Get application match score
  getApplicationMatchScore(id) {
    return this.http.get(`${this.apiUrl}/${id}/match-score`);
  }
  // Helper method to format match score
  formatMatchScore(score) {
    return `${score.toFixed(1)}%`;
  }
  // Helper method to format date
  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  // Helper method to check if application is in interview stage
  isInterviewStage(status) {
    return status === ApplicationStatus.INTERVIEW;
  }
  // Helper method to check if application is accepted
  isAccepted(status) {
    return status === ApplicationStatus.ACCEPTED;
  }
  // Helper method to check if application is rejected
  isRejected(status) {
    return status === ApplicationStatus.REJECTED;
  }
  // Helper method to get status color for UI
  getStatusColor(status) {
    switch (status) {
      case ApplicationStatus.ACCEPTED:
        return "success";
      case ApplicationStatus.REJECTED:
        return "danger";
      case ApplicationStatus.INTERVIEW:
        return "warning";
      case ApplicationStatus.REVIEWED:
        return "info";
      default:
        return "secondary";
    }
  }
  getUserInterviews(userId) {
    return this.http.get(`${this.apiUrl}/interviews/${userId}`);
  }
  respondToInterview(interviewId, response) {
    return this.http.post(`${this.apiUrl}/interviews/${interviewId}/respond`, { response });
  }
  static \u0275fac = function ApplicationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationService, factory: _ApplicationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApplicationStatus,
  ApplicationService
};
//# sourceMappingURL=chunk-CHRKFC3R.js.map
