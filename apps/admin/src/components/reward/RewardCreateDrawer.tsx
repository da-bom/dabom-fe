'use client';

import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { ImageIcon } from '@icons';
import { Button, Drawer, Input, MainBox, RadioGroup, TextField } from '@shared';

import { RewardCreate, RewardCreateSchema } from 'src/api/reward/schema';
import { useCreateReward } from 'src/api/reward/useCreateReward';

const RewardCreateDrawer = () => {
  const router = useRouter();
  const { mutate: createReward, isPending } = useCreateReward();

  const { register, handleSubmit, control } = useForm<RewardCreate>({
    resolver: zodResolver(RewardCreateSchema),
    defaultValues: {
      category: 'DATA',
      name: '',
      price: 0,
      thumbnailUrl: null,
    },
  });

  const onSubmit = (data: RewardCreate) => {
    createReward(data);
  };

  return (
    <Drawer>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col">
        <header className="flex flex-col gap-3">
          <h1 className="text-h2-d">보상 추가</h1>
          <p className="text-body3-d text-gray-700">유저에게 제공될 보상을 추가합니다.</p>
        </header>

        <hr className="my-6 border-gray-100" />

        <div className="flex flex-1 flex-col gap-8">
          <TextField label="유형">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  name="category"
                  options={[
                    { label: '데이터', value: 'DATA' },
                    { label: '기프티콘', value: 'GIFTICON' },
                  ]}
                  selectedValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </TextField>

          <TextField label="썸네일">
            <MainBox className="flex h-45 w-45 items-center justify-center text-gray-700">
              <ImageIcon />
            </MainBox>
          </TextField>

          <TextField label="상품명">
            <Input
              {...register('name')}
              type="text"
              placeholder="상품명을 입력하세요."
              className="w-82"
            />
          </TextField>

          <TextField label="단가">
            <Input
              {...register('price', { valueAsNumber: true })}
              type="number"
              placeholder="단가를 입력하세요."
              className="w-82"
            />
          </TextField>
        </div>

        <div className="mt-auto flex justify-end gap-2 pt-6">
          <Button color="light" size="md-short" type="button" onClick={() => router.back()}>
            취소
          </Button>
          <Button color="dark" size="md" type="submit" disabled={isPending}>
            {isPending ? '저장 중...' : '변경사항 저장'}
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default RewardCreateDrawer;
