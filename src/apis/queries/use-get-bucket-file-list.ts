import { useSuspenseQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type { BucketFileListResponse } from '../types/iaas';
import { iaasQueryKeys } from '../constants/query-key';

export const getBucketFileList = (bucketName: string) => {
  return request<BucketFileListResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.IAAS.GET_BUCKET_FILE_LIST,
    query: { bucket: bucketName },
  });
};

export const useBucketFileList = (bucketName: string) => {
  return useSuspenseQuery({
    queryKey: iaasQueryKeys.bucketFiles(bucketName),
    queryFn: () => getBucketFileList(bucketName),
  });
};
