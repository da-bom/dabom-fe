"use client";

import { TextField } from "@shared";

import {
  MONTHLY_BLOCK,
  PolicyDetailType,
  TIME_BLOCK,
} from "@shared/types/policyType";

import MonthlyBlockField from "./MonthlyBlockFeild";
import TimeBlockFeild from "./TimeBlockFeild";

interface Props {
  type: string;
  rules: PolicyDetailType["default_rules"];
  onRuleChange: (newRules: PolicyDetailType["default_rules"]) => void;
}

const DefaultRuleField = ({ type, rules, onRuleChange }: Props) => {
  if (type === "MANUAL_BLOCK") return null;
  return (
    <TextField label="기본값">
      {type === "MONTHLY_BLOCK" && (
        <MonthlyBlockField
          rules={rules as MONTHLY_BLOCK}
          onRuleChange={(newRules) => onRuleChange(newRules)}
        />
      )}

      {type === "TIME_BLOCK" && (
        <TimeBlockFeild
          rules={rules as TIME_BLOCK}
          onRuleChange={(newRules) => onRuleChange(newRules)}
        />
      )}
    </TextField>
  );
};
export default DefaultRuleField;
