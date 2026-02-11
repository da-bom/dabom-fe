import FamilyList from "@admin/components/family/FamilyList";
import MainBox from "@repo/shared/src/components/MainBox";
import SubBox from "@repo/shared/src/components/SubBox";

const FamilyPage = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-5 overflow-hidden">
      <MainBox className="bg-brand-white flex w-full justify-between gap-8 p-5">
        <SubBox className="h-11 w-38">type</SubBox>
        <SubBox className="w-full">search</SubBox>
        <div className="flex w-20 items-center">초기화</div>
      </MainBox>
      <div className="flex h-full gap-5">
        <MainBox className="bg-brand-white w-86 p-4">
          <FamilyList />
        </MainBox>
        <MainBox className="bg-brand-white w-full flex-1">detail</MainBox>
      </div>
    </div>
  );
};

export default FamilyPage;
