// src/controllers/dashboardController.js
const axios = require('axios');

class DashboardController {
  /**
   * Render the dashboard page
   */
  async renderDashboard(req, res) {
    try {
      res.render("layouts/dashboard_page", {
        title: "Dashboard",
        currentPage: "dashboard",
        pageTitle: "Dashboard",
        pageIcon: "bi-grid-1x2-fill",
      });
    } catch (error) {
      console.error('Error rendering dashboard:', error);
      res.status(500).send('Error loading dashboard');
    }
  }
}

module.exports = new DashboardController();