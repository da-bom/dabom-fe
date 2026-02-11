const FamilyPage = () => {
  const name = "Admin";
  return (
    <div className="flex flex-col gap-5 p-5 w-full h-screen overflow-hidden">
      <header className="flex items-center justify-between">
        <div className="flex flex-col">
          <span>가족 관리</span>
          <span>가족의 권한과 정책을 관리합니다.</span>
        </div>
        <span>{name}</span>
      </header>
      <div className="h-20 bg-brand-white w-full">search</div>
      <div className="flex gap-5 h-full">
        <div className="w-86 bg-brand-white">list</div>
        <div className="w-full bg-brand-white flex-1">detail</div>
      </div>
    </div>
  );
};

export default FamilyPage;
