import { FC } from "react";
import SwapTokens from "../../components/organism/SwapTokens";

const SwapPage: FC = () => {
  return (
    <div className="flex flex-col items-center py-4 sm:py-6 lg:py-10">
      <div className="max-w-[460px]">
        <SwapTokens />
      </div>
    </div>
  );
};
export default SwapPage;
