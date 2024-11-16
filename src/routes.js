import React from 'react'

// const Dashboard = React.lazy(() => import('./views/Models/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))



// base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Calendar
//const Calendrier = React.lazy(() => import('./views/Calendrier'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))
// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))




// Models
const Dashboard = React.lazy(() => import('./views/Models/dashboard/Dashboard'))
const Appointments = React.lazy(() => import('./views/Models/appointments/Appointments'))
const Clients = React.lazy(() => import('./views/Models/clients/Clients'))
const Profile = React.lazy(() => import('./views/Models/profile/Profile'))
const Settings = React.lazy(() => import('./views/Models/settings/Settings'))
const Support = React.lazy(() => import('./views/Models/support/Support'))
const Calendrier = React.lazy(() => import('./views/Models/calendrier/Calendrier'))

// Models / Admin
const AdminAppAppointments = React.lazy(() => import('./views/Models/Admin/Appointments/AppAppointments'))
const AdminAppCustomers = React.lazy(() => import('./views/Models/Admin/Customers/AppCustomers'))
const AdminAppDashboard = React.lazy(() => import('./views/Models/Admin/Dashboard/AppDashboard'))
const AdminAppEmployees = React.lazy(() => import('./views/Models/Admin/Employees/AppEmployees'))
const AdminAppMessaging = React.lazy(() => import('./views/Models/Admin/Messaging/AppMessaging'))
const AdminAppReports = React.lazy(() => import('./views/Models/Admin/Reports/AppReports'))
const AdminAppServices = React.lazy(() => import('./views/Models/Admin/Services/AppServices'))
const AdminAppSettings = React.lazy(() => import('./views/Models/Admin/Settings/AppSettings'))
const AdminAppSupport = React.lazy(() => import('./views/Models/Admin/Support/AppSupport'))



// Models / Customer 
const CustomerAppAppointments = React.lazy(() => import('./views/Models/Customer/Appointments/AppAppointments'))
const CustomerAppDashboard = React.lazy(() => import('./views/Models/Customer/Dashboard/AppDashboard'))
const CustomerAppProfile = React.lazy(() => import('./views/Models/Customer/Profile/AppProfile'))
const CustomerAppSettings = React.lazy(() => import('./views/Models/Customer/Settings/AppSettings'))
const CustomerAppSupport = React.lazy(() => import('./views/Models/Customer/Support/AppSupport'))



// Models / Employee
const EmployeeAppAppointments = React.lazy(() => import('./views/Models/Employee/Appointments/AppAppointments'))
const EmployeeAppDashboard = React.lazy(() => import('./views/Models/Employee/Dashboard/AppDashboard'))
const EmployeeAppMessaging = React.lazy(() => import('./views/Models/Employee/Messaging/AppMessaging'))
const EmployeeAppProfile = React.lazy(() => import('./views/Models/Employee/Profile/AppProfile'))
const EmployeeAppSettings = React.lazy(() => import('./views/Models/Employee/Settings/AppSettings'))
const EmployeeAppSupport = React.lazy(() => import('./views/Models/Employee/Support/AppSupport'))
const EmployeeAppTasks = React.lazy(() => import('./views/Models/Employee/Tasks/AppTasks'))


const routes = [
  { path: '/', exact: true, name: 'Home' },

  // Models /Admin
  { path: '/Admin/Appointments', name: 'AdminAppAppointments', element: AdminAppAppointments },
  { path: '/Admin/Customers', name: 'AdminAppCustomers', element: AdminAppCustomers },
  { path: '/Admin/Dashboard', name: 'AdminAppDashboard', element: AdminAppDashboard },
  { path: '/Admin/Employees', name: 'AdminAppEmployees', element: AdminAppEmployees },
  { path: '/Admin/Messaging', name: 'AdminAppMessaging', element: AdminAppMessaging },
  { path: '/Admin/Reports', name: 'AdminAppReports', element: AdminAppReports },
  { path: '/Admin/Services', name: 'AdminAppServices', element: AdminAppServices },
  { path: '/Admin/Settings', name: 'AdminAppSettings', element: AdminAppSettings },
  { path: '/Admin/Support', name: 'AdminAppSupport', element: AdminAppSupport },

  // Models /Customer 
  { path: '/Customer/Appointments', name: 'CustomerAppAppointments', element: CustomerAppAppointments },
  { path: '/Customer/Dashboard', name: 'CustomerAppDashboard', element: CustomerAppDashboard },
  { path: '/Customer/Profile', name: 'CustomerAppProfile', element: CustomerAppProfile },
  { path: '/Customer/Settings', name: 'CustomerAppSettings', element: CustomerAppSettings },
  { path: '/Customer/Support', name: 'CustomerAppSupport', element: CustomerAppSupport },

  // Models /Employee
  { path: '/Employee/Appointments', name: 'EmployeeAppAppointments', element: EmployeeAppAppointments },
  { path: '/Employee/Dashboard', name: 'EmployeeAppDashboard', element: EmployeeAppDashboard },
  { path: '/Employee/Messaging', name: 'EmployeeAppMessaging', element: EmployeeAppMessaging },
  { path: '/Employee/Profile', name: 'EmployeeAppProfile', element: EmployeeAppProfile },
  { path: '/Employee/Settings', name: 'EmployeeAppSettings', element: EmployeeAppSettings },
  { path: '/Employee/Support', name: 'EmployeeAppSupport', element: EmployeeAppSupport },
  { path: '/Employee/Tasks', name: 'EmployeeAppTasks', element: EmployeeAppTasks },


  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/appointments', name: 'Appointments', element: Appointments },
  { path: '/calendrier', name: 'Calendrier', element: Calendrier },
  { path: '/clients', name: 'Clients', element: Clients },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/settings', name: 'Settings', element: Settings },
  { path: '/support', name: 'Support', element: Support },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
