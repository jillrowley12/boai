import { useCallback } from "react";
import { useRouter } from "next/router";
import PersonalAccountsContainer from "../components/personal-accounts-container";
import LoanForm from "../components/loan-form";

const UserAccount = () => {
  const router = useRouter();

  const onBtn4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-col items-center justify-start pt-0 px-[159px] pb-[18.9px] box-border max-h-[1000000px] text-left text-3xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="flex flex-col items-start justify-start gap-[40px] z-[0]">
        <div className="w-full flex flex-col items-start justify-start max-w-[1200px]">
          <div className="w-full bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson flex flex-row items-center justify-between py-2.5 px-[25px] box-border max-w-[1200px] max-h-[1000000px]">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <img
                className="w-[279px] relative h-[34px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/bofa-rgbpng1@2x.png"
              />
              <b className="relative leading-[60px]">Online Banking</b>
            </div>
            <div className="h-[83px] flex flex-col items-end justify-between text-base">
              <div className="flex flex-row flex-wrap items-start justify-end pt-1 px-0 pb-0 gap-[10px]">
                <div className="flex flex-row items-center justify-center py-0.5 pr-[18px] pl-2.5 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                  <div className="relative leading-[10px]">Jafyson Limited</div>
                </div>
                <div className="flex flex-row items-center justify-center py-0.5 pr-[18px] pl-2.5 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                  <div className="relative leading-[10px]">{`Profile & Settings`}</div>
                </div>
                <div className="flex flex-row items-center justify-end py-0.5 pr-[18px] pl-2.5 gap-[10px] border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                  <div className="relative leading-[10px]">Saved Items</div>
                  <img
                    className="w-[15px] relative h-[13px] overflow-hidden shrink-0"
                    alt=""
                    src="/shoppingcarticon-1.svg"
                  />
                </div>
                <button
                  className="cursor-pointer [border:none] py-0.5 pr-[18px] pl-2.5 bg-[transparent] flex flex-row items-center justify-end"
                  onClick={onBtn4Click}
                >
                  <b className="w-[67px] relative text-base leading-[10px] flex font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero text-left items-center shrink-0">
                    Sign Out
                  </b>
                </button>
              </div>
              <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start">
                <input
                  className="[border:none] [outline:none] flex font-bold font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22 text-base bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero self-stretch w-[242px] overflow-hidden shrink-0 flex-row items-start justify-start py-[5px] px-3.5 box-border italic text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-dove-gray-200"
                  placeholder="How can we help you?"
                  type="text"
                />
                <button className="cursor-pointer [border:none] p-2.5 bg-gray-200 self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <img
                    className="w-[18px] relative h-[18px]"
                    alt=""
                    src="/vector.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-gainsboro-200 flex flex-row items-start justify-start gap-[1px] max-w-[1200px] text-base text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
            <div className="bg-whitesmoke-100 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">Accounts</div>
            </div>
            <div className="bg-gainsboro-200 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">Transfer | Zelle</div>
            </div>
            <div className="bg-gainsboro-200 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">{`Rewards & Deals`}</div>
            </div>
            <div className="bg-gainsboro-200 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">{`Tools & Investing`}</div>
            </div>
            <div className="bg-gainsboro-200 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">Security Center</div>
            </div>
            <div className="bg-gainsboro-200 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">Open an Account</div>
            </div>
            <div className="bg-gainsboro-200 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">{`Help & Support`}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-9xl text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
          <b className="relative leading-[26px]">Hello, Jafyson Limited</b>
          <div className="flex flex-row items-start justify-start gap-[6px] text-base text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
            <div className="flex flex-row items-center justify-center py-0 px-2.5 border-r-[2px] border-solid border-gray-100">
              <b className="relative leading-[26px]">Update Profile</b>
            </div>
            <div className="flex flex-row items-center justify-center py-0 px-2.5">
              <b className="relative leading-[26px]">Update Profile</b>
            </div>
          </div>
        </div>
        <div className="w-[1200px] flex flex-row items-start justify-between text-xl text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder">
          <PersonalAccountsContainer />
          <div className="w-[341px] h-[925px] flex flex-col items-center justify-start pt-[30px] px-0 pb-0 box-border gap-[20px]">
            <div className="w-full bg-gainsboro-300 h-[400px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-2 px-2.5 pb-[19px] box-border gap-[10px] max-w-[370px] max-h-[400px]">
              <b className="self-stretch relative leading-[26px]">
                Activity center
              </b>
              <div className="w-full flex flex-row flex-wrap items-start justify-between max-w-[335px] max-h-[335px] text-xs">
                <div className="shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden flex flex-row flex-wrap items-start justify-center p-2.5 box-border gap-[10px] max-w-[100px] max-h-[100px]">
                  <img
                    className="w-11 relative h-11 overflow-hidden shrink-0"
                    alt=""
                    src="/frame4.svg"
                  />
                  <b className="relative leading-[26px]">Alerts</b>
                </div>
                <div className="shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden flex flex-row flex-wrap items-start justify-center p-2.5 box-border gap-[10px] max-w-[100px] max-h-[100px]">
                  <img
                    className="w-[67.4px] relative h-[44.3px] object-cover"
                    alt=""
                    src="/group-2@2x.png"
                  />
                  <b className="relative leading-[26px]">Bill Pay</b>
                </div>
                <div className="shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden flex flex-row flex-wrap items-start justify-center p-2.5 box-border gap-[10px] max-w-[100px] max-h-[100px]">
                  <img
                    className="w-[53.7px] relative h-[49.6px] object-cover"
                    alt=""
                    src="/group-1@2x.png"
                  />
                  <b className="relative leading-[26px]">Messages</b>
                </div>
                <div className="w-[100px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center p-2.5 box-border relative gap-[10px] max-w-[100px] max-h-[100px] text-[12.1px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                  <div className="flex flex-col items-center justify-start z-[0]">
                    <img
                      className="w-[42px] relative h-[42px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/frame5@2x.png"
                    />
                  </div>
                  <div className="w-[21.8px] !m-[0] absolute top-[5px] left-[69.1px] rounded-[40.38px] bg-red-100 h-[21px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[7.3px] box-border z-[1]">
                    <b className="relative leading-[21px]">2</b>
                  </div>
                  <b className="w-[81px] relative text-xs leading-[15px] flex text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder text-center items-center justify-center shrink-0 z-[2]">{`special offers &deals`}</b>
                </div>
                <div className="w-[100px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 box-border gap-[8px] max-w-[100px] max-h-[100px] text-center">
                  <div className="flex flex-row items-start justify-start relative">
                    <img
                      className="w-[47px] relative h-[47px] overflow-hidden shrink-0 z-[0]"
                      alt=""
                      src="/frame6.svg"
                    />
                    <img
                      className="w-[21.4px] absolute !m-[0] top-[0px] left-[31.3px] h-[21.4px] overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/frame7.svg"
                    />
                  </div>
                  <b className="self-stretch relative leading-[15px]">
                    Open an account
                  </b>
                </div>
                <div className="w-[100px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center p-2.5 box-border gap-[10px] max-w-[100px] max-h-[100px]">
                  <div className="w-[71.4px] relative h-[35.3px]">
                    <div className="absolute top-[0px] left-[0px] bg-gainsboro-500 w-[71.4px] h-[35.3px]" />
                    <img
                      className="absolute top-[8.6px] left-[26.7px] rounded-[50px] w-[18.8px] h-[18.8px] overflow-hidden"
                      alt=""
                      src="/frame8.svg"
                    />
                  </div>
                  <b className="relative leading-[26px]">Quick View</b>
                </div>
                <div className="w-[100px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero overflow-hidden shrink-0 flex flex-col items-center justify-start p-2.5 box-border gap-[10px] max-w-[100px] max-h-[100px]">
                  <img
                    className="w-[45px] relative h-[45px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame9.svg"
                  />
                  <b className="relative leading-[26px]">Goals</b>
                </div>
                <div className="w-[100px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero h-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-2.5 box-border gap-[10px] max-w-[100px] max-h-[100px] text-center">
                  <img
                    className="w-[76px] relative h-[19px] object-cover"
                    alt=""
                    src="/image-7@2x.png"
                  />
                  <b className="self-stretch relative leading-[15px]">
                    10% BankAmeriDeals
                  </b>
                </div>
              </div>
            </div>
            <LoanForm propAlignSelf="unset" />
          </div>
        </div>
      </div>
      <div className="w-[1705px] absolute !m-[0] top-[-299700px] left-[-299700px] text-250xl-5 leading-[450px] font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft flex items-center h-[450px] shrink-0 max-w-[1704.97998046875px] z-[1]">
        BlankTestESs
      </div>
      <div className="w-[150.6px] absolute !m-[0] top-[-1000px] left-[-1000px] rounded-md bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero box-border h-[21.6px] max-h-[1000000px] z-[2] border-[1px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-silver1">
        <div className="absolute h-[148.15%] top-[96.3%] bottom-[-144.44%] left-[59.3px] box-border w-8 border-[16px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-silver1" />
        <div className="absolute h-[133.33%] top-[96.3%] bottom-[-129.63%] left-[60.3px] box-border w-[28.8px] border-[14px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero" />
      </div>
      <div className="w-[200px] !m-[0] absolute top-[0px] left-[-10000px] h-5 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 pb-[2.2px] pr-[47.3px] pl-[47.7px] box-border max-h-[1000000px] z-[3] text-center text-sm text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
        <a
          className="relative leading-[18px] text-[inherit] [text-decoration:none]"
          href="https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go#skip-to-h1"
          target="_blank"
        >
          Skip to main content
        </a>
      </div>
    </div>
  );
};

export default UserAccount;
