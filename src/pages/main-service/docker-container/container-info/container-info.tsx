import { Divider_Vertical } from '@/assets/svg';
import * as styles from './container-info.css';
import CardContainer from '@/shared/components/card/card-container/card-container';
import { useContainerList } from '@/apis/queries/use-get-container-list';
import { Suspense } from 'react';

const ContainerInfo = () => {
  const { data, isLoading } = useContainerList();

  const summary = data?.summary;
  const containers = data?.containers ?? [];

  if (isLoading) {
    return <div className={styles.container}>로딩 중...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1 className={styles.mainTitle}>Container Dashboard</h1>
        <h2 className={styles.subtitle}>
          생성된 컨테이너들의 상태를 확인하고 관리할 수 있어요.
        </h2>
      </header>

      <Suspense>
        <div className={styles.containerInfo}>
          <p className={styles.detailBox}>
            <span className={styles.detailBoxText}>총 컨테이너</span>
            <span className={styles.detailBoxNum}>
              {summary?.totalContainers ?? 0}
            </span>
          </p>
          <div className={styles.divider}>
            <Divider_Vertical />
          </div>
          <p className={styles.detailBox}>
            <span className={styles.detailBoxText}>실행 중인 컨테이너</span>
            <span className={styles.detailBoxNum}>
              {summary?.runningContainers ?? 0}
            </span>
          </p>
          <div className={styles.divider}>
            <Divider_Vertical />
          </div>
          <p className={styles.detailBox}>
            <span className={styles.detailBoxText}>클러스터 개수</span>
            <span className={styles.detailBoxNum}>
              {summary?.clusterCount ?? 0}
            </span>
          </p>
        </div>

        <div className={styles.cardGrid}>
          {containers.map((container) => (
            <CardContainer
              key={container.containerId}
              clusterName={container.clusterName}
              status={container.status}
              image={container.image}
              externalPort={container.ports.external}
              internalPort={container.ports.internal}
              createdAt={container.createdAt}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default ContainerInfo;
