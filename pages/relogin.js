import { useCallback } from "react";
import LoginFormContainer from "../components/login-form-container";
import { useRouter } from "next/router";
import { useState } from 'react';



  const Relogin = () => {
    const router = useRouter();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const allowedUserId = 'jafyson';
    const allowedPassword = 'Password01';
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (userId === allowedUserId && password === allowedPassword) {
        router.push('/user-account');
      } else {
        router.push('/relogin');
      }
    };

  return (
    <div className="w-full relative bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-col items-center justify-start pt-0 px-[269.6px] pb-[18.9px] box-border max-h-[1000000px] text-left text-lg text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="w-[980px] flex flex-col items-start justify-start max-h-[1000000px] z-[0]">
        <div className="self-stretch relative h-[838.8px] max-h-[1000000px]">
          <LoginFormContainer />
          <div className="absolute w-[calc(100%_-_25px)] top-[304.3px] right-[0px] left-[25px] h-[292px]">
            <div className="absolute w-[calc(100%_-_255px)] top-[15px] right-[255px] left-[0px] flex flex-row items-start justify-start py-0 pr-[23.2px] pl-0 box-border gap-[70px] max-h-[1000000px]">
              <div className="flex flex-col items-start justify-start gap-[23px] max-h-[1000000px]">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="w-[259px] flex flex-col items-start justify-start pt-0 pb-1 pr-10 pl-0 box-border max-h-[1000000px]">
                    <div className="relative leading-[27px] inline-block max-w-[259px]">
                      User ID
                    </div>
                  </div>
                  <input
                    className="[outline:none] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero w-[214.6px] relative box-border h-[23.2px] border-[1px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-silver"
                    type="text" value={userId} onChange={(e) => setUserId(e.target.value)}
                  />
                  <div className="w-[259px] relative h-[22px] text-smi text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
                    <div className="absolute w-[calc(100%_-_246px)] top-[2px] right-[246px] left-[0px] rounded-[2.5px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero box-border h-[13px] border-[1px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-boulder" />
                    <div className="absolute w-[calc(100%_-_151.8px)] top-[0px] right-[130.8px] left-[21px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border max-h-[1000000px]">
                      <div className="relative leading-[19.5px] inline-block max-w-[101.1500015258789px] max-h-[19.5px]">
                        Save this User ID
                      </div>
                    </div>
                    <img
                      className="absolute top-[0px] left-[128.1px] w-[18px] h-[21px] object-cover"
                      alt=""
                      src="/link1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="w-[259px] flex flex-col items-start justify-start pt-0 pb-1 pr-[194px] pl-0 box-border max-h-[1000000px]">
                    <div className="relative leading-[27px] inline-block max-w-[259px]">
                      Password
                    </div>
                  </div>
                  <div className="w-[259px] flex flex-col items-start justify-start py-0 pr-[44.4px] pl-0 box-border max-h-[1000000px]">
                    <input
                      className="[outline:none] bg-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-gallery-30 w-[214.6px] relative box-border h-[23.2px] max-h-[1000000px] border-[1px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-silver"
                      type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[124.1px] flex flex-col items-start justify-start py-0 pr-[10.1px] pl-0 box-border max-h-[1000000px] text-xs text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                  <a
                    className="relative leading-[18px] text-[inherit] inline-block [text-decoration:none] max-w-[124.05999755859375px]"
                    href="https://secure.bankofamerica.com/login/reset/entry/forgotIDPwdScreen.go"
                    target="_blank"
                  >
                    Forgot your Password?
                  </a>
                </div>
                <button
                  className="cursor-pointer pt-[5px] px-[14.8px] pb-[6.2px] bg-[transparent] rounded-8xs [background:linear-gradient(180deg,_#007dc3,_#0067b1)] box-border flex flex-row items-start justify-start max-h-[1000000px] border-[1px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-chathams-blue"
                  type="submit"
                >
                  <div className="w-[54px] relative h-[14.4px] bg-[url('/spanbtnbofabluelock@3x.png')] bg-cover bg-no-repeat bg-[top] max-h-[1000000px]">
                    <b className="absolute top-[-4px] left-[14.7px] text-smi leading-[22px] font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero text-center">
                      Log In
                    </b>
                  </div>
                </button>
                </form>
              </div>
              <div className="w-[347.8px] relative box-border h-[275px] max-h-[1000000px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-armadillo border-l-[0.8px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-silver">
                <div className="absolute w-[calc(100%_-_60.8px)] top-[0px] right-[0px] left-[60.8px] flex flex-col items-start justify-start py-0 pr-[100px] pl-0 box-border max-h-[1000000px]">
                  <div className="relative leading-[27px] inline-block max-w-[287px]">
                    Stay connected with our app
                  </div>
                </div>
                <img
                  className="absolute top-[37px] left-[60.8px] w-[149px] h-52 overflow-hidden object-cover"
                  alt=""
                  src="/mobile-llamapng@2x.png"
                />
                <div className="absolute w-[calc(100%_-_220.8px)] top-[47px] right-[0px] left-[220.8px] flex flex-col items-start justify-start max-h-[1000000px]">
                  <div className="w-[159px] flex flex-col items-start justify-start pt-10 pb-2.5 pr-8 pl-0 box-border max-w-[540px] max-h-[1000000px]">
                    <div className="relative leading-[27px] inline-block max-w-[159px]">
                      <p className="m-0">Secure, convenient</p>
                      <p className="m-0">banking anytime</p>
                    </div>
                  </div>
                  <div className="rounded-8xs [background:linear-gradient(180deg,_#dc1431,_#c41230)] box-border flex flex-row items-start justify-start pt-[5.8px] pb-[7.8px] pr-[19.2px] pl-[19.4px] max-h-[1000000px] text-center text-sm-5 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero border-[1px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-tall-poppy">
                    <b className="relative leading-[22px]">Get the app</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[725px] w-[205px] flex flex-col items-start justify-start max-h-[1000000px] text-sm font-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-verdana-regular-11">
              <div className="self-stretch flex flex-col items-start justify-start max-h-[1000000px]">
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-[9px] box-border max-h-[1000000px]">
                  <div className="self-stretch box-border flex flex-col items-start justify-start pt-[18px] pb-[8.8px] pr-[114px] pl-0 max-h-[1000000px] border-b-[0.8px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-westar">
                    <div className="relative leading-[21px] inline-block max-w-[187px]">
                      Login help
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-3 px-0 pb-[5px] box-border max-h-[1000000px] text-2xs text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[14.5px] pr-[72px] pl-0 box-border max-h-[1000000px]">
                      <a
                        className="relative leading-[16.5px] text-[inherit] inline-block [text-decoration:none] max-w-[187px]"
                        href="https://secure.bankofamerica.com/login/reset/entry/forgotIDPwdScreen.go"
                        target="_blank"
                      >
                        Forgot ID/Password?
                      </a>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[14.5px] pr-[77px] pl-0 box-border max-h-[1000000px]">
                      <a
                        className="relative leading-[16.5px] text-[inherit] inline-block [text-decoration:none] max-w-[187px]"
                        href="https://www.bankofamerica.com/customer-service/contact-us/bank-of-america-login-issues/"
                        target="_blank"
                      >
                        Problem logging in?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-[9px] box-border max-h-[1000000px]">
                  <div className="self-stretch box-border flex flex-col items-start justify-start pt-[18px] pb-[8.8px] pr-px pl-0 max-h-[1000000px] border-b-[0.8px] border-solid border-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-westar">
                    <div className="relative leading-[21px] inline-block max-w-[187px]">
                      Not using Online Banking?
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-3 px-0 pb-[5px] box-border max-h-[1000000px] text-2xs text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[15px] pr-[129px] pl-0 box-border max-h-[1000000px]">
                      <div className="flex flex-row items-start justify-start relative max-h-[1000000px]">
                        <a
                          className="relative leading-[16.5px] text-[inherit] inline-block [text-decoration:none] max-h-[16.5px] z-[0]"
                          href="https://secure.bankofamerica.com/login/enroll/entry/olbEnroll.go"
                          target="_blank"
                        >
                          Enroll now
                        </a>
                        <div className="w-px absolute !m-[0] top-[0px] left-[-11028.6px] h-px overflow-hidden shrink-0 max-h-[1000000px] z-[1]">
                          <a
                            className="absolute top-[-1.2px] left-[0px] leading-[16.5px] text-[inherit] [text-decoration:none]"
                            href="https://secure.bankofamerica.com/login/enroll/entry/olbEnroll.go"
                            target="_blank"
                          >
                            for
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[14.5px] box-border max-h-[1000000px]">
                      <a
                        className="relative leading-[16.5px] text-[inherit] inline-block [text-decoration:none] max-w-[187px]"
                        href="https://www.bankofamerica.com/onlinebanking/learning-center.go"
                        target="_blank"
                      >
                        Learn more about Online Banking
                      </a>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[14.5px] pr-[81px] pl-0 box-border max-h-[1000000px]">
                      <a
                        className="relative leading-[16.5px] text-[inherit] inline-block [text-decoration:none] max-w-[187px]"
                        href="https://www.bankofamerica.com/online-banking/service-agreement.go"
                        target="_blank"
                      >
                        Service Agreement
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full top-[676.3px] right-[0px] left-[0px] flex flex-col items-start justify-start max-h-[1000000px] text-2xs text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-dove-gray-200 font-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-verdana-regular-11">
            <div className="self-stretch relative h-[15px] max-h-[1000000px]" />
            <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood flex flex-col items-start justify-start max-h-[1000000px]">
              <div className="self-stretch relative bg-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-pampas h-[147.5px] max-h-[1000000px]">
                <div className="absolute w-[calc(100%_-_50px)] top-[17px] right-[25px] left-[25px] flex flex-col items-start justify-start py-0 pr-[836px] pl-5 box-border bg-[url('/divsecure@3x.png')] bg-cover bg-no-repeat bg-[top] max-h-[1000000px]">
                  <b className="relative leading-[14px] inline-block max-w-[910px]">
                    Secure area
                  </b>
                </div>
                <div className="absolute w-[calc(100%_-_50px)] top-[44px] right-[25px] left-[25px] flex flex-row items-start justify-start pt-0 pb-px pr-[584.8px] pl-0 box-border gap-[10px] max-h-[1000000px] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                  <div className="w-[49.5px] relative h-[16.5px] bg-[url('/link2@3x.png')] bg-cover bg-no-repeat bg-[top] max-h-[1000000px]">
                    <a
                      className="absolute top-[0px] left-[0px] leading-[16.5px] text-[inherit] [text-decoration:none]"
                      href="https://www.bankofamerica.com/security-center/privacy-overview/"
                      target="_blank"
                    >
                      Privacy
                    </a>
                  </div>
                  <div className="w-[55.3px] relative h-[16.5px] bg-[url('/link3@3x.png')] bg-cover bg-no-repeat bg-[top] max-h-[1000000px]">
                    <a
                      className="absolute top-[0px] left-[0px] leading-[16.5px] text-[inherit] [text-decoration:none]"
                      href="https://www.bankofamerica.com/security-center/overview/"
                      target="_blank"
                    >
                      Security
                    </a>
                  </div>
                  <div className="w-[220.4px] flex flex-col items-start justify-start max-h-[1000000px]">
                    <div className="relative leading-[16.5px] inline-block max-w-[221px] max-h-[16.5px]">
                      CA Opt-Out Preference Signals Honored
                    </div>
                  </div>
                </div>
                <div className="absolute w-[calc(100%_-_50px)] top-[72.5px] right-[25px] left-[25px] h-[30px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft">
                  <div className="absolute top-[-1px] left-[0px] leading-[15px]">{`Bank of America, N.A. Member FDIC. `}</div>
                  <div className="absolute top-[0px] left-[209.7px] w-[140.3px] h-[13.6px] bg-[url('/link4@3x.png')] bg-cover bg-no-repeat bg-[top] text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
                    <a
                      className="absolute top-[-1px] left-[0px] leading-[15px] text-[inherit] [text-decoration:none]"
                      href="https://www.bankofamerica.com/help/equalhousing-popup/"
                      target="_blank"
                    >
                      Equal Housing Lender
                    </a>
                  </div>
                  <div className="absolute top-[14px] left-[0px] leading-[15px]">
                    © 2023 Bank of America Corporation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1705px] absolute !m-[0] top-[-299700px] left-[-299700px] text-250xl-5 leading-[450px] font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30 flex items-center h-[450px] shrink-0 max-w-[1704.97998046875px] z-[1]">
        BlankTestESs
      </div>
      <div className="w-[200px] !m-[0] absolute top-[0px] left-[-10000px] h-5 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 pb-[2.2px] pr-[47.3px] pl-[47.7px] box-border max-h-[1000000px] z-[2] text-center text-sm text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner">
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

export default Relogin;
