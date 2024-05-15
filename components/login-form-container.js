import { useCallback } from "react";
import { useRouter } from "next/router";

const LoginFormContainer = () => {
  const router = useRouter();

  const onBofARgbpngImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[279.3px] text-left text-xl text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-sand-dune font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[74.2px]">
        <img
          className="absolute top-[20px] left-[25px] w-[230px] h-7 overflow-hidden object-cover cursor-pointer"
          alt=""
          src="/bofa-rgbpng@2x.png"
          onClick={onBofARgbpngImageClick}
        />
        <div className="absolute w-[calc(100%_-_904.4px)] top-[24px] right-[644.4px] left-[280px] flex flex-col items-start justify-start py-0 pr-[1.6px] pl-0 box-border max-h-[1000000px]">
          <div className="relative inline-block max-w-[100px]">
            Log In
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_809.2px)] top-[20px] right-[0px] left-[809.2px] flex flex-row items-start justify-start pt-2 px-0 pb-px box-border max-h-[1000000px] text-2xs text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-dove-gray-200 font-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-verdana-regular-11">
          <div className="w-[100.6px] relative h-[16.5px] bg-[url('/divsecurearea@3x.png')] bg-cover bg-no-repeat bg-[top] max-h-[1000000px]">
            <b className="absolute top-[0px] left-[16px] leading-[16.5px]">
              Secure Area
            </b>
          </div>
          <div className="w-[70.2px] relative h-[16.5px] bg-[url('/link@3x.png')] bg-cover bg-no-repeat bg-[top] max-h-[1000000px]">
            <a
              className="absolute top-[0px] left-[10px] leading-[16.5px] text-[inherit] [text-decoration:none]"
              href="https://secure.bankofamerica.com/login/languageToggle.go"
              target="_blank"
            >
              En español
            </a>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_219.3px)] w-full top-[74.2px] right-[0px] bottom-[145.1px] left-[0px] flex flex-col items-start justify-start max-h-[1000000px] text-3xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
        <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson flex flex-col items-start justify-start py-0 px-[25px] box-border max-h-[1000000px]">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[732px] pl-0 box-border max-h-[1000000px]">
            <div className="relative leading-[60px] inline-block max-w-[930px]">
              Log In to Online Banking
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[154.2px] right-[0px] left-[0px] h-[125.1px] text-3xs text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft font-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-verdana-regular-11">
        <div className="absolute h-[calc(100%_-_2px)] w-[calc(100%_-_914px)] top-[1px] right-[893px] bottom-[1px] left-[21px] bg-[url('/divicobg@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[0px] left-[-10290.6px] w-px h-px overflow-hidden">
            <div className="absolute top-[-0.2px] left-[0px] leading-[15px]">
              error
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_40px)] top-[0px] right-[20px] left-[20px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero box-border flex flex-col items-start justify-start pt-[20.8px] px-[20.8px] pb-[17.8px] max-h-[1000000px] text-2xs border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson">
          <div className="self-stretch flex flex-col items-start justify-start pt-1 pb-0 pr-0 pl-[61px] box-border bg-[url('/diverrormessage@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[36px] max-h-[1000000px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[2.4px] pl-0 box-border gap-[16.5px] max-h-[1000000px]">
              <div className="relative leading-[16.5px] inline-block max-w-[837.4000244140625px]">
                <p className="m-0">
                  The information you entered doesn't match our records. You
                  have a few more tries remaining.
                </p>
                <p className="m-0 text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                  <span className="text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft">{`Please try again or click `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://secure.bankofamerica.com/login/reset/entry/forgotIDPwdScreen.go"
                    target="_blank"
                  >
                    <span>Forgot ID/Password</span>
                  </a>
                </p>
              </div>
              <div className="relative leading-[16.5px] inline-block max-w-[837.4000244140625px]">
                <p className="m-0">
                  <span>
                    <b className="font-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-verdana-regular-11">
                      Having problems logging in or resetting your Password?
                    </b>
                    <span>
                      {" "}
                      If you're using a password manager or your browser has
                      stored credentials that are no
                    </span>
                  </span>
                </p>
                <p className="m-0 text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                  <span>
                    <span>{`longer valid, deleting your stored credentials should enable you to access your account. `}</span>
                  </span>
                  <a
                    className="text-[inherit]"
                    href="https://www.bankofamerica.com/customer-service/contact-us/bank-of-america-login-issues/"
                    target="_blank"
                  >
                    <span>
                      <span>Learn more</span>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
