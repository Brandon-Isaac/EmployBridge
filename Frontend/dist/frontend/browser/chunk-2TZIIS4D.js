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

// src/app/services/company.service.ts
var CompanyService = class _CompanyService {
  http;
  apiUrl = `${environment.apiUrl}/companies`;
  constructor(http) {
    this.http = http;
  }
  createCompany(data) {
    return this.http.post(this.apiUrl, data);
  }
  updateCompany(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deleteCompany(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getCompanyById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getCompanyEmployees(id) {
    return this.http.get(`${this.apiUrl}/${id}/employees`);
  }
  getCompanyJobs(id) {
    return this.http.get(`${this.apiUrl}/${id}/jobs`);
  }
  deleteJob(jobId) {
    return this.http.delete(`${this.apiUrl}/jobs/${jobId}`);
  }
  getCompanyProfile(id) {
    return this.http.get(`${this.apiUrl}/${id}/profile`);
  }
  getCompanyByUserId(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  // Helper method to format date
  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  // Helper method to get industry icon
  getIndustryIcon(industry) {
    const icons = {
      "Technology": "computer",
      "Healthcare": "local_hospital",
      "Finance": "account_balance",
      "Education": "school",
      "Manufacturing": "factory",
      "Retail": "store",
      "Other": "business"
    };
    return icons[industry] || icons["Other"];
  }
  static \u0275fac = function CompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-2TZIIS4D.js.map
