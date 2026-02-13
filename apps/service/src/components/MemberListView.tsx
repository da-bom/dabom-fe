import React from "react";

import { ViewMember } from "../types/dataUsage";
import { MemberItem } from "./MemberItem";

interface MemberListViewProps {
  members: ViewMember[];
}

export const MemberListView = ({ members }: MemberListViewProps) => {
  return (
    <ul className="flex flex-col gap-8">
      {members.map((member) => (
        <MemberItem key={member.id} member={member} />
      ))}
    </ul>
  );
};