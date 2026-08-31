# 🚀 WaveInit LMS – Playwright Automation Framework

<p align="center">

  <img src="https://img.shields.io/badge/Playwright-Automation-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-Framework-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Cucumber-BDD-23D96C?style=for-the-badge&logo=cucumber&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Excel-Test%20Data-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" />

</p>

<p align="center">
  <b>End-to-End Web Automation Framework for WaveInit LMS</b>
</p>

---

## 📌 About the Project

This project is an **end-to-end web automation testing framework** developed for the **WaveInit Learning Management System (LMS)**.

The framework is built using:

- 🎭 Playwright
- 🥒 Cucumber BDD
- 🔷 TypeScript
- 📊 Excel-based test data
- 📧 Mailosaur for email/OTP validation
- 📝 Custom logging
- 📸 Screenshot capture on failure
- 🌱 Environment-based configuration

The framework follows the **Page Object Model (POM)** and supports reusable, maintainable, and data-driven test automation.

---

## 🎯 Project Objectives

The main objectives of this automation framework are:

- Automate critical LMS workflows
- Reduce manual testing effort
- Implement BDD-based test scenarios
- Maintain reusable Page Objects
- Execute data-driven tests using Excel
- Validate email-based OTP workflows
- Capture screenshots for failed scenarios
- Provide clear execution logs
- Support environment-based configuration
- Make the framework scalable for future modules

---

# 🧪 Modules Automated

| Module | Coverage |
|---|---|
| 🔐 Admin Login | Login, invalid credentials, empty fields |
| 🔑 Forgot Password | OTP retrieval, password reset, validation |
| 👨‍🏫 Trainer Login | Valid and invalid login scenarios |
| 📚 Course Search | Search and course validation |
| 🎓 Training Management | Create training sessions |
| 👥 Participant Management | Add participants using Excel |
| 📧 Email Validation | OTP retrieval using Mailosaur |
| 📊 Data Driven Testing | Excel-based test execution |

---

# 🏗️ Framework Architecture


Playwright_Automation_Project_3
│
├── 📁 env
│   ├── url.env
│   └── login.env
│
├── 📁 src
│   │
│   ├── 📁 services
│   │   └── mailosaurService.ts
│   │
│   ├── 📁 utilities
│   │   ├── base utilities
│   │   ├── excelReader.ts
│   │   ├── envreader.ts
│   │   └── logger.ts
│   │
│   └── 📁 test
│       │
│       ├── 📁 feature
│       │   ├── login.feature
│       │   ├── forgotPassword.feature
│       │   ├── addTraining.feature
│       │   ├── addParticipant.feature
│       │   └── ...
│       │
│       ├── 📁 page
│       │   ├── basepage.ts
│       │   ├── adminLoginPage.ts
│       │   ├── trainerLoginPage.ts
│       │   ├── forgotPasswordPage.ts
│       │   ├── addTrainingPage.ts
│       │   ├── addParticipant.ts
│       │   └── ...
│       │
│       ├── 📁 step
│       │   ├── adminLoginStep.ts
│       │   ├── forgotPasswordStep.ts
│       │   ├── addTrainingStep.ts
│       │   ├── addParticipantStep.ts
│       │   └── ...
│       │
│       ├── 📁 hooks
│       │   └── hooks.ts
│       │
│       └── 📁 world
│           └── customworld.ts
│
├── 📁 test-data
│   └── AddParticipant.xlsx
│
├── 📁 reports
│   └── screenshots
│
├── 📄 package.json
├── 📄 cucumber.js
├── 📄 tsconfig.json
└── 📄 README.md


## 🛠️ Installation & Setup

### 📋 Prerequisites

Before running the automation framework, make sure the following are installed:

- **Node.js** 18 or above
- **npm**
- **Git**
- **VS Code** (Recommended)

Verify the installation:

node -v
npm -v
git --version

<p align="center">

# 🛡️ Glitch Guardians

### 🧪 "We Don't Just Test Software — We Hunt the Glitches."

**Quality First • Bugs Never Escape • Automation Everywhere**

</p>

---

### 👥 Team

**Team Name:** `Glitch Guardians`

> 🛡️ **Our Mission:** Find the glitches before they find the users.

> 🧪 **Our Approach:** Automate. Validate. Break. Fix. Repeat.

> 🚀 **Our Goal:** Deliver reliable, high-quality software through smart and scalable test automation.



| 👤 Team Member |
|----------------|
| **Malavicka** |
| **Vetrivel** |
| **Muhidhar** |
| **Mylambigai** |
| **Shobana** |
