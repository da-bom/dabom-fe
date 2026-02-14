"use client";

import { useRouter } from "next/navigation";

import { Button, DropDown, Switch } from "@shared";
import POLICY_DETAIL from "src/data/policyDetail";

const PolicyDetailModal = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex h-screen justify-end">
      <div className="bg-brand-white flex h-full w-175 flex-col justify-between border-l-[1px] border-gray-300 px-11 py-8 shadow-[-4px_0_10px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          {/* TODO: 아이콘 버튼으로 수정 */}
          <button className="w-fit" onClick={() => router.back()}>
            닫기
          </button>

          <div className="flex flex-col gap-4">
            {POLICY_DETAIL.isActive ? (
              <div className="text-primary text-body1-d">활성화</div>
            ) : (
              <div className="text-grayscale-600 text-body1-d">비활성화</div>
            )}
            <span className="text-h1-d">{POLICY_DETAIL.name}</span>
            <span className="text-body1-d text-gray-700">
              {POLICY_DETAIL.description}
            </span>
          </div>

          <div className="border-[1px] border-gray-100" />

          <div className="flex flex-col gap-5">
            <DropDown />
            <DropDown />
          </div>
          <div className="flex items-center">
            <span>상태</span>
            <Switch
              type="primary"
              radius="half"
              onClick={() => {
                //TODO: state 및 onClick 추가
              }}
            >
              활성화
            </Switch>
          </div>
          <span className="text-body2-d">
            정책 활성화 시 즉시 모든 유저에게 적용됩니다
          </span>
          <div>
            <div>
              <input type="radio" />
              <span className="text-body2-d">정책 수정 이후에만 적용하기</span>
            </div>
            <div>
              <input type="radio" />
              <span className="text-body2-d">기존 값 덮어쓰기</span>
            </div>
            <span className="text-body2-d">
              유저가 설정했던 모든 값이 덮어씌워집니다.
            </span>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button color="light" size="md-short">
            취소
          </Button>
          <Button color="dark" size="md">
            변경사항 저장
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetailModal;
