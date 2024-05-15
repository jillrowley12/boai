import PostingDateContainer from "./posting-date-container";
import CardContainer from "./card-container";

const TransactionFilterContainer2 = () => {
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
      <div className="flex flex-col items-start justify-start max-w-[820px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-dove-gray">
        <PostingDateContainer
          transactionDate="05/14/2024"
          transactionDescription="Seattle Credit Union DES:$Transfer ID: XXXXX9348 INON: Vanessa L"
          packageDimensions="/converticon-1.svg"
          temperatureUnit="F"
          transactionAmount="$800,000.00"
          transactionNote="$1,387,523.80"
          transactionDate2="05/07/2024"
          transactionDescription2="ALLY BANK DES:$TRANSFER ID: XXXXXX9876 INON: Steve Fisherman CO..."
          itemDimensions="/converticon-1.svg"
          temperatureUnit2="F"
          transactionAmount2="$5,700.00"
          transactionNote2="$587,523.80"
          propWidth="19px"
          propHeight="21px"
          propWidth1="19px"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <CardContainer
            transactionDate="04/14/2024"
            transactionDescription="MICROSOFT INC DES PAYROLL 1234543 INON: Subscribe to my channel.."
            transactionDetails="/replyarrowicon-1@2x.png"
            transactionAmount="$11,300.20"
            transactionAmountText="$581,823.80"
            propBackgroundColor="#f7f7f7"
            propWidth="12.8px"
            propHeight="17.3px"
          />
          <CardContainer
            transactionDate="04/02/2024"
            transactionDescription="AMERICAN EXPRESS DES: ACH PMT ID:A9982 INON: Like this video CO.."
            transactionDetails="/frame13.svg"
            transactionAmount="-$300.20"
            transactionAmountText="$570,523.80"
            propBackgroundColor="#fff"
            propWidth="24px"
            propHeight="24px"
          />
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
                  03/11/2024
                </div>
              </div>
              <div className="w-[250px] relative leading-[26px] text-steelblue flex items-center shrink-0 max-w-[250px]">
                ADOBE INC DES PURCHASE 1234543 INON: Subscribe to my channel..
              </div>
              <div className="flex-1 flex flex-row items-center justify-center max-w-[73px]">
                <img
                  className="w-[12.8px] relative h-[17.3px] overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/replyarrowicon-11@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-center justify-center max-w-[82px] text-sm">
                <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] border-[0.5px] border-solid border-gainsboro-400">
                  <b className="relative leading-[26px]">C</b>
                </div>
              </div>
              <div className="relative leading-[26px] inline-block max-w-[120px]">
                $1,450.20
              </div>
              <div className="relative leading-[26px] text-right inline-block max-w-[150px]">
                $570,823.80
              </div>
            </div>
          </div>
          <div className="self-stretch [background:linear-gradient(180deg,_#6a6a6a_30.83%,_rgba(0,_0,_0,_0.63))] flex flex-row items-center justify-start p-2.5 gap-[20px] text-sm text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
            <b className="relative leading-[26px]">
              Statement as of 02/17/2023
            </b>
            <div className="flex flex-row items-center justify-start gap-[4px] text-base">
              <b className="relative leading-[26px]">{`(view statements) `}</b>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                alt=""
                src="/frame14.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <CardContainer
              transactionDate="12/17/2023"
              transactionDescription="AMERICAN EXPRESS DES: CECK DEPOSIT PMT ID:A9982 CHASE: Christopher Scott.."
              transactionDetails="/replyarrowicon-12@2x.png"
              transactionAmount="-$1,840,000.29"
              transactionAmountText="$569,373.60"
              propBackgroundColor="#f7f7f7"
              propWidth="12.8px"
              propHeight="17.3px"
            />
            <CardContainer
              transactionDate="11/14/2023"
              transactionDescription="ALLY BANK DES:$TRANSFER ID: XXXXXX9876 INON: Thank you! CO..."
              transactionDetails="/frame13.svg"
              transactionAmount="-$40,000.29"
              transactionAmountText="$2,449,373.89"
              propBackgroundColor="#fff"
              propWidth="24px"
              propHeight="24px"
            />
            <CardContainer
              transactionDate="11/10/2023"
              transactionDescription="Zelle Transfer Confe 66374663737: Sleva Monday"
              transactionDetails="/converticon-1.svg"
              transactionAmount="-$2,750.50"
              transactionAmountText="$2,452,124.39"
              propBackgroundColor="#f7f7f7"
              propWidth="19px"
              propHeight="21px"
            />
            <CardContainer
              transactionDate="11/5/2023"
              transactionDescription="MICROSOFT INC DES PAYROLL 1234543 INON: Subscribe to my channel.."
              transactionDetails="/converticon-1.svg"
              transactionAmount="-$752.90"
              transactionAmountText="$2,452,877.29"
              propBackgroundColor="#fff"
              propWidth="19px"
              propHeight="21px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilterContainer2;
