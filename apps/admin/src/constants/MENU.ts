import PolicyIcon from "@mui/icons-material/Policy";
import { PeopleIcon } from "@shared";

export const MENU = [
  {
    id: "POLICY",
    label: "정책 관리",
    path: "/policy",
    icon: PolicyIcon,
  },
  {
    id: "FAMILY",
    label: "가족 관리",
    path: "/family",
    icon: PeopleIcon,
  },
] as const;
