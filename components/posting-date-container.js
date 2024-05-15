import { useMemo } from "react";

const PostingDateContainer = ({
  transactionDate,
  transactionDescription,
  packageDimensions,
  temperatureUnit,
  transactionAmount,
  transactionNote,
  transactionDate2,
  transactionDescription2,
  itemDimensions,
  temperatureUnit2,
  transactionAmount2,
  transactionNote2,
  propWidth,
  propHeight,
  propWidth1,
}) => {
  const replyArrowIcon1Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameIcon1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="self-stretch [background:linear-gradient(180deg,_#6a6a6a_30.83%,_rgba(0,_0,_0,_0.63))] flex flex-row items-center justify-between p-2.5">
        <div className="flex flex-row items-center justify-start gap-[6px] max-w-[150px]">
          <b className="flex-1 relative leading-[26px]">Posting Date</b>
          <img
            className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
            alt=""
            src="/arrowbottomicon-1.svg"
          />
        </div>
        <b className="w-[250px] relative leading-[26px] flex items-center shrink-0 max-w-[250px]">
          Description
        </b>
        <div className="flex flex-row items-center justify-start gap-[12px] max-w-[80px]">
          <b className="flex-1 relative leading-[26px]">Type</b>
          <div className="w-5 bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero box-border h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[9.4px] px-[7.5px] border-[0.6px] border-solid border-gainsboro-400">
            <img
              className="w-[12.5px] relative h-[9.4px]"
              alt=""
              src="/polygon-13.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px] max-w-[90px]">
          <b className="flex-1 relative leading-[26px]">Status</b>
          <div className="w-5 bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero box-border h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[9.4px] px-[7.5px] border-[0.6px] border-solid border-gainsboro-400">
            <img
              className="w-[12.5px] relative h-[9.4px]"
              alt=""
              src="/polygon-13.svg"
            />
          </div>
        </div>
        <b className="relative leading-[26px] inline-block max-w-[120px]">
          Amount
        </b>
        <b className="relative leading-[26px] inline-block text-right max-w-[150px]">
          <p className="m-0">{`Available `}</p>
          <p className="m-0">Balance</p>
        </b>
      </div>
      <div className="w-[820px] flex flex-col items-start justify-start text-www-bankofamerica-com-1519199951171875x6432000122070312-default-dove-gray">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 bg-whitesmoke-200 flex flex-row items-center justify-between p-2.5 border-t-[1px] border-solid border-gainsboro-100 border-b-[1px]">
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
                className="w-[12.8px] relative h-[17.3px] overflow-hidden shrink-0 object-contain"
                alt=""
                src={packageDimensions}
                style={replyArrowIcon1Style}
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center max-w-[82px] text-sm">
              <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] border-[0.5px] border-solid border-gainsboro-400">
                <b className="relative leading-[26px]">{temperatureUnit}</b>
              </div>
            </div>
            <div className="relative leading-[26px] inline-block max-w-[120px]">
              {transactionAmount}
            </div>
            <div className="relative leading-[26px] text-right inline-block max-w-[150px]">
              {transactionNote}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-row items-center justify-between p-2.5 border-t-[1px] border-solid border-gainsboro-100 border-b-[1px]">
            <div className="flex flex-row items-center justify-start gap-[6px] max-w-[132px]">
              <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray-100">
                <img
                  className="w-[7px] relative h-[7px]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                {transactionDate2}
              </div>
            </div>
            <div className="w-[250px] relative leading-[26px] text-steelblue flex items-center shrink-0 max-w-[250px]">
              {transactionDescription2}
            </div>
            <div className="flex-1 flex flex-row items-center justify-center max-w-[73px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src={itemDimensions}
                style={frameIcon1Style}
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center max-w-[82px] text-sm">
              <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] border-[0.5px] border-solid border-gainsboro-400">
                <b className="relative leading-[26px]">{temperatureUnit2}</b>
              </div>
            </div>
            <div className="relative leading-[26px] inline-block max-w-[120px]">
              {transactionAmount2}
            </div>
            <div className="relative leading-[26px] text-right inline-block max-w-[150px]">
              {transactionNote2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingDateContainer;
