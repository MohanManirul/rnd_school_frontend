import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/pages/auth/login/login-index.vue'),
  },
  {
    path: '/login-2',
    name: 'login-2',
    component: () => import('@/views/pages/pages/auth/login/login-2.vue'),
  },
  {
    path: '/login-3',
    name: 'login-3',
    component: () => import('@/views/pages/pages/auth/login/login-3.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/pages/auth/register/register-index.vue'),
  },
  {
    path: '/register-2',
    name: 'register-2',
    component: () => import('@/views/pages/pages/auth/register/register-2.vue'),
  },
  {
    path: '/register-3',
    name: 'register-3',
    component: () => import('@/views/pages/pages/auth/register/register-3.vue'),
  }, 
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/pages/auth/forgot-password/forgot-password.vue'),
  },
  {
    path: '/forgot-password-2',
    name: 'forgot-password-2',
    component: () => import('@/views/pages/pages/auth/forgot-password/forgot-password-2.vue'),
  },
  {
    path: '/forgot-password-3',
    name: 'forgot-password-3',
    component: () => import('@/views/pages/pages/auth/forgot-password/forgot-password-3.vue'),
  },
  {
    path: '/reset-password-success',
    name: 'reset-password-success',
    component: () => import('@/views/pages/pages/auth/reset-password/reset-password-success.vue'),
  },
  {
    path: '/reset-password-success-2',
    name: 'reset-password-success-2',
    component: () => import('@/views/pages/pages/auth/reset-password/reset-password-success-2.vue'),
  },
  {
    path: '/reset-password-success-3',
    name: 'reset-password-success-3',
    component: () => import('@/views/pages/pages/auth/reset-password/reset-password-success-3.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/pages/auth/reset-password/reset-password.vue'),
  },
  {
    path: '/reset-password-2',
    name: 'reset-password-2',
    component: () => import('@/views/pages/pages/auth/reset-password/reset-password-2.vue'),
  },
  {
    path: '/reset-password-3',
    name: 'reset-password-3',
    component: () => import('@/views/pages/pages/auth/reset-password/reset-password-3.vue'),
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/pages/auth/email-verification/email-verification.vue'),
  },
  {
    path: '/email-verification-2',
    name: 'email-verification-2',
    component: () => import('@/views/pages/pages/auth/email-verification/email-verification-2.vue'),
  },
  {
    path: '/email-verification-3',
    name: 'email-verification-3',
    component: () => import('@/views/pages/pages/auth/email-verification/email-verification-3.vue'),
  },
  {
    path: '/two-step-verification',
    name: 'two-step-verification',
    component: () => import('@/views/pages/pages/auth/two-step-verification/two-step-verification.vue'),
  },
  {
    path: '/two-step-verification-2',
    name: 'two-step-verification-2',
    component: () => import('@/views/pages/pages/auth/two-step-verification/two-step-verification-2.vue'),
  },
  {
    path: '/two-step-verification-3',
    name: 'two-step-verification-3',
    component: () => import('@/views/pages/pages/auth/two-step-verification/two-step-verification-3.vue'),
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: () => import('@/views/pages/pages/auth/lock-screen.vue'),
  },
  {
    path: '/404-error',
    name: '404-error',
    component: () => import('@/views/pages/pages/error/404-error.vue'),
  },
  {
    path: '/500-error',
    name: '500-error',
    component: () => import('@/views/pages/pages/error/500-error.vue'),
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('@/views/pages/pages/coming-soon.vue'),
  },
  {
    path: '/under-maintenance',
    name: 'under-maintenance',
    component: () => import('@/views/pages/pages/under-maintenance.vue'),
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('@/views/pages/activities-index.vue'),
  },
   {
    path: "/baseui",
    component: () => import('@/views/pages/uiinterface/baseui/base-ui.vue'),
    children: [
      { path: "", redirect: "/baseui/ui-accordion" },
      { path: "ui-accordion", component: () => import('@/views/pages/uiinterface/baseui/ui-accordion.vue') },
      { path: "ui-alerts", component: () => import('@/views/pages/uiinterface/baseui/ui-alerts.vue') },
      { path: "ui-avatar", component: () => import('@/views/pages/uiinterface/baseui/ui-avatar.vue') },
      { path: "ui-badges", component: () => import('@/views/pages/uiinterface/baseui/ui-badges.vue') },
      { path: "ui-borders", component: () => import('@/views/pages/uiinterface/baseui/ui-borders.vue') },
      { path: "ui-breadcrumb", component: () => import('@/views/pages/uiinterface/baseui/ui-breadcrumb.vue') },
      { path: "ui-buttons", component: () => import('@/views/pages/uiinterface/baseui/ui-buttons.vue') },
      { path: "ui-buttons-group", component: () => import('@/views/pages/uiinterface/baseui/ui-buttons-group.vue') },
      { path: "ui-cards", component: () => import('@/views/pages/uiinterface/baseui/ui-cards.vue') },
      { path: "ui-carousel", component: () => import('@/views/pages/uiinterface/baseui/carousel/ui-carousel.vue') },
      { path: "ui-colors", component: () => import('@/views/pages/uiinterface/baseui/ui-colors.vue') },
      { path: "ui-dropdowns", component: () => import('@/views/pages/uiinterface/baseui/ui-dropdowns.vue') },
      { path: "ui-grid", component: () => import('@/views/pages/uiinterface/baseui/ui-grid.vue') },
      { path: "ui-images", component: () => import('@/views/pages/uiinterface/baseui/ui-images.vue') },
      { path: "ui-modals", component: () => import('@/views/pages/uiinterface/baseui/ui-modals.vue') },
      { path: "ui-media", component: () => import('@/views/pages/uiinterface/baseui/ui-media.vue') },
      { path: "ui-offcanvas", component: () => import('@/views/pages/uiinterface/baseui/ui-offcanvas.vue') },
      { path: "ui-pagination", component: () => import('@/views/pages/uiinterface/baseui/ui-pagination.vue') },
      { path: "ui-placeholders", component: () => import('@/views/pages/uiinterface/baseui/ui-placeholders.vue') },
      { path: "ui-popovers", component: () => import('@/views/pages/uiinterface/baseui/ui-popovers.vue') },
      { path: "ui-progress", component: () => import('@/views/pages/uiinterface/baseui/ui-progress.vue') },
      { path: "ui-spinner", component: () => import('@/views/pages/uiinterface/baseui/ui-spinner.vue') },
      { path: "ui-nav-tabs", component: () => import('@/views/pages/uiinterface/baseui/ui-nav-tabs.vue') },
      { path: "ui-tooltips", component: () => import('@/views/pages/uiinterface/baseui/ui-tooltips.vue') },
      { path: "ui-typography", component: () => import('@/views/pages/uiinterface/baseui/ui-typography.vue') },
      { path: "ui-video", component: () => import('@/views/pages/uiinterface/baseui/ui-video.vue') },
      { path: "ui-lightbox", component: () => import('@/views/pages/uiinterface/baseui/lightbox/ui-lightbox.vue') },
    ],
  },
  {
    path: '/layout-mini',
    name: 'layout-mini',
    component: () => import('@/views/pages/layouts/layout-mini.vue'),
  },
  {
    path: '/layout-default',
    name: 'layout-default',
    component: () => import('@/views/pages/layouts/layout-default.vue'),
  },
  {
    path: '/layout-box',
    name: 'layout-box',
    component: () => import('@/views/pages/layouts/layout-box.vue'),
  },
  {
    path: '/layout-rtl',
    name: 'layout-rtl',
    component: () => import('@/views/pages/layouts/layout-rtl.vue'),
  },
  {
    path: '/layout-dark',
    name: 'layout-dark',
    component: () => import('@/views/pages/layouts/layout-dark.vue'),
  },
    {
    path: "/advancedui",
    component: () => import('@/views/pages/uiinterface/advancedui/advanced-ui.vue'),
    children: [
      { path: "", redirect: "/advancedui/ui-ribbon" },
      { path: "ui-ribbon", component: () => import('@/views/pages/uiinterface/advancedui/ui-ribbon.vue') },
      { path: "ui-clipboard", component: () => import('@/views/pages/uiinterface/advancedui/ui-clipboard.vue') },
      { path: "ui-drag-drop", component: () => import('@/views/pages/uiinterface/advancedui/ui-drag-drop.vue') },
      { path: "ui-rangeslider", component: () => import('@/views/pages/uiinterface/advancedui/ui-rangeslider.vue') },
      { path: "ui-rating", component: () => import('@/views/pages/uiinterface/advancedui/ui-rating.vue') },
      { path: "ui-counter", component: () => import('@/views/pages/uiinterface/advancedui/ui-counter.vue') },
      { path: "ui-stickynote", component: () => import('@/views/pages/uiinterface/advancedui/ui-stickynote.vue') },
      { path: "ui-timeline", component: () => import('@/views/pages/uiinterface/advancedui/ui-timeline.vue') },
    ],
  },
  {
    path: "/form-elements",
    component: () => import('@/views/pages/uiinterface/form/form-elements/form-elements.vue'),
    children: [
      { path: "", redirect: "/form-elements/form-basic-inputs" },
      { path: "form-basic-inputs", component: () => import('@/views/pages/uiinterface/form/form-elements/formbasic/formbasic-input.vue') },
      { path: "form-checkbox-radios", component: () => import('@/views/pages/uiinterface/form/form-elements/form-checkbox-radios.vue') },
      { path: "form-input-groups", component: () => import('@/views/pages/uiinterface/form/form-elements/forminput/form-input.vue') },
      { path: "form-grid-gutters", component: () => import('@/views/pages/uiinterface/form/form-elements/form-grid-gutters.vue') },
      { path: "form-mask", component: () => import('@/views/pages/uiinterface/form/form-elements/formmask/formmask.vue') },
      { path: "form-select", component: () => import('@/views/pages/uiinterface/form/form-elements/form-select.vue') },
      { path: "form-fileupload", component: () => import('@/views/pages/uiinterface/form/form-elements/formfile-upload.vue') },
    ],
  },
  {
    path: "/form-layouts",
    component: () => import('@/views/pages/uiinterface/form/layouts/form-layouts.vue'),
    children: [
      { path: "", redirect: "/form-layouts/form-horizontal" },
      { path: "form-horizontal", component: () => import('@/views/pages/uiinterface/form/layouts/form-horizontal.vue') },
      { path: "form-vertical", component: () => import('@/views/pages/uiinterface/form/layouts/form-vertical.vue') },
      { path: "form-floating-labels", component: () => import('@/views/pages/uiinterface/form/layouts/form-floating-labels.vue') },
    ],
  },
  {
    path: "/form",
    component: () => import('@/views/pages/uiinterface/form/ui-forms.vue'),
    children: [
      { path: "", redirect: "/form/form-validation" },
      { path: "form-validation", component: () => import('@/views/pages/uiinterface/form/form-validation.vue') },
      { path: "form-select2", component: () => import('@/views/pages/uiinterface/form/form-select2.vue') },
      { path: "form-wizard", component: () => import('@/views/pages/uiinterface/form/form-wizard.vue') },
    ],
  },
  {
    path: "/tables",
    component: () => import('@/views/pages/uiinterface/tables/ui-tables.vue'),
    children: [
      { path: "", redirect: "/tables/tables-basic" },
      { path: "tables-basic", component: () => import('@/views/pages/uiinterface/tables/tables-basic.vue') },
      { path: "data-tables", component: () => import('@/views/pages/uiinterface/tables/data-tables.vue') },
    ],
  },
  {
    path: "/charts",
    component: () => import('@/views/pages/uiinterface/charts/ui-charts.vue'),
    children: [
      { path: "", redirect: "/charts/chart-apex" },
      { path: "chart-apex", component: () => import('@/views/pages/uiinterface/charts/apex/chart-apex.vue') },
      { path: "chart-c3", component: () => import('@/views/pages/uiinterface/charts/c3/chart-c3.vue') },
      { path: "chart-js", component: () => import('@/views/pages/uiinterface/charts/js/chart-js.vue') },
      { path: "chart-flot", component: () => import('@/views/pages/uiinterface/charts/flot/chart-flot.vue') },
      { path: "chart-morris", component: () => import('@/views/pages/uiinterface/charts/morris/chart-morris.vue') },
    ],
  },
  {
    path: "/icons",
    component: () => import('@/views/pages/uiinterface/icons/ui-icons.vue'),
    children: [
      { path: "", redirect: "/icons/icon-fontawesome" },
      { path: "icon-fontawesome", component: () => import('@/views/pages/uiinterface/icons/icon-fontawesome.vue') },
      { path: "icon-ionic", component: () => import('@/views/pages/uiinterface/icons/icon-ionic.vue') },
      { path: "icon-material", component: () => import('@/views/pages/uiinterface/icons/icon-material.vue') },
      { path: "icon-feather", component: () => import('@/views/pages/uiinterface/icons/icon-feather.vue') },
      { path: "icon-pe7", component: () => import('@/views/pages/uiinterface/icons/icon-pe7.vue') },
      { path: "icon-weather", component: () => import('@/views/pages/uiinterface/icons/icon-weather.vue') },
      { path: "icon-typicon", component: () => import('@/views/pages/uiinterface/icons/icon-typicon.vue') },
      { path: "icon-flag", component: () => import('@/views/pages/uiinterface/icons/icon-flag.vue') },
    ],
  },
  {
    path: '/settings',
    component: () => import('@/views/pages/settings/general-settings/settings-index.vue'),
    children: [
      { path: '', redirect: '/settings/profile-settings' },
      { path: "profile-settings", component: () => import('@/views/pages/settings/general-settings/profile-settings.vue') },
      { path: "security-settings", component: () => import('@/views/pages/settings/general-settings/security-settings.vue') },
      { path: "notifications-settings", component: () => import('@/views/pages/settings/general-settings/notifications-settings.vue') },
      { path: "connected-apps", component: () => import('@/views/pages/settings/general-settings/connected-apps.vue') },
    ]
  },
  {
    path: '/website-settings',
    component: () => import('@/views/pages/settings/website-settings/website-settings.vue'),
    children: [
      { path: '', redirect: '/website-settings/company-settings' },
      { path: "company-settings", component: () => import('@/views/pages/settings/website-settings/company-settings.vue') },
      { path: "localization", component: () => import('@/views/pages/settings/website-settings/localization-settings.vue') },
      { path: "prefixes", component: () => import('@/views/pages/settings/website-settings/prefixes-settings.vue') },
      { path: "preferences", component: () => import('@/views/pages/settings/website-settings/preferences-settings.vue') },
      { path: "social-authentication",  component: () => import('@/views/pages/settings/website-settings/social-authentication.vue') },
      { path: "language",  component: () => import('@/views/pages/settings/website-settings/language-settings.vue') },
    ]
  },
  {
    path: '/app-settings',
    component: () => import('@/views/pages/settings/app-settings/app-settings.vue'),
    children: [
      { path: '', redirect: '/app-settings/invoice-settings' },
      { path: "invoice-settings", component: () => import('@/views/pages/settings/app-settings/invoice-settings.vue'), },
      { path: "custom-fields", component: () => import('@/views/pages/settings/app-settings/custom-fields.vue'), },
    ]
  },
  {
    path: '/system-settings',
    component: () => import('@/views/pages/settings/system-settings/system-settings.vue'),
    children: [
      { path: '', redirect: '/system-settings/email-settings' },
      { path: "email-settings", component: () => import('@/views/pages/settings/system-settings/email-settings.vue'), },
      { path: "email-templates", component: () => import('@/views/pages/settings/system-settings/email-templates.vue'), },
      { path: "sms-settings", component: () => import('@/views/pages/settings/system-settings/sms-settings.vue'), },
      { path: "otp-settings", component: () => import('@/views/pages/settings/system-settings/otp-settings.vue'), },
      { path: "gdpr-cookies", component: () => import('@/views/pages/settings/system-settings/gdpr-cookies.vue'), },
    ]
  },
  {
    path: '/financial-settings',
    component: () => import('@/views/pages/settings/financial-settings/financial-settings.vue'),
    children: [
      { path: '', redirect: '/financial-settings/payment-gateways' },
      { path: "payment-gateways", component: () => import('@/views/pages/settings/financial-settings/payment-gateways.vue'), },
      { path: "tax-rates", component: () => import('@/views/pages/settings/financial-settings/tax-rates.vue'), },
    ]
  },
  {
    path: '/academic-settings',
    component: () => import('@/views/pages/settings/academic-settings/academic-settings.vue'),
    children: [
      { path: '', redirect: '/academic-settings/school-settings' },
      { path: "school-settings", component: () => import('@/views/pages/settings/academic-settings/school-settings.vue'), },
      { path: "religion", component: () => import('@/views/pages/settings/academic-settings/religion-settings.vue'), },
    ]
  },
  {
    path: '/others-settings',
    component: () => import('@/views/pages/settings/others-settings/others-settings.vue'),
    children: [
      { path: '', redirect: '/others-settings/storage' },
      { path: "storage", component: () => import('@/views/pages/settings/others-settings/storage-settings.vue'), },
      { path: "ban-ip-address", component: () => import('@/views/pages/settings/others-settings/ban-ip-address.vue'), },
    ]
  },
  {
    path: '/pages',
    component: () => import('@/views/pages/pages/pages-index.vue'),
    children: [
      { path: '', redirect: '/pages/profile' },
      { path: "profile", component: () => import('@/views/pages/pages/profile-index.vue'), },
      { path: "blank-page", component: () => import('@/views/pages/pages/blank-page.vue'), },
    ]
  },
    {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('@/views/pages/pages/coming-soon.vue'),
  },
  {
    path: '/under-maintenance',
    name: 'under-maintenance',
    component: () => import('@/views/pages/pages/under-maintenance.vue'),
  },
  {
    path: '/membership',
    component: () => import('@/views/pages/membership/membership-index.vue'),
    children: [
      { path: '', redirect: '/membership/membership-plans' },
      { path: "membership-plans", component: () => import('@/views/pages/membership/membership-plans.vue'), },
      { path: "membership-addons", component: () => import('@/views/pages/membership/membership-addons.vue'), },
      { path: "membership-transactions", component: () => import('@/views/pages/membership/membership-transactions.vue'), },
    ]
  },
  {
    path: '/user',
    component: () => import('@/views/pages/user-management/user-management.vue'),
    children: [
      { path: '', redirect: '/user/user-list' },
      { path: "user-list", component: () => import('@/views/pages/user-management/user-list.vue'), },
      { path: "roles-permission", component: () => import('@/views/pages/user-management/roles-permission.vue'), },
      { path: "permission", component: () => import('@/views/pages/user-management/permission-list.vue'), },
      { path: "delete-account", component: () => import('@/views/pages/user-management/delete-account.vue'), },
    ]
  },
  {
    path: '/announcements',
    component: () => import('@/views/pages/announcements/announcements-index.vue'),
    children: [
      { path: '', redirect: '/announcements/notice-board' },
      { path: "notice-board", component: () => import('@/views/pages/announcements/notice-board.vue'), },
      { path: "event-list", component: () => import('@/views/pages/announcements/event-list.vue'), },
    ]
  },
  {
    path: '/support',
    component: () => import('@/views/pages/support/support-index.vue'),
    children: [
      { path: '', redirect: '/support/contact-messages' },
      { path: "contact-messages", component: () => import('@/views/pages/support/contact-messages.vue'),  },
      { path: "ticket-list", component: () => import('@/views/pages/support/ticket-list.vue'),  },
      { path: "ticket-grid", component: () => import('@/views/pages/support/ticket-grid.vue'),  },
      { path: "ticket-details", component: () => import('@/views/pages/support/ticket-details.vue'),  },
    ]
  },
  {
    path: '/content',
    component: () => import('@/views/pages/content/content-index.vue'),
    children: [
      { path: '', redirect: '/content/pages' },
      { path: "pages-list", component: () => import('@/views/pages/content/pages-list.vue'), },
      { path: "testimonials-list", component: () => import('@/views/pages/content/testimonials-list.vue'), },
      { path: "faq", component: () => import('@/views/pages/content/faq-list.vue'), },
    ]
  },
  {
    path: '/location',
    component: () => import('@/views/pages/content/location/location-index.vue'),
    children: [
      { path: '', redirect: '/countries/countries-list' },
      { path: "countries-list", component: () => import('@/views/pages/content/location/countries-list.vue'), },
      { path: "states-list", component: () => import('@/views/pages/content/location/states-list.vue'), },
      { path: "cities-list", component: () => import('@/views/pages/content/location/cities-list.vue'), },
    ]
  },
  {
    path: '/blogs',
    component: () => import('@/views/pages/content/blog/blog-index.vue'),
    children: [
      { path: '', redirect: '/blogs/blog' },
      { path: "blog", component: () => import('@/views/pages/content/blog/all-blog.vue'), },
      { path: "blog-categories", component: () => import('@/views/pages/content/blog/all-blog.vue'), },
      { path: "blog-comments", component: () => import('@/views/pages/content/blog/blog-comments.vue'), },
      { path: "blog-tags", component: () => import('@/views/pages/content/blog/blog-tags.vue'), },
    ]
  },
  {
    path: '/accounts',
    component: () => import('@/views/pages/finance/accounts/accounts-index.vue'),
    children: [
      { path: '', redirect: '/accounts/expenses-list' },
      { path: "expenses-list", component: () => import('@/views/pages/finance/accounts/expenses-list.vue'), },
      { path: "expenses-category", component: () => import('@/views/pages/finance/accounts/expenses-category.vue'), },
      { path: "accounts-income", component: () => import('@/views/pages/finance/accounts/accounts-income.vue'), },
      { path: "accounts-invoices", component: () => import('@/views/pages/finance/accounts/accounts-invoices.vue'), },
      { path: "invoice", component: () => import('@/views/pages/finance/accounts/invoice-list.vue'), },
      { path: "add-invoice", component: () => import('@/views/pages/finance/accounts/add-invoice.vue'), },
      { path: "edit-invoice", component: () => import('@/views/pages/finance/accounts/edit-inovice.vue'), },
      { path: "accounts-transactions", component: () => import('@/views/pages/finance/accounts/accounts-transactions.vue'), },
      
    ]
  },
  {
    path: '/hrm',
    component: () => import('@/views/pages/hrm/hrm-index.vue'),
    children: [
      { path: '', redirect: '/hrm/staff-list' },
      { path: "staff-list",component: () => import('@/views/pages/hrm/staff/staff-list.vue'), },
      { path: "add-staff", component: () => import('@/views/pages/hrm/staff/add-staff.vue'), },
      { path: "edit-staff", component: () => import('@/views/pages/hrm/staff/edit-staff.vue'), },
      { path: "staff-details", component: () => import('@/views/pages/hrm/staff/staff-details.vue'), },
      { path: "staff-leaves", component: () => import('@/views/pages/hrm/staff/staff-leaves.vue'), },
      { path: "staffs-attendance", component: () => import('@/views/pages/hrm/staff/staffs-attendance.vue'), },
      { path: "staff-payroll", component: () => import('@/views/pages/hrm/staff/staff-payroll.vue'), },
      { path: "payroll-list", component: () => import('@/views/pages/hrm/payroll-list.vue'), },
      { path: "holiday-list", component: () => import('@/views/pages/hrm/holiday-list.vue'), },
      { path: "designation-list", component: () => import('@/views/pages/hrm/designation-list.vue'), },
      { path: "department-list", component: () => import('@/views/pages/hrm/department-list.vue'), },
      
    ]
  },
    {
    path: '/leaves',
    component: () => import('@/views/pages/hrm/leaves/leaves-index.vue'),
    children: [
      { path: '', redirect: '/leaves/list-leaves' },
      { path: "list-leaves", component: () => import('@/views/pages/hrm/leaves/list-leaves.vue'), },
      { path: "approve-request", component: () => import('@/views/pages/hrm/leaves/approve-request.vue'), },
      
    ]
  },
  {
    path: '/attendance',
    component: () => import('@/views/pages/hrm/attendance/attendance-index.vue'),
    children: [
      { path: '', redirect: '/attendance/student-attendance' },
      { path: "student-attendance", component: () => import('@/views/pages/hrm/attendance/student-attendance.vue'), },
      { path: "teacher-attendance", component: () => import('@/views/pages/hrm/attendance/teacher-attendance.vue') },
      { path: "staff-attendance", component: () => import('@/views/pages/hrm/attendance/staff-attendance.vue') },
      
    ]
  },
  {
    path: '/fees',
    component: () => import('@/views/pages/management/fees-collection/fees-index.vue'),
    children: [
      { path: '', redirect: '/fees/fees-group' },
      { path: "fees-group", component: () => import('@/views/pages/management/fees-collection/fees-group.vue') },
      { path: "fees-type", component: () => import('@/views/pages/management/fees-collection/fees-type.vue') },
      { path: "fees-master", component: () => import('@/views/pages/management/fees-collection/fees-master.vue') },
      { path: "fees-assign", component: () => import('@/views/pages/management/fees-collection/fees-assign.vue') },
      { path: "collect-fees", component: () => import('@/views/pages/management/fees-collection/collect-fees.vue') },
    ]
  },
  {
    path: '/library',
    component: () => import('@/views/pages/management/library-members/library-index.vue'),
    children: [
      { path: '', redirect: '/library/library-members' },
      { path: "library-members", component: () => import('@/views/pages/management/library-members/library-members.vue') },
      { path: "library-books", component: () => import('@/views/pages/management/library-members/library-books.vue') },
      { path: "library-return", component: () => import('@/views/pages/management/library-members/library-return.vue') },
      { path: "library-issue-book", component: () => import('@/views/pages/management/library-members/library-issue-book.vue') },
    ]
  },
  {
    path: '/management',
    component: () => import('@/views/pages/management/management-index.vue'),
    children: [
      { path: '', redirect: '/management/sports-list' },
      { path: "sports-list", component: () => import('@/views/pages/management/sports-list.vue') },
      { path: "player-list", component: () => import('@/views/pages/management/player-list.vue') }, 
    ]
  },
  {
    path: '/transport',
    component: () => import('@/views/pages/management/transport/transport-index.vue'),
    children: [
      { path: '', redirect: '/transport/transport-routes' },
      { path: "transport-routes", component: () => import('@/views/pages/management/transport/transport-routes.vue') },
      { path: "transport-pickup-points", component: () => import('@/views/pages/management/transport/transport-pickup-points.vue') },
      { path: "transport-vehicle-drivers", component: () => import('@/views/pages/management/transport/transport-vehicle-drivers.vue') },
      { path: "transport-vehicle", component: () => import('@/views/pages/management/transport/transport-vehicle.vue') },
      { path: "transport-assign-vehicle", component: () => import('@/views/pages/management/transport/transport-assign-vehicle.vue') },
    ]
  },
  {
    path: '/hostel',
    component: () => import('@/views/pages/management/hostel/hostel-index.vue'),
    children: [
      { path: '', redirect: '/management/hostel-list' },
      { path: "hostel-list", component: () => import('@/views/pages/management/hostel/hostel-list.vue') },
      { path: "hostel-rooms", component: () => import('@/views/pages/management/hostel/hostel-rooms.vue') },
      { path: "hostel-room-type", component: () => import('@/views/pages/management/hostel/hostel-room-type.vue') },
    ]
  },
  {
    path: '/examinations',
    component: () => import('@/views/pages/academic/examination/exam-index.vue'),
    children: [
      { path: '', redirect: '/examinations/exam-list' },
      { path: "exam-list", component: () => import('@/views/pages/academic/examination/exam-list.vue') },
      { path: "exam-schedule", component: () => import('@/views/pages/academic/examination/exam-schedule.vue') },
      { path: "grade-list", component: () => import('@/views/pages/academic/examination/grade-list.vue') },
      { path: "exam-results", component: () => import('@/views/pages/academic/examination/exam-results.vue') },
      { path: "exam-attendance", component: () => import('@/views/pages/academic/examination/exam-attendance.vue') },      
    ]
  },
  {
    path: '/students',
    component: () => import('@/views/pages/peoples/students/student-index.vue'),
    children: [
      { path: '', redirect: '/students/student-list' },
      { path: "student-list", component: () => import('@/views/pages/peoples/students/student-list.vue') },
      { path: "student-grid", component: () => import('@/views/pages/peoples/students/student-grid.vue') },
      { path: "student-details", component: () => import('@/views/pages/peoples/students/student-details.vue') },
      { path: "add-student", component: () => import('@/views/pages/peoples/students/add-student.vue') },
      { path: "edit-student", component: () => import('@/views/pages/peoples/students/edit-student.vue') },
      { path: "student-time-table", component: () => import('@/views/pages/peoples/students/student-time-table/student-time-table.vue') },
      { path: "student-leaves", component: () => import('@/views/pages/peoples/students/student-leaves.vue') },
      { path: "student-result", component: () => import('@/views/pages/peoples/students/student-result.vue') },
      { path: "student-fees", component: () => import('@/views/pages/peoples/students/student-fees.vue') },
      { path: "student-library", component: () => import('@/views/pages/peoples/students/student-library.vue') },
      { path: "student-promotion", component: () => import('@/views/pages/peoples/students/students-promotion.vue') },
      
    ]
  },
  {
    path: '/teachers',
    component: () => import('@/views/pages/peoples/teachers/teachers-index.vue'),
    children: [
      { path: '', redirect: '/teachers/teacher-list' },
      { path: "teacher-list", component: () => import('@/views/pages/peoples/teachers/teacher-list.vue') },
      { path: "teacher-grid", component: () => import('@/views/pages/peoples/teachers/teacher-grid.vue') },
      { path: "add-teacher", component: () => import('@/views/pages/peoples/teachers/add-teacher.vue') },
      { path: "edit-teacher", component: () => import('@/views/pages/peoples/teachers/edit-teacher.vue') },
      { path: "teacher-details", component: () => import('@/views/pages/peoples/teachers/teacher-details/teacher-details.vue') },
      { path: "teacher-leaves", component: () => import('@/views/pages/peoples/teachers/teacher-details/teacher-leaves.vue') },
      { path: "teacher-salary", component: () => import('@/views/pages/peoples/teachers/teacher-details/teacher-salary.vue') },
      { path: "teacher-library", component: () => import('@/views/pages/peoples/teachers/teacher-details/teacher-library.vue') },
      { path: "routine-teachers", component: () => import('@/views/pages/peoples/teachers/teacher-details/routine-teachers/routine-teachers.vue') },      
    ]
  },
  {
    path: '/parents',
    component: () => import('@/views/pages/peoples/parents/parents-index.vue'),
    children: [
      { path: '', redirect: '/parents/parent-grid' },
      { path: "parent-grid", component: () => import('@/views/pages/peoples/parents/parents-grid.vue') },
      { path: "parents", component: () => import('@/views/pages/peoples/parents/parents-list.vue') },
    ]
  },
  {
    path: '/guardians',
    component: () => import('@/views/pages/peoples/guardians/guardians-index.vue'),
    children: [
      { path: '', redirect: '/guardians/guardian-grid' },
      { path: "guardian-grid", component: () => import('@/views/pages/peoples/guardians/guardian-grid.vue') },
      { path: "guardians", component: () => import('@/views/pages/peoples/guardians/guardians-list.vue') },
    ]
  },
  {
    path: '/academic',
    component: () => import('@/views/pages/academic/academic-index.vue'),
    children: [
      { path: '', redirect: '/academic/class-room' },
      { path: "class-room", component: () => import('@/views/pages/academic/class-room.vue') },
      { path: "class-routine", component: () => import('@/views/pages/academic/class-routine.vue') },
      { path: "class-section", component: () => import('@/views/pages/academic/class-section.vue') },
      { path: "class-subject", component: () => import('@/views/pages/academic/class-subject.vue') },
      { path: "class-syllabus", component: () => import('@/views/pages/academic/class-syllabus.vue') },
      { path: "class-home-work", component: () => import('@/views/pages/academic/class-home-work.vue') },
      { path: "class-time-table", component: () => import('@/views/pages/academic/class-time-table/class-time-table.vue') },
      { path: "academic-reasons", component: () => import('@/views/pages/academic/academic-reasons.vue') },
      
    ]
  },
  {
    path: '/classes',
    component: () => import('@/views/pages/academic/classes/classes-index.vue'),
    children: [
      { path: '', redirect: '/classes/classes-list' },
      { path: "classes-list", component: () => import('@/views/pages/academic/classes/classes-list.vue') },
      { path: "schedule-classes", component: () => import('@/views/pages/academic/classes/schedule-classes.vue') },      
    ]
  },
  {
    path: '/reports',
    component: () => import('@/views/pages/report/report-index.vue'),
    children: [
      { path: '', redirect: '/reports/attendance-report' },
      { path: 'attendance-report', component: () => import('@/views/pages/report/attendance-report.vue'), },
      { path: 'student-attendance-type', component: () => import('@/views/pages/report/student-attendance-type.vue'), },
      { path: 'daily-attendance', component: () => import('@/views/pages/report/daily-attendance.vue'), },
      { path: 'student-day-wise', component: () => import('@/views/pages/report/student-day-wise.vue'), },
      { path: 'teacher-day-wise', component: () => import('@/views/pages/report/teacher-day-wise.vue'), },
      { path: 'teacher-report', component: () => import('@/views/pages/report/teacher-report.vue'), },
      { path: 'staff-day-wise', component: () => import('@/views/pages/report/staff-day-wise.vue'), },
      { path: 'staff-report', component: () => import('@/views/pages/report/staff-report.vue'), },
      { path: 'class-report', component: () => import('@/views/pages/report/class-report.vue'), },
      { path: 'student-report', component: () => import('@/views/pages/report/student-report.vue'), },
      { path: 'grade-report', component: () => import('@/views/pages/report/grade-report.vue'), },
      { path: 'leave-report', component: () => import('@/views/pages/report/leave-report.vue'), },
      { path: 'fees-report', component: () => import('@/views/pages/report/fees-report.vue'), },
    ]
  },
  {
    path: '/application',
    component: () => import('@/views/pages/application/application-index.vue'),
    children: [
      { path: '', redirect: '/application/chat' },
      { path: "chat", component: () => import('@/views/pages/application/chat/chat-index.vue'), },
      { path: "call", component: () => import('@/views/pages/application/call/audio-call.vue') },
      { path: "video-call", component: () => import('@/views/pages/application/call/video-call.vue') },
      { path: "calendar", component: () => import('@/views/pages/application/calendar-index.vue') },
      { path: "email", component: () => import('@/views/pages/application/email-index.vue') },
      { path: "todo", component: () => import('@/views/pages/application/todo-index.vue') },
      { path: "notes", component: () => import('@/views/pages/application/notes-index.vue') },
      { path: "file-manager", component: () => import('@/views/pages/application/files/file-manager.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('@/views/pages/dashboard/dashboard-index.vue'),
    children: [
      { path: '', redirect: '/dashboard/admin-dashboard'},
      { path: 'admin-dashboard', component: () => import('@/views/pages/dashboard/admin-dashboard/admin-dashboard.vue') },
      { path: 'parent-dashboard', component: () => import('@/views/pages/dashboard/parent-dashboard/parent-dashboard.vue') },
      { path: 'student-dashboard', component: () => import('@/views/pages/dashboard/student-dashboard/student-dashboard.vue') },
      { path: 'teacher-dashboard', component: () => import('@/views/pages/dashboard/teacher-dashboard/teacher-dashboard.vue') },
    ]
  }
  ];
export const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
}); 


router.afterEach((to) => {
  if (to.name === "layout-rtl") {
    document.body.classList.add("layout-mode-rtl");
  } else {
    document.body.classList.remove("layout-mode-rtl");
  }
});



router.beforeEach((to, from, next) => {
// Scroll to the top of the page
window.scrollTo({ top: 0, behavior: 'smooth' });

// Continue with the navigation
next();
});

export default router;