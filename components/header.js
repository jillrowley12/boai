import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";

const Header = ({
  customizedCashRewardsVisa,
  prop,
  btn2JustifyContent,
  btn2JustifyContent1,
  shoppingCartIcon1JustifyContent,
  searchJustifyContent,
}) => {
  const btn1Style = useMemo(() => {
    return {
      justifyContent: btn2JustifyContent,
    };
  }, [btn2JustifyContent]);

  const btn2Style = useMemo(() => {
    return {
      justifyContent: btn2JustifyContent1,
    };
  }, [btn2JustifyContent1]);

  const btn21Style = useMemo(() => {
    return {
      justifyContent: shoppingCartIcon1JustifyContent,
    };
  }, [shoppingCartIcon1JustifyContent]);

  const btn4Style = useMemo(() => {
    return {
      justifyContent: searchJustifyContent,
    };
  }, [searchJustifyContent]);

  const router = useRouter();

  const onBtn4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-3xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
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
          <div className="h-[83px] flex flex-col items-end justify-between max-w-[550px] text-base">
            <div className="self-stretch flex flex-row items-start justify-between pt-1 px-0 pb-0">
              <div
                className="flex flex-row items-center justify-start py-0.5 pr-[18px] pl-2.5 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero"
                style={btn1Style}
              >
                <div className="relative leading-[10px]">Jafyson Limited</div>
              </div>
              <div
                className="flex flex-row items-center justify-start py-0.5 pr-[18px] pl-2.5 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero"
                style={btn2Style}
              >
                <div className="relative leading-[10px]">{`Profile & Settings`}</div>
              </div>
              <div
                className="flex flex-row items-center justify-start py-0.5 pr-[18px] pl-2.5 gap-[10px] border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero"
                style={btn21Style}
              >
                <div className="relative leading-[10px]">Saved Items</div>
                <img
                  className="w-[15px] relative h-[13px] overflow-hidden shrink-0"
                  alt=""
                  src="/shoppingcarticon-1.svg"
                />
              </div>
              <button
                className="cursor-pointer [border:none] py-0.5 pr-[18px] pl-2.5 bg-[transparent] flex flex-row items-center justify-start"
                onClick={onBtn4Click}
                style={btn4Style}
              >
                <b className="relative text-base leading-[10px] font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero text-left">
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
      <div className="w-[1200px] [background:linear-gradient(180deg,_#fff,_#d0dde5)] flex flex-col items-start justify-start pt-[35px] px-10 pb-0 box-border gap-[40px] max-w-[1200px] text-xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft">
        <div className="w-full flex flex-col items-start justify-start gap-[43px] max-w-[1200px]">
          <div className="flex flex-row items-center justify-start gap-[28px]">
            <b className="relative leading-[26px]">
              {customizedCashRewardsVisa}
            </b>
            <div className="w-8 bg-aliceblue box-border h-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[15px] px-3 border-[1px] border-solid border-gainsboro-400">
              <img
                className="w-5 relative h-[15px]"
                alt=""
                src="/polygon-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between text-lg">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <b className="relative leading-[26px]">Summary</b>
              <div className="flex flex-col items-start justify-start py-2.5 px-0 border-t-[1px] border-solid border-gainsboro-100 border-b-[1px]">
                <div className="flex flex-row items-start justify-start gap-[34px]">
                  <div className="relative leading-[26px]">
                    Available balance (as of today):
                  </div>
                  <b className="relative text-xl leading-[26px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
                    {prop}
                  </b>
                </div>
                <div className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                  What does this include?
                </div>
              </div>
              <b className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                Account balance history?
              </b>
            </div>
            <div className="w-[364px] flex flex-col items-start justify-start gap-[5px]">
              <b className="relative leading-[26px]">Features</b>
              <div className="self-stretch flex flex-row items-start justify-between pt-1.5 px-0 pb-0 border-t-[1px] border-solid border-gainsboro-100">
                <div className="relative leading-[26px]">
                  Keep the Change saving transfers:
                </div>
                <div className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                  Enroll
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[26px]">
                  Overdraft protection:
                </div>
                <div className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                  Enroll
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[26px]">Beneficiaries:</div>
                <div className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                  Manage
                </div>
              </div>
              <b className="relative leading-[26px] text-f9dee1">{`More features >`}</b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px] text-f9dee1">
              <b className="relative leading-[26px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft">
                Services
              </b>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 border-t-[1px] border-solid border-gainsboro-100">
                <b className="relative leading-[26px]">
                  Lock/ unlock ATM/ debit card
                </b>
                <div className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                  Order checks /deposit slips
                </div>
              </div>
              <b className="relative leading-[26px] text-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-mariner">
                Stop payment on a bank
              </b>
              <b className="relative leading-[26px]">{`More service >`}</b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between text-base text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <div className="rounded-t-3xs rounded-b-none bg-whitesmoke-100 flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">Activity</div>
            </div>
            <div className="rounded-t-3xs rounded-b-none [background:linear-gradient(180deg,_#faf8f6,_#f1f6fa)] flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">{`Statements & Documents`}</div>
            </div>
            <div className="rounded-t-3xs rounded-b-none [background:linear-gradient(180deg,_#faf8f6,_#ebf4f7)] flex flex-row items-center justify-center py-2 px-4 border-r-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
              <div className="relative leading-[26px]">{`Information & Services`}</div>
            </div>
          </div>
          <img
            className="w-[42px] relative h-[42px] overflow-hidden shrink-0"
            alt=""
            src="/frame11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
