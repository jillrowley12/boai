import { useMemo } from "react";

const CardContainer = ({
  transactionDate,
  transactionDescription,
  transactionDetails,
  transactionAmount,
  transactionAmountText,
  propBackgroundColor,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="self-stretch flex flex-row items-center justify-center text-left text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-dove-gray font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div
        className="flex-1 bg-whitesmoke-200 flex flex-row items-center justify-between p-2.5 border-t-[1px] border-solid border-gainsboro-100 border-b-[1px]"
        style={frameDivStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[6px] max-w-[132px]">
          <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray-100">
            <img
              className="w-[7px] relative h-[7px]"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
            {transactionDate}
          </div>
        </div>
        <div className="w-[250px] relative leading-[26px] text-steelblue flex items-center shrink-0 max-w-[250px]">
          {transactionDescription}
        </div>
        <div className="flex-1 flex flex-row items-center justify-center max-w-[73px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={transactionDetails}
            style={frameIconStyle}
          />
        </div>
        <div className="flex-1 flex flex-row items-center justify-center max-w-[82px] text-sm">
          <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] border-[0.5px] border-solid border-gainsboro-400">
            <b className="relative leading-[26px]">C</b>
          </div>
        </div>
        <div className="relative leading-[26px] inline-block max-w-[120px]">
          {transactionAmount}
        </div>
        <div className="relative leading-[26px] text-right inline-block max-w-[150px]">
          {transactionAmountText}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
