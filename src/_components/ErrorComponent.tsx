"use client";

import { SkeletonHightLightBlock } from "./Skeleton/SkeletonHightLightBlock";
import { Button } from "./ui/button";

const ErrorComponent = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div className="error">
      <SkeletonHightLightBlock name={"Đã Xảy Ra Lỗi!"} />
    </div>
  );
};

export default ErrorComponent;
