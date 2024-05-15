import { useCallback } from "react";
import { useRouter } from "next/router";

const PersonalAccountsContainer = () => {
  const router = useRouter();

  const onAccountContainerClick = useCallback(() => {
    router.push("/account-details");
  }, [router]);

  const onAccountContainer1Click = useCallback(() => {
    router.push("/bank-of-ameri");
  }, [router]);

  const onAccountContainer2Click = useCallback(() => {
    router.push("/customized-cash");
  }, [router]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[30px] text-left text-lg text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="w-12 relative h-7 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/bofa-rgbpng2@2x.png"
          />
          <div className="flex flex-row items-start justify-start gap-[3px]">
            <b className="relative leading-[26px]">Personal accounts</b>
            <b className="relative text-xs leading-[16px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#007dc3,_#0067b1)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              a
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-f9dee1">
          <div
            className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-start justify-between pt-3.5 pb-2.5 pr-4 pl-9 cursor-pointer border-t-[4px] border-solid border-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner hover:bg-whitesmoke-400"
            onClick={onAccountContainerClick}
          >
            <div className="flex flex-row items-end justify-start gap-[38px]">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <b className="relative leading-[26px]">
                  Adv Plus Banking - 5403
                </b>
                <b className="relative text-base leading-[26px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder">
                  Quick View
                </b>
              </div>
              <div className="flex flex-row items-end justify-start gap-[10px] text-base text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
                <b className="relative leading-[26px]">Your special offer!</b>
              </div>
            </div>
            <b className="relative text-xl leading-[26px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
              $1,370,123.80
            </b>
          </div>
          <div
            className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-start justify-between py-2.5 pr-4 pl-9 cursor-pointer hover:bg-whitesmoke-400"
            onClick={onAccountContainer1Click}
          >
            <div className="flex flex-row items-end justify-start">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <b className="relative leading-[26px]">
                  Bank of America Travel Rewards Visa Signature - 0349
                </b>
                <b className="relative text-base leading-[26px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder">
                  Quick View
                </b>
              </div>
            </div>
            <b className="relative text-xl leading-[26px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
              $139.20
            </b>
          </div>
          <div
            className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-start justify-between py-2.5 pr-4 pl-9 cursor-pointer text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner hover:bg-whitesmoke-400"
            onClick={onAccountContainer2Click}
          >
            <div className="flex flex-row items-end justify-start">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <b className="relative leading-[26px]">
                  Customized Cash Rewards Visa Signature - 6778
                </b>
                <div className="flex flex-row items-start justify-start text-base text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder">
                  <div className="flex flex-row items-end justify-start gap-[10px]">
                    <b className="relative leading-[26px]">Quick View</b>
                    <div className="flex flex-row items-end justify-start gap-[10px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/frame1.svg"
                      />
                      <b className="relative leading-[26px]">Payment due</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b className="relative text-xl leading-[26px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
              $137.42
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-start justify-between pt-[30px] pb-5 pr-4 pl-9 text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder border-t-[4px] border-solid border-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
        <div className="overflow-hidden flex flex-row items-start justify-start max-w-[316.79998779296875px]">
          <div className="w-[192.5px] h-[55px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
            <img
              className="w-[192.5px] relative h-[55px] overflow-hidden shrink-0"
              alt=""
              src="/assetsimagessitehpassetshighlightsconsumermerrillenmerrill-lo1-rgbsvg.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[17px]">
          <b className="w-[516px] relative leading-[18px] flex items-center">
            Your investments deserve more than just an algorithm. Get a
            professionally managed portfolio with the option to work with an
            advisor - all at a low cost.
          </b>
          <b className="relative leading-[18px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-chathams-blue">{`Learn about Merrill Guided investing Today >>`}</b>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-300 overflow-hidden flex flex-row items-start justify-center py-3.5 pr-4 pl-9 text-base text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-chathams-blue">
        <div className="w-[729px] flex flex-row items-center justify-start gap-[20px]">
          <div className="flex flex-row items-start justify-start relative">
            <img
              className="w-[33px] relative h-[33px] overflow-hidden shrink-0 z-[0]"
              alt=""
              src="/frame2.svg"
            />
            <img
              className="w-[15px] absolute !m-[0] top-[0px] left-[22px] h-[15px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/frame3.svg"
            />
          </div>
          <b className="relative leading-[18px]">Open a new account</b>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountsContainer;
