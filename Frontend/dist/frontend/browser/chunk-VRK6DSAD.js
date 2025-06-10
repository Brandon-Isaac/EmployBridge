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

// src/app/services/job.service.ts
var JobService = class _JobService {
  http;
  apiUrl = `${environment.apiUrl}/jobs`;
  constructor(http) {
    this.http = http;
  }
  // Get all jobs
  getAllJobs() {
    return this.http.get(this.apiUrl);
  }
  // Get job by ID
  getJobById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Create new job
  createJob(job) {
    return this.http.post(this.apiUrl, job);
  }
  // Update job
  updateJob(id, job) {
    return this.http.put(`${this.apiUrl}/${id}`, job);
  }
  // Delete job
  deleteJob(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Get jobs by employer
  getJobsByEmployer(employerId) {
    return this.http.get(`${this.apiUrl}/employer/${employerId}`);
  }
  // Search jobs
  searchJobs(params) {
    const queryParams = new URLSearchParams();
    if (params.query)
      queryParams.set("query", params.query);
    if (params.location)
      queryParams.set("location", params.location);
    if (params.skills?.length)
      queryParams.set("skills", params.skills.join(","));
    if (params.employmentType)
      queryParams.set("employmentType", params.employmentType);
    if (params.sortBy)
      queryParams.set("sortBy", params.sortBy);
    if (params.minSalary)
      queryParams.set("minSalary", params.minSalary.toString());
    return this.http.get(`${this.apiUrl}/search?${queryParams.toString()}`);
  }
  // Get recommended jobs for the current user
  getRecommendedJobs() {
    return this.http.get(`${this.apiUrl}/recommended`);
  }
  // Generate job with AI
  generateJobWithAI(params) {
    return this.http.post(`${this.apiUrl}/generate`, params);
  }
  getJobs() {
    return this.http.get(this.apiUrl);
  }
  getJob(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function JobService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobService, factory: _JobService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  JobService
};
//# sourceMappingURL=chunk-VRK6DSAD.js.map
