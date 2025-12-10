import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type { CreateBucketRequest, CreateBucketResponse } from '../types/iaas';

const postCreateBucket = ({ name }: CreateBucketRequest) => {
  return request<CreateBucketResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.IAAS.CREATE_BUCKET,
    body: { name },
  });
};

export const useCreateBucketMutation = () => {
  return useMutation({
    mutationFn: postCreateBucket,
    onSuccess: (data) => {
      console.log('버킷 생성 성공:', data);
    },
  });
};
