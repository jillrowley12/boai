import PostingDateContainer from "./posting-date-container";
import Footer from "./footer";

const TransactionFilterContainer = () => {
  return (
    <div className="w-[820px] flex flex-col items-start justify-start gap-[20px] max-w-[820px] text-left text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="flex flex-row items-center justify-start gap-[14px] text-xl">
        <div className="flex flex-row items-center justify-start gap-[28px]">
          <b className="relative leading-[26px]">All Transaction</b>
          <div className="w-8 [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[15px] px-3 border-[1px] border-solid border-gainsboro-400">
            <img
              className="w-5 relative h-[15px]"
              alt=""
              src="/polygon-11.svg"
            />
          </div>
        </div>
        <b className="relative text-lg leading-[26px] text-steelblue">{`View Spending & Budgeting`}</b>
      </div>
      <div className="flex flex-row items-center justify-start gap-[23px] text-lg text-www-bankofamerica-com-1519199951171875x6432000122070312-default-alto1">
        <div className="w-[435px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero box-border overflow-hidden shrink-0 flex flex-row items-center justify-between py-[9px] pr-2.5 pl-5 border-[1px] border-solid border-silver">
          <div className="relative leading-[26px]">
            Enter keywords, amount or mm/dd/yy
          </div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame12.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
          <b className="relative leading-[26px]">More options</b>
          <div className="w-8 [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[15px] px-3 border-[1px] border-solid border-gainsboro-400">
            <img
              className="w-5 relative h-[15px]"
              alt=""
              src="/polygon-11.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-start justify-between max-w-[820px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-dove-gray-200">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 gap-[2px]">
            <div className="flex flex-row items-center justify-center py-0.5 px-2.5 border-r-[1px] border-solid border-dimgray-200">
              <div className="relative leading-[10px]">Newest</div>
            </div>
            <div className="flex flex-row items-center justify-center py-0.5 px-2.5 border-r-[1px] border-solid border-dimgray-200">
              <div className="relative leading-[10px]">Next</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 gap-[2px] text-steelblue">
            <div className="flex flex-row items-center justify-center py-0.5 pr-2.5 pl-0 border-r-[1px] border-solid border-dimgray-200">
              <div className="relative leading-[10px]">Previous</div>
            </div>
            <div className="flex flex-row items-center justify-center py-0.5 px-2.5">
              <div className="relative leading-[10px]">Oldest</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px] text-steelblue">
          <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-center justify-center py-0.5 pr-2.5 pl-0 gap-[10px] border-r-[1px] border-solid border-dimgray-200">
              <div className="relative leading-[10px]">Show deals: on</div>
              <div className="w-[12.5px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[12.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[5.9px] px-[4.7px] border-[0.4px] border-solid border-gainsboro-400">
                <img
                  className="w-[7.8px] relative h-[5.9px]"
                  alt=""
                  src="/polygon-12.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-center justify-center py-0.5 pr-2.5 pl-0 gap-[10px] border-r-[1px] border-solid border-dimgray-200">
              <div className="relative leading-[10px]">Downloads</div>
              <div className="w-[12.5px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[12.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[5.9px] px-[4.7px] border-[0.4px] border-solid border-gainsboro-400">
                <img
                  className="w-[7.8px] relative h-[5.9px]"
                  alt=""
                  src="/polygon-12.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-0.5 pr-2.5 pl-0">
            <div className="relative leading-[10px]">Print this view</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start max-w-[820px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
        <PostingDateContainer
          transactionDate="10/17/2023"
          transactionDescription="AIRBNB INC DES SHORT LET 878903 INON: Vacation visiting.."
          packageDimensions="/replyarrowicon-13@2x.png"
          temperatureUnit="C"
          transactionAmount="$100.00"
          transactionNote="$137.42"
          transactionDate2="09/30/2023"
          transactionDescription2={`BRITISH AIRLINE DES: ACH PMT ID:DH4732 INON: Travel & Tour..`}
          itemDimensions="/frame13.svg"
          temperatureUnit2="C"
          transactionAmount2="-$300.00"
          transactionNote2="$337.42"
        />
        <Footer
          statementDate="Statement as of 05/10/2022"
          transactionDate="05/10/2022"
          transactionDescription="Zelle Transfer Confe# 677834778733: Dennis Steven"
          dimensionCode="/frame13.svg"
          transactionAmount="-$1,400.70"
          transactionAmountFormatte="$637.60"
          date="05/30/2022"
          transactionDescriptionLon="ALLY BANK DES:$TRANSFER ID: XXXXXX8480 INON: Thank you! CO..."
          imageDimensions="/frame13.svg"
          transactionAmountNegative="-$200.10"
          transactionNote="$2,038.30"
        />
      </div>
    </div>
  );
};

export default TransactionFilterContainer;
