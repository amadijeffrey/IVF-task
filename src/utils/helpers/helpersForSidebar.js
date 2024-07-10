import { ReactComponent as ReportIcon } from "../../assets/sidebar/report.svg";
import { ReactComponent as TreatmentIcon } from "../../assets/sidebar/treatment.svg";
import { ReactComponent as HomeIcon } from "../../assets/sidebar/dashboard.svg";
import { ReactComponent as TrackingIcon } from "../../assets/sidebar/tracking.svg";
import { ReactComponent as PaymentIcon } from "../../assets/sidebar/payment.svg";
import { ReactComponent as PeopleIcon} from "../../assets/sidebar/users.svg";
import { ReactComponent as SchedulesIcon } from "../../assets/sidebar/calendar.svg";
import { ReactComponent as AccountIcon } from "../../assets/sidebar/profile.svg";

export const doctorCategory = [
    {
      title: "Dashboard",
      path: "/dashboard/doctor/home",
      icon: <HomeIcon />,
    },
    {
      title: "Patient management",
      path: "/dashboard/doctor/patients",
      icon: <PeopleIcon />,
    },
    {
      title: "Treatment",
      path: "/dashboard/doctor/treatments",
      icon: <TreatmentIcon  />,
    },
    {
      title: "Schedules",
      path: "/dashboard/doctor/schedules",
      icon: <SchedulesIcon  />,
    },
    {
      title: "Report",
      path: "/dashboard/doctor/reports",
      icon: <ReportIcon  />,
    },
    {
      title: "Profile",
      path: "/dashboard/doctor/profile",
      icon: <AccountIcon  />,
    },
];

export const patientCategory = [
    {
      title: "Dashboard",
      path: "/dashboard/patient/home",
      icon: <HomeIcon />,
    },
    {
        title: "Treatment",
        path: "/dashboard/patient/treatments",
        icon: <TreatmentIcon  />,
      },
      {
        title: "Schedules",
        path: "/dashboard/patient/schedules",
        icon: <SchedulesIcon  />,
      },
    {
      title: "Tracking",
      path: "/dashboard/patient/tracking",
      icon: <TrackingIcon />,
    },
    {
      title: "Report",
      path: "/dashboard/patient/reports",
      icon: <ReportIcon  />,
    },
    {
        title: "Payment",
        path: "/dashboard/patient/payments",
        icon: <PaymentIcon  />,
      },
    {
      title: "Profile",
      path: "/dashboard/patient/profile",
      icon: <AccountIcon  />,
    },
];