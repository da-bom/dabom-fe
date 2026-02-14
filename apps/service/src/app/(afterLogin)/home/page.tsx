import { Suspense } from "react";

import FamilyDashboardClient from "@service/components/FamilyDashboardClient";

const FamilyDashboardPage = () => {
  return (
    <Suspense>
      <FamilyDashboardClient />
    </Suspense>
  );
};

export default FamilyDashboardPage;
