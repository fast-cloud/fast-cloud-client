import {
  STATUS_CHIP_TYPES,
  type StatusChipType,
} from '@/shared/constants/statusChip';
import { StatusChip } from '../../statusChip/StatusChip';
import * as styles from './card-square.css';
import { formatDateTime } from '@/shared/utils/format-date';
import { Divider_Large, Divider_Vertical } from '@/assets/svg';

interface Props {
  instanceName: string;
  status: string;
  templateName: string;
  templateDesc: string;
  ipAddress: string;
  createdAt: string;
}

const getStatusChipType = (status: string): StatusChipType => {
  switch (status.toUpperCase()) {
    case 'ACTIVE':
    case 'RUNNING':
      return STATUS_CHIP_TYPES.IN_PROGRESS;
    case 'BUILD':
    case 'PENDING':
      return STATUS_CHIP_TYPES.PENDING;
    case 'SHUTOFF':
    case 'STOPPED':
      return STATUS_CHIP_TYPES.STOP;
    case 'ERROR':
      return STATUS_CHIP_TYPES.FAIL;
    default:
      return STATUS_CHIP_TYPES.IN_PROGRESS;
  }
};

const getStatusLabel = (status: string): string => {
  switch (status.toUpperCase()) {
    case 'ACTIVE':
    case 'RUNNING':
      return '실행중';
    case 'BUILD':
    case 'PENDING':
      return '대기중';
    case 'SHUTOFF':
    case 'STOPPED':
      return '중지됨';
    case 'ERROR':
      return '오류';
    default:
      return status;
  }
};

const CardSquare = ({
  instanceName,
  status,
  templateName,
  templateDesc,
  ipAddress,
  createdAt,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{instanceName}</h3>
        <StatusChip status={getStatusChipType(status)}>
          {getStatusLabel(status)}
        </StatusChip>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.templateRow}>
          <span className={styles.templateName}>{templateName}</span>
          <Divider_Vertical />
          <span className={styles.templateSize}>{templateDesc}</span>
        </div>
        <span className={styles.createdAt}>{formatDateTime(createdAt)}</span>
      </div>

      <div className={styles.divider}>
        <Divider_Large />
      </div>

      <div className={styles.ipContainer}>
        <span className={styles.ipLabel}>공인 IP</span>
        <span className={styles.ipValue}>{ipAddress}</span>
      </div>
    </div>
  );
};

export default CardSquare;
