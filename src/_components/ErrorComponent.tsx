"use client";

import { SkeletonHightLightBlock } from "./Skeleton/SkeletonHightLightBlock";

const ErrorComponent = ({ error }: { error: Error }) => {
  return (
    <div className="error">
      <SkeletonHightLightBlock name={"Đã xảy ra lỗi!"} />
    </div>
  );
};

export default ErrorComponent;
