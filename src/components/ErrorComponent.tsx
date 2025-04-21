"use client";

import { SkeletonHightLightBlock } from "./Skeleton/SkeletonHightLightBlock";

const ErrorComponent = ({ error }: { error: Error & { digest?: string } }) => {
  console.error(error);

  return (
    <div className="error">
      <SkeletonHightLightBlock name={"Đã Xảy Ra Lỗi!"} />
    </div>
  );
};

export default ErrorComponent;
