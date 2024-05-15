import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState } from 'react';
import EngagementContentContainer from "../components/engagement-content-container";

  const Index1 = () => {
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
    <div className="w-full relative h-[3743px] text-left text-sm text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
      <div className="absolute top-[calc(50%_-_1871.5px)] left-[calc(50%_-_759.6px)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero w-[1519.2px] flex flex-col items-center justify-start py-0 px-[39.6px] box-border min-h-[3743px]">
        <div className="w-[1440px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-col items-start justify-start max-w-[1440px] min-h-[3743px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="w-[1440px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-[1440px]">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete flex flex-col items-center justify-start py-0 px-[72px]">
                    <div className="w-[1296px] flex flex-col items-start justify-start pt-0.5 px-5 pb-0 box-border max-w-[1296px]">
                      <div className="self-stretch flex flex-row items-start justify-between">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-6 pl-0">
                              <div className="w-[55.3px] relative box-border h-[19.6px] border-b-[1.6px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="absolute top-[-2px] left-[0px] leading-[20px]">
                                  Personal
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-[40.7px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/smallbusiness"
                                target="_blank"
                              >
                                Small Business
                              </a>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-[46.9px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.ml.com/wealthmanagement.html"
                                target="_blank"
                              >
                                Wealth Management
                              </a>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-[51.6px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://business.bofa.com/content/boaml/en_us/home.html"
                                target="_blank"
                              >{`Businesses & Institutions`}</a>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-[32.6px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/security-center/overview/"
                                target="_blank"
                              >
                                Security
                              </a>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[1.6px] pb-[2.4px] pr-6 pl-0">
                              <div className="w-[87.6px] relative h-[18px]">
                                <div className="absolute top-[0px] left-[0px] w-[87.6px] h-[18px] overflow-hidden flex flex-col items-start justify-center py-0.5 pr-[61.6px] pl-0 box-border">
                                  <img
                                    className="w-[26px] relative h-[14.1px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehomepageiconscoloredflagscapev2csx4e4e3134svg.svg"
                                  />
                                </div>
                                <a
                                  className="absolute top-[-2px] left-[30px] leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://about.bankofamerica.com/"
                                  target="_blank"
                                >
                                  About Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-0 pb-[2.4px] pr-[12.1px] pl-[26px]">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/es/"
                                target="_blank"
                              >
                                En español
                              </a>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0 pb-[2.4px] pr-[12.3px] pl-[26px]">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/customer-service/contact-us/"
                                target="_blank"
                              >
                                Contact Us
                              </a>
                            </div>
                            <div className="flex flex-col items-start justify-start pt-0 pb-[2.4px] pr-[4.8px] pl-[26px]">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/help/overview.go"
                                target="_blank"
                              >
                                Help
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1296px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-row items-center justify-between pt-[15px] pb-0 pr-2.5 pl-5 box-border max-w-[1296px] mt-[-0.4px] text-center">
                    <div className="flex flex-col items-start justify-start pt-0 pb-[4.8px] pr-[448.2px] pl-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start max-w-[311.4360046386719px]">
                        <div className="w-[311.4px] h-[31.2px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[0.1px] box-border">
                          <img
                            className="w-[311.3px] relative h-[31.2px] overflow-hidden shrink-0"
                            alt=""
                            src="/assetsimagesgloballogosbaclogov2csx3648cbbbsvg.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-[300px] min-h-[54px]">
                      <div className="flex flex-col items-start justify-start max-w-[290px] min-h-[54px]">
                        <div className="self-stretch flex flex-col items-center justify-start">
                          <div className="flex flex-col items-start justify-start min-h-[44px]">
                            <div className="self-stretch flex flex-col items-center justify-start">
                              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-[290px]">
                                <div className="w-full flex flex-col items-center justify-start max-w-[300px]">
                                  <div className="w-[290px] relative h-10 overflow-hidden shrink-0">
                                    <div className="absolute top-[2px] right-[3px] w-[86px] h-[34.6px]">
                                      <div className="absolute top-[16px] left-[0.8px] flex flex-col items-center justify-start py-0 pr-[0.1px] pl-[8.4px]">
                                        <div className="relative">Search</div>
                                      </div>
                                      <div className="absolute top-[0.8px] left-[calc(50%_+_9.2px)] w-[33px] h-[33px]">
                                        <div className="absolute h-[60.61%] w-[60.61%] top-[19.7%] right-[19.7%] bottom-[19.7%] left-[19.7%] flex flex-col items-start justify-start">
                                          <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0"
                                            alt=""
                                            src="/image-fill.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-xl">
              <div className="w-[1440px] flex flex-col items-start justify-start max-w-[1440px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start py-0 px-[82px]">
                    <div className="w-[1276px] flex flex-col items-start justify-start py-0 px-2.5 box-border">
                      <div className="self-stretch flex flex-row items-start justify-between">
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-[13px]">
                            <div className="flex flex-col items-start justify-start py-0 pr-[7.3px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/deposits/checking/checking-accounts/"
                                target="_blank"
                              >
                                Checking
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-[13px]">
                            <div className="flex flex-col items-start justify-start py-0 pr-[13.3px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/deposits/savings/savings-accounts/"
                                target="_blank"
                              >{`Savings & CDs`}</a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-[13px]">
                            <div className="flex flex-col items-start justify-start py-0 pr-[11.3px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/credit-cards/"
                                target="_blank"
                              >
                                Credit Cards
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-[13px]">
                            <div className="flex flex-col items-start justify-start py-0 pr-[11.6px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/mortgage/home-mortgage/"
                                target="_blank"
                              >
                                Home Loans
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 px-3.5">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-[13px]">
                            <div className="flex flex-col items-start justify-start py-0 pr-[11.1px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.bankofamerica.com/auto-loans/"
                                target="_blank"
                              >
                                Auto Loans
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-3.5">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] pb-[13px] pr-[35px] pl-0 relative">
                            <div className="w-8 !m-[0] absolute top-[3.3px] right-[0px] h-7 flex flex-col items-center justify-start py-0 px-[1.8px] box-border z-[0]">
                              <img
                                className="w-[28.3px] flex-1 relative max-h-full overflow-hidden"
                                alt=""
                                src="/svg.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[10.8px] pl-0 z-[1]">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://www.merrilledge.com/"
                                target="_blank"
                              >
                                Investing
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5">
                          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-[13px]">
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[25.8px] pl-0">
                              <a
                                className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                href="https://bettermoneyhabits.bankofamerica.com/en"
                                target="_blank"
                              >
                                Better Money Habits®
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap items-start justify-start gap-[30px] text-sm text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                    <div className="w-[354px] flex flex-col items-start justify-start pt-[18px] px-5 pb-0 box-border gap-[15px] min-h-[500px]">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="w-[314px] flex flex-col items-start justify-start max-w-[1296px]">
                          <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson flex flex-col items-start justify-start pt-2 px-0 pb-0">
                            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                              <div className="flex flex-col items-center justify-start pt-2.5 px-5 pb-0 box-border gap-[9px] max-w-[1296px] font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
                              <form onSubmit={handleSubmit}>
                                <input
                                  className="[outline:none] flex font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30 text-[15.3px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero w-[274px] box-border flex-row items-start justify-start py-[9.6px] px-[6.8px] font-bold text-darkslategray border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl1"
                                  placeholder="User ID"
                                  type="text" value={userId} onChange={(e) => setUserId(e.target.value)}
                                />
                                <input
                                  className="[outline:none] flex font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30 text-[14.2px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero w-[274px] box-border flex-row items-start justify-start py-[9.6px] px-[6.8px] font-bold text-darkslategray border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl1"
                                  placeholder="Password"
                                  type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="w-[274px] flex flex-col items-start justify-start pt-[6.2px] pb-[11px] pr-[140px] pl-[42px] box-border relative">
                                  <div className="relative leading-[16px] inline-block max-w-[274px] z-[0]">
                                    Save User ID
                                  </div>
                                  <input
                                    className="!m-[0] w-[29px] absolute top-[0px] left-[0px] h-[30px] z-[1]"
                                    type="checkbox"
                                  />
                                </div>
                                <button
                                  className="cursor-pointer pt-[9.6px] px-[100px] pb-[10.4px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson w-[274px] box-border h-10 flex flex-col items-center justify-start border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero"
                                  type="submit"
                                >
                                  <div className="relative text-xl leading-[20px] font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero text-center">
                                    Log In
                                  </div>
                                </button>
                                </form>
                              </div>
                              <div className="w-[314px] flex flex-col items-start justify-start py-0 px-2.5 box-border max-w-[1296px] text-sm-6">
                                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[150px] pl-2.5">
                                  <div className="self-stretch flex flex-col items-start justify-start">
                                    <a
                                      className="relative leading-[19.2px] text-[inherit] inline-block [text-decoration:none] max-h-[19.200000762939453px]"
                                      href="https://secure.bankofamerica.com/auth/forgot/reset-entry/"
                                      target="_blank"
                                    >
                                      Forgot ID/Password?
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[314px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-[1296px] text-sm-9">
                                <div className="w-[196px] flex flex-col items-start justify-start py-0 pr-[85px] pl-2.5 box-border">
                                  <div className="relative leading-[19.2px] inline-block max-w-[176px]">{`Security & Help`}</div>
                                </div>
                                <div className="w-[98px] flex flex-col items-start justify-start py-0 pr-[52px] pl-2.5 box-border text-sm-8">
                                  <a
                                    className="relative leading-[19.2px] text-[inherit] inline-block [text-decoration:none] max-w-[77.98999786376953px]"
                                    href="https://secure.bankofamerica.com/login/enroll/entry/olbEnroll.go"
                                    target="_blank"
                                  >
                                    Enroll
                                  </a>
                                </div>
                              </div>
                              <div className="w-[314px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-[1296px] text-center text-sm-5">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                  <div className="w-[314px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson2 h-[39px] flex flex-col items-center justify-start pt-[9px] pb-2.5 pr-[101.4px] pl-[101.6px] box-border">
                                    <a
                                      className="relative leading-[19.2px] text-[inherit] [text-decoration:none]"
                                      href="https://promo.bankofamerica.com/hp-oaa2/"
                                      target="_blank"
                                    >
                                      Open an Account
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-sm-5">
                        <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue1 flex flex-col items-start justify-start relative">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] pb-[10.4px] pr-9 pl-[50px] z-[0]">
                            <a
                              className="relative leading-[19.2px] text-[inherit] inline-block [text-decoration:none] max-w-[249px]"
                              href="https://locators.bankofamerica.com/"
                              target="_blank"
                            >
                              <p className="m-0">
                                Find your closest financial center or
                              </p>
                              <p className="m-0">ATM</p>
                            </a>
                          </div>
                          <img
                            className="w-[18px] absolute !m-[0] h-[44.52%] top-[27.74%] bottom-[27.74%] left-[20px] max-h-full overflow-hidden z-[1]"
                            alt=""
                            src="/svg1.svg"
                          />
                        </div>
                        <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue flex flex-col items-start justify-start relative">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[9px] pb-[10.2px] pr-[99px] pl-[50px] z-[0]">
                            <a
                              className="relative leading-[19.2px] text-[inherit] inline-block [text-decoration:none] max-w-[249px]"
                              href="https://secure.bankofamerica.com/mycommunications/public/appointments/getTopics.go"
                              target="_blank"
                            >
                              Schedule an Appointment
                            </a>
                          </div>
                          <img
                            className="w-5 absolute !m-[0] h-[51.02%] top-[24.49%] bottom-[24.49%] left-[20px] max-h-full overflow-hidden z-[1]"
                            alt=""
                            src="/svg2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[20px] text-13xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
                      <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-[400px] pl-0">
                        <div className="relative leading-[35.2px] inline-block max-w-[926.6599731445312px] max-h-[35.20000076293945px]">
                          Choose the card that works for you
                        </div>
                      </div>
                      <div className="self-stretch h-[340.8px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border text-center text-16xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson1 font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start">
                          <div className="self-stretch w-[249.2px] relative">
                            <div className="absolute top-[-20px] left-[0px] flex flex-col items-center justify-start gap-[5px]">
                              <div className="w-[249.2px] relative h-[70px]">
                                <div className="absolute top-[28.3px] left-[calc(50%_-_67.3px)]">
                                  $
                                </div>
                                <div className="absolute top-[0px] left-[calc(50%_-_46.6px)] text-41xl-3 leading-[70px]">
                                  200
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[66.5px] pl-[66.7px] box-border text-sm-5">
                                <div className="relative leading-[14px] inline-block max-w-[249.16000366210938px]">
                                  online bonus offer
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[76px] pl-[76.2px] box-border text-mini-3 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  No annual fee.
                                </div>
                              </div>
                              <div className="w-[224.2px] flex flex-col items-start justify-start">
                                <img
                                  className="self-stretch relative max-w-full overflow-hidden h-[132px] shrink-0 object-cover max-h-[132px]"
                                  alt=""
                                  src="/assetsimagessitehpassetsmastheadsconsumercardsen4card5874520-customized-1webp@2x.png"
                                />
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[35.5px] pl-[35.7px] box-border text-sm text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  Customized Cash Rewards
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start pt-[1.4px] pb-0 pr-[49px] pl-[49.2px] box-border text-[12.5px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <div className="flex flex-col items-center justify-start gap-[3.4px]">
                                  <a
                                    className="relative leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >
                                    3% cash back in the
                                  </a>
                                  <a
                                    className="relative text-smi-4 leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >{`category of your choice >`}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch w-[249.2px] relative text-mini-3">
                            <div className="absolute top-[-20px] left-[0px] flex flex-col items-center justify-start gap-[5px]">
                              <div className="w-[249.2px] relative h-[70px] text-16xl">
                                <div className="absolute top-[28.3px] left-[calc(50%_-_67.3px)]">
                                  $
                                </div>
                                <div className="absolute top-[0px] left-[calc(50%_-_46.6px)] text-41xl-3 leading-[70px]">
                                  200
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[66.5px] pl-[66.7px] box-border text-sm-5">
                                <div className="relative leading-[14px] inline-block max-w-[249.16000366210938px]">
                                  online bonus offer
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[76px] pl-[76.2px] box-border text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  No annual fee.
                                </div>
                              </div>
                              <div className="w-[224.2px] flex flex-col items-start justify-start">
                                <img
                                  className="self-stretch relative max-w-full overflow-hidden h-[132px] shrink-0 object-cover max-h-[132px]"
                                  alt=""
                                  src="/assetsimagessitehpassetsmastheadsconsumercardsen4card5779014-unlimited-2webp@2x.png"
                                />
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[42px] pl-[42.2px] box-border text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  Unlimited Cash Rewards
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start pt-[1.4px] pb-0 pr-[48.7px] pl-[48.5px] box-border text-smi-7 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <div className="flex flex-col items-center justify-start gap-[3.4px]">
                                  <a
                                    className="relative leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >
                                    Unlimited 1.5% cash back
                                  </a>
                                  <a
                                    className="relative text-[12.3px] leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >{`on all purchases >`}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch w-[249.2px] relative text-[59.7px]">
                            <div className="absolute top-[-20px] left-[0px] flex flex-col items-center justify-start gap-[5px]">
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[25px] pl-[25.2px] box-border">
                                <div className="relative leading-[70px] inline-block max-w-[249.16000366210938px]">
                                  25,000
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[45px] pl-[45.2px] box-border text-sm-5">
                                <div className="relative leading-[14px] inline-block max-w-[249.16000366210938px]">
                                  online bonus points offer
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[76px] pl-[76.2px] box-border text-mini-3 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  No annual fee.
                                </div>
                              </div>
                              <div className="w-[233.7px] flex flex-col items-start justify-start">
                                <img
                                  className="self-stretch relative max-w-full overflow-hidden h-[137.6px] shrink-0 object-cover max-h-[143.42539978027344px]"
                                  alt=""
                                  src="/assetsimagessitehpassetsmastheadsconsumercardsen4card5779014-travel-3webp@2x.png"
                                />
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[73px] pl-[73.2px] box-border text-mini-1 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  Travel Rewards
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start pt-[1.4px] px-[26.8px] pb-0 box-border text-[12.9px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <div className="flex flex-col items-center justify-start py-0 pr-[0.2px] pl-[0.4px] gap-[3.4px]">
                                  <a
                                    className="relative leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >
                                    Unlimited 1.5 points for every $1
                                  </a>
                                  <a
                                    className="relative text-smi-4 leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >{`spent on all purchases >`}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch w-[249.2px] relative text-[64.9px]">
                            <div className="absolute top-[-20px] left-[0px] flex flex-col items-center justify-start gap-[9px]">
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[77.5px] pl-[77.7px] box-border">
                                <div className="relative leading-[70px] inline-block max-w-[249.16000366210938px]">
                                  0%
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[77px] pl-[77.2px] box-border text-[13.7px]">
                                <div className="relative leading-[14px] inline-block max-w-[249.16000366210938px]">
                                  intro APR offer
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[76px] pl-[76.2px] box-border text-mini-3 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  No annual fee.
                                </div>
                              </div>
                              <div className="w-[224.2px] flex flex-col items-start justify-start">
                                <img
                                  className="self-stretch relative max-w-full overflow-hidden h-[132px] shrink-0 object-cover max-h-[132px]"
                                  alt=""
                                  src="/assetsimagessitehpassetsmastheadsconsumercardsen4card5779014-nonrewards-4webp@2x.png"
                                />
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start py-0 pr-[69px] pl-[69.2px] box-border text-mini-1 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <div className="relative leading-[20px] inline-block max-w-[249.16000366210938px]">
                                  BankAmericard®
                                </div>
                              </div>
                              <div className="w-[249.2px] flex flex-col items-center justify-start pt-[1.4px] pb-px pr-[61px] pl-[61.2px] box-border text-[12.8px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <div className="flex flex-col items-center justify-start gap-[2.4px]">
                                  <a
                                    className="relative leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >
                                    Intro APR offer
                                  </a>
                                  <a
                                    className="relative text-smi-7 leading-[18px] text-[inherit] [text-decoration:none]"
                                    href="https://secure.bankofamerica.com/apply-now-services/credit-cards/initialize-icai"
                                    target="_blank"
                                  >{`for 18 billing cycles >`}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-5xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson">
              <div className="w-[1440px] flex flex-col items-start justify-start max-w-[1440px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5">
                  <div className="self-stretch flex flex-col items-start justify-start pt-[4.8px] px-0 pb-0 border-t-[4.8px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood">
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start relative">
                      <div className="self-stretch relative bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete h-[636.6px] z-[0]">
                        <div className="absolute w-[calc(100%_-_720px)] top-[0px] right-[720px] left-[0px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border min-h-[325px] text-[15px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                          <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete overflow-hidden flex flex-col items-start justify-start min-h-[325px]">
                            <div className="self-stretch flex flex-col items-start justify-start relative">
                              <div className="w-full relative h-[325px] overflow-hidden shrink-0 max-w-[717px] z-[0]">
                                <img
                                  className="absolute right-[0px] bottom-[0px] w-[722px] h-[352px] overflow-hidden object-cover"
                                  alt=""
                                  src="/assetsimagessitehpassetssuperhighlightsgraycurvecp-shl-bamd-5-722-4768121-ewebp@2x.png"
                                />
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                                  <div className="absolute w-[41%] right-[1.02%] bottom-[55.5px] left-[57.98%] h-[292px] overflow-hidden flex flex-col items-start justify-start">
                                    <div className="w-[294px] h-[292px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[74.9px] px-0 box-border">
                                      <img
                                        className="w-[294px] relative h-[142.3px] overflow-hidden shrink-0"
                                        alt=""
                                        src="/assetsimagessitehpassetssuperhighlightsconsumerotherencd-shl-200-offer-5846581-esvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[314px] !m-[0] absolute top-[41px] left-[91px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-col items-start justify-start pt-4 pb-[25px] pr-2 pl-2.5 box-border gap-[14.4px] min-w-[243px] max-w-[314px] z-[1]">
                                <div className="self-stretch flex flex-col items-start justify-start pt-[3.4px] pb-[0.4px] pr-[73px] pl-0">
                                  <a
                                    className="relative leading-[24px] text-[inherit] inline-block [text-decoration:none] max-w-[296px]"
                                    href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                    target="_blank"
                                  >
                                    NEW CUSTOMER OFFER
                                  </a>
                                  <a
                                    className="relative text-5xl leading-[24px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson inline-block [text-decoration:none] max-w-[296px] mt-[-0.6px]"
                                    href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                    target="_blank"
                                  >
                                    Open a checking account
                                  </a>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-6 pl-0 text-mini-4">
                                  <a
                                    className="relative leading-[20px] text-[inherit] inline-block [text-decoration:none] max-w-[296px]"
                                    href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                    target="_blank"
                                  >
                                    <p className="m-0">
                                      <b className="font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
                                        Earn a $200 cash offer
                                      </b>
                                      <span> when you open a new</span>
                                    </p>
                                    <p className="m-0">
                                      personal checking account and make
                                      qualifying
                                    </p>
                                    <p className="m-0">direct deposits.</p>
                                  </a>
                                </div>
                                <div className="self-stretch relative h-[24.8px] text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                  <a
                                    className="absolute top-[3.8px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
                                    href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                    target="_blank"
                                  >
                                    See offer details
                                  </a>
                                  <div className="absolute top-[5px] left-[122.3px] flex flex-row items-start justify-start">
                                    <div className="w-[11.9px] h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.9px] px-0 box-border">
                                      <img
                                        className="w-[11.9px] relative h-[16.2px] overflow-hidden shrink-0"
                                        alt=""
                                        src="/assetsimagessitehomepageiconsarrow-right-bluecsxbd9e506csvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-[calc(100%_-_720px)] top-[0px] right-[0px] left-[720px] flex flex-col items-start justify-start py-0 pr-0 pl-0.5 box-border min-h-[325px]">
                          <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete overflow-hidden flex flex-col items-start justify-start min-h-[325px]">
                            <div className="self-stretch flex flex-col items-start justify-start relative">
                              <img
                                className="w-full relative max-w-[718px] overflow-hidden h-[325px] shrink-0 object-cover z-[0]"
                                alt=""
                                src="/divimageholder@2x.png"
                              />
                              <div className="w-[314px] !m-[0] absolute top-[41px] left-[91px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-col items-start justify-start pt-[15.6px] pb-[22px] pr-[23px] pl-[25px] box-border gap-[14.8px] min-w-[243px] max-w-[314px] z-[1]">
                                <div className="w-full flex flex-col items-start justify-start py-0 pr-[55px] pl-0 box-border max-w-[250px]">
                                  <div className="relative leading-[24px] inline-block max-w-[250px]">
                                    <p className="m-0">Make the most of your</p>
                                    <p className="m-0">financial journey</p>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[46px] pl-0 text-mini-4 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <div className="relative leading-[20px] inline-block max-w-[266px]">
                                    <p className="m-0">
                                      Unlock new opportunities with customized
                                    </p>
                                    <p className="m-0">
                                      guidance and easy-to-use digital tools.
                                    </p>
                                  </div>
                                </div>
                                <div className="self-stretch relative h-[24.8px] text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                  <a
                                    className="absolute top-[3.8px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
                                    href="https://promotions.bankofamerica.com/consumer/financialwellness/homepage/"
                                    target="_blank"
                                  >
                                    Explore resources
                                  </a>
                                  <div className="absolute top-[5px] left-[129.4px] flex flex-row items-start justify-start">
                                    <div className="w-[11.9px] h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.9px] px-0 box-border">
                                      <img
                                        className="w-[11.9px] relative h-[16.2px] overflow-hidden shrink-0"
                                        alt=""
                                        src="/assetsimagessitehomepageiconsarrow-right-bluecsxbd9e506csvg.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[calc(50%_+_6.7px)] left-[calc(50%_-_633.6px)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete flex flex-col items-start justify-start pt-2.5 px-0 pb-[19.6px]">
                          <div className="self-stretch flex flex-col items-start justify-start z-[0]">
                            <div className="h-[65px] flex flex-col items-start justify-start pt-0 pb-2.5 pr-[226.8px] pl-[35px] box-border">
                              <div className="overflow-hidden flex flex-row items-start justify-start max-w-[316.79998779296875px]">
                                <div className="w-[55px] h-[55px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-[55px] relative h-[55px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehpassetshighlightsconsumerotherenericaab-erica-hl-arptkml8-iconsvg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[25px] pl-[35px] gap-[14.8px] mt-[-0.4px]">
                              <div className="flex flex-col items-start justify-start py-0 pr-[68.8px] pl-0">
                                <a
                                  className="relative leading-[24px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking/erica/"
                                  target="_blank"
                                >
                                  <p className="m-0">Erica® includes more</p>
                                  <p className="m-0">ways to help</p>
                                </a>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-[52.8px] pl-0 text-mini-4 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking/erica/"
                                  target="_blank"
                                >
                                  <p className="m-0">
                                    Now your virtual financial assistant can
                                  </p>
                                  <p className="m-0">
                                    connect you to a live chat specialist.
                                  </p>
                                </a>
                              </div>
                              <div className="self-stretch relative h-[24.8px] text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <a
                                  className="absolute top-[3.8px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking/erica/"
                                  target="_blank"
                                >
                                  See more from Erica
                                </a>
                                <div className="absolute top-[5px] left-[149.6px] flex flex-row items-start justify-start">
                                  <div className="w-[11.9px] h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.9px] px-0 box-border">
                                    <img
                                      className="w-[11.9px] relative h-[16.2px] overflow-hidden shrink-0"
                                      alt=""
                                      src="/assetsimagessitehomepageiconsarrow-right-bluecsxbd9e506csvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-px absolute !m-[0] top-[10px] left-[315.8px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-alto1 h-[216.6px] z-[1]" />
                        </div>
                        <div className="absolute top-[calc(50%_+_6.7px)] left-[calc(50%_-_316.8px)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                          <div className="self-stretch flex flex-col items-start justify-start z-[0]">
                            <div className="h-[65px] flex flex-col items-start justify-start pt-0 pb-2.5 pr-[226.8px] pl-[35px] box-border">
                              <div className="overflow-hidden flex flex-row items-start justify-start max-w-[316.79998779296875px]">
                                <div className="w-[55px] h-[55px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-[55px] relative h-[55px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehpassetshighlightsconsumerotherenbofa-icon-rewards2-280rgbsvg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[25px] pl-[35px] gap-[14.8px] mt-[-0.4px]">
                              <div className="flex flex-col items-start justify-start py-0 pr-[129.8px] pl-0">
                                <a
                                  className="relative leading-[24px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                  target="_blank"
                                >
                                  <p className="m-0">$200 checking</p>
                                  <p className="m-0">cash offer</p>
                                </a>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-[22.8px] pl-0 text-mini-4 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                  target="_blank"
                                >
                                  <p className="m-0">
                                    <b className="font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
                                      Earn a $200
                                    </b>
                                    <span> bonus when you open a new</span>
                                  </p>
                                  <p className="m-0">
                                    personal checking account and make
                                  </p>
                                  <p className="m-0">
                                    qualifying direct deposits.
                                  </p>
                                </a>
                              </div>
                              <div className="self-stretch relative h-[24.8px] text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <a
                                  className="absolute top-[3.8px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/offers/chooseyourchecking200/"
                                  target="_blank"
                                >
                                  See offer details
                                </a>
                                <div className="absolute top-[5px] left-[122.3px] flex flex-row items-start justify-start">
                                  <div className="w-[11.9px] h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.9px] px-0 box-border">
                                    <img
                                      className="w-[11.9px] relative h-[16.2px] overflow-hidden shrink-0"
                                      alt=""
                                      src="/assetsimagessitehomepageiconsarrow-right-bluecsxbd9e506csvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-px absolute !m-[0] top-[10px] left-[315.8px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-alto1 h-[216.6px] z-[1]" />
                        </div>
                        <div className="absolute top-[calc(50%_+_6.7px)] left-[calc(50%_-_0px)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete flex flex-col items-start justify-start pt-2.5 px-0 pb-6">
                          <div className="self-stretch flex flex-col items-start justify-start z-[0]">
                            <div className="h-[65px] flex flex-col items-start justify-start pt-0 pb-2.5 pr-[232.4px] pl-[35px] box-border">
                              <div className="overflow-hidden flex flex-row items-start justify-start max-w-[316.79998779296875px]">
                                <div className="w-[49.4px] h-[55px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-[49.4px] relative h-[55px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehpassetshighlightsconsumermobilebankingbofa-icon-reminder1svg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[25px] pl-[35px] gap-[14.4px]">
                              <div className="flex flex-col items-start justify-start py-0 pr-[71.8px] pl-0">
                                <a
                                  className="relative leading-[24px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking/"
                                  target="_blank"
                                >
                                  Custom mobile alerts
                                </a>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-[53.8px] pl-0 text-mini-4 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking/"
                                  target="_blank"
                                >
                                  <p className="m-0">
                                    With our Mobile Banking app, prioritize
                                  </p>
                                  <p className="m-0">
                                    what you see based on what matters
                                  </p>
                                  <p className="m-0">most to you.</p>
                                </a>
                              </div>
                              <div className="self-stretch relative h-[24.8px] text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <a
                                  className="absolute top-[3.8px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking/"
                                  target="_blank"
                                >
                                  Get the app
                                </a>
                                <div className="absolute top-[5px] left-[89px] flex flex-row items-start justify-start">
                                  <div className="w-[11.9px] h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.9px] px-0 box-border">
                                    <img
                                      className="w-[11.9px] relative h-[16.2px] overflow-hidden shrink-0"
                                      alt=""
                                      src="/assetsimagessitehomepageiconsarrow-right-bluecsxbd9e506csvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-px absolute !m-[0] top-[10px] left-[315.8px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-alto1 h-[216.6px] z-[1]" />
                        </div>
                        <div className="absolute top-[calc(50%_+_6.7px)] left-[calc(50%_+_316.8px)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-midnight-blue">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="h-[65px] flex flex-col items-start justify-start pt-0 pb-2.5 pr-[89.3px] pl-[35px] box-border">
                              <div className="overflow-hidden flex flex-row items-start justify-start max-w-[316.79998779296875px]">
                                <div className="w-[192.5px] h-[55px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-[192.5px] relative h-[55px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehpassetshighlightsconsumermerrillenmerrill-lo1-rgbsvg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 pr-[25px] pl-[35px] gap-[14.8px] mt-[-0.4px]">
                              <div className="flex flex-col items-start justify-start py-0 pr-[47.8px] pl-0">
                                <a
                                  className="relative leading-[24px] text-[inherit] [text-decoration:none]"
                                  href="https://www.merrill.com/"
                                  target="_blank"
                                >
                                  <p className="m-0">
                                    Investment solutions for
                                  </p>
                                  <p className="m-0">you</p>
                                </a>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-[37.8px] pl-0 text-mini-4 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                <a
                                  className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                                  href="https://www.merrill.com/"
                                  target="_blank"
                                >
                                  <p className="m-0">
                                    We offer a range of solutions to help you
                                  </p>
                                  <p className="m-0">
                                    pursue your goals. Find the approach that
                                  </p>
                                  <p className="m-0">fits your needs.</p>
                                </a>
                              </div>
                              <div className="self-stretch relative h-[24.8px] text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <a
                                  className="absolute top-[3.8px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.merrill.com/"
                                  target="_blank"
                                >
                                  Get started
                                </a>
                                <div className="absolute top-[5px] left-[86.3px] flex flex-row items-start justify-start">
                                  <div className="w-[11.9px] h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[3.9px] px-0 box-border">
                                    <img
                                      className="w-[11.9px] relative h-[16.2px] overflow-hidden shrink-0"
                                      alt=""
                                      src="/assetsimagessitehomepageiconsarrow-right-bluecsxbd9e506csvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="w-[1441px] absolute !m-[0] top-[288px] right-[-1px] h-[38px] overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/svg3.svg"
                      />
                      <img
                        className="w-[1441px] absolute !m-[0] right-[-1px] bottom-[0px] h-[38px] overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/svg4.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative h-[704.8px] text-center text-29xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-scorpion">
                    <div className="absolute top-[40px] left-[calc(50%_-_648px)] w-[1296px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[8px] max-w-[1296px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft">
                      <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[269.4px] pl-[269.6px]">
                        <div className="relative leading-[52px] inline-block max-w-[1256px]">
                          Financial guidance for every stage of life.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[393.4px] pl-[393.6px] text-lg">
                        <div className="relative leading-[28.8px] inline-block max-w-[1256px] max-h-[28.799999237060547px]">
                          Better Money Habits® is here to help with your
                          decisions along the way.
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full top-[166.8px] right-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start min-h-[100px] text-left text-mid">
                      <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-col items-center justify-start py-0 px-[72px] z-[0]">
                        <div className="w-[1296px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-row items-start justify-center max-w-[1296px]">
                          <div className="self-stretch flex-1 flex flex-row items-end justify-center pt-[213px] pb-[50px] pr-[11.4px] pl-[11.3px] bg-[url('/item@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="w-[301.3px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood flex flex-col items-start justify-start py-[15px] pr-[15px] pl-[55px] box-border relative min-h-[100px]">
                              <div className="self-stretch flex flex-col items-start justify-start pt-[2.4px] pb-px pr-[48.3px] pl-0 z-[0]">
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/debt/paying-off-credit-card-debt"
                                  target="_blank"
                                >
                                  Pay off credit card debt faster
                                </a>
                              </div>
                              <div className="w-10 !m-[0] absolute top-[10px] left-[15px] h-10 overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1]">
                                <div className="w-10 h-10 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-10 relative h-10 overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehomepageiconsent-edu-bac-5449395-icon-gc-acsxc8677456svg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-end justify-center pt-[213px] pb-[50px] pr-[11.4px] pl-[11.3px] bg-[url('/item1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="w-[301.3px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood flex flex-col items-start justify-start pt-[15px] pb-[40.2px] pr-[15px] pl-[55px] box-border relative min-h-[100px]">
                              <div className="self-stretch flex flex-col items-start justify-start pt-[2.4px] pb-px pr-[29.3px] pl-0 gap-[3.4px] z-[0]">
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/emergency-fund-tips"
                                  target="_blank"
                                >
                                  6 simple steps to jump-start your
                                </a>
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/emergency-fund-tips"
                                  target="_blank"
                                >
                                  emergency fund
                                </a>
                              </div>
                              <div className="w-10 !m-[0] absolute top-[10px] left-[15px] h-10 overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1]">
                                <div className="w-10 h-10 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-10 relative h-10 overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehomepageiconsent-edu-bac-5806145-icon-gc-bcsxfe0d8129svg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-end justify-center pt-[213px] pb-[50px] pr-[11.4px] pl-[11.3px] bg-[url('/item2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="w-[301.3px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood flex flex-col items-start justify-start pt-[15px] pb-[40.2px] pr-[15px] pl-[55px] box-border relative min-h-[100px]">
                              <div className="self-stretch flex flex-col items-start justify-start pt-[2.4px] pb-px pr-[42.3px] pl-0 gap-[3.4px] z-[0]">
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/personal-banking/what-is-a-cd-investment"
                                  target="_blank"
                                >
                                  What is a CD and how do they
                                </a>
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/personal-banking/what-is-a-cd-investment"
                                  target="_blank"
                                >
                                  work?
                                </a>
                              </div>
                              <div className="w-10 !m-[0] absolute top-[10px] left-[15px] h-10 overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1]">
                                <div className="w-10 h-10 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-10 relative h-10 overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehomepageiconsent-edu-bac-5806145-icon-gc-ccsx6cb454c5svg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-end justify-center pt-[213px] pb-[50px] pr-[11.4px] pl-[11.3px] bg-[url('/item3@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="w-[301.3px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood flex flex-col items-start justify-start pt-[15px] pb-[40.2px] pr-[15px] pl-[55px] box-border relative min-h-[100px]">
                              <div className="self-stretch flex flex-col items-start justify-start pt-[2.4px] pb-px pr-[67.3px] pl-0 gap-[3.4px] z-[0]">
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/home-ownership/buying-home-comfortably-affordably"
                                  target="_blank"
                                >
                                  Buying a home within your
                                </a>
                                <a
                                  className="relative leading-[19px] text-[inherit] inline-block [text-decoration:none] max-w-[231.30999755859375px]"
                                  href="https://bettermoneyhabits.bankofamerica.com/en/home-ownership/buying-home-comfortably-affordably"
                                  target="_blank"
                                >
                                  comfort zone
                                </a>
                              </div>
                              <div className="w-10 !m-[0] absolute top-[10px] left-[15px] h-10 overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1]">
                                <div className="w-10 h-10 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                  <img
                                    className="w-10 relative h-10 overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagessitehomepageiconsent-edu-bac-4953168-icon-gc-acsx60f66bcasvg.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="w-[1441px] absolute !m-[0] top-[0px] right-[-1px] h-[38px] overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/svg5.svg"
                      />
                      <img
                        className="w-[1441px] absolute !m-[0] right-[-1px] bottom-[0px] h-[38px] overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/svg6.svg"
                      />
                    </div>
                    <div className="absolute top-[529.8px] left-[calc(50%_-_648px)] w-[1296px] flex flex-col items-start justify-start py-0 px-[222.7px] box-border max-w-[1296px] text-lg">
                      <div className="self-stretch flex flex-col items-center justify-start pt-5 px-2.5 pb-[75px] gap-[20px]">
                        <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[235.7px] pl-[235.9px]">
                          <div className="relative leading-[20px] inline-block max-w-[830.6599731445312px]">
                            Explore more topics and build your financial
                            know‑how.
                          </div>
                        </div>
                        <div className="bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue flex flex-row items-center justify-center py-2.5 pr-9 pl-[36.2px] text-xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                          <a
                            className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                            href="https://bettermoneyhabits.bankofamerica.com/en"
                            target="_blank"
                          >
                            Visit Better Money Habits®
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-29xl">
              <div className="w-[1440px] flex flex-col items-start justify-start max-w-[1440px]">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="w-[1296px] flex flex-col items-start justify-start pt-[3.2px] px-5 pb-5 box-border max-w-[1296px] text-center">
                    <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[395.4px] pl-[395.6px]">
                      <div className="relative leading-[52px] inline-block max-w-[1256px]">
                        Your news and information
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative h-[370px] overflow-hidden shrink-0 text-10xl-7 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft1">
                    <div className="absolute w-full top-[20px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-0 pl-36 box-border">
                      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[153.6px] pl-[842.4px] z-[0]">
                        <img
                          className="w-[300px] relative h-[600px] overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/assetsimagessitehomepagenewslifeservicesyni-sec-phone-4657392-ecsx8c7d2691webp@2x.png"
                        />
                      </div>
                      <div className="w-[90%] !m-[0] absolute h-[37.58%] top-[8.1%] right-[4.97%] bottom-[54.32%] left-[5.03%] flex flex-col items-start justify-start py-0 pr-[592.7px] pl-[116.3px] box-border max-w-[1296px] z-[1]">
                        <div className="self-stretch relative h-[225.5px]">
                          <div className="absolute w-[calc(100%_-_20px)] top-[0px] right-[10px] left-[10px] flex flex-col items-start justify-start py-0 pr-[129px] pl-0 box-border">
                            <b className="relative leading-[40.5px] inline-block max-w-[566.9500122070312px] max-h-[40.5px]">
                              Level up your account security
                            </b>
                          </div>
                          <div className="absolute w-[calc(100%_-_82px)] top-[59.9px] right-[72px] left-[10px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border max-w-[505px] text-2xl-4 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-soya-bean font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                            <div className="relative leading-[34.99px] inline-block max-w-[505px]">
                              <p className="m-0">
                                Watch your security meter rise as you take
                                action
                              </p>
                              <p className="m-0">
                                against fraud. See it in the Security Center in
                              </p>
                              <p className="m-0">Mobile and Online Banking.</p>
                            </div>
                          </div>
                          <div className="absolute top-[calc(50%_+_72.75px)] left-[10px] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-crimson flex flex-row items-center justify-start py-2.5 pr-[26.9px] pl-[27.1px] text-center text-xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                            <a
                              className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                              href="https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go"
                              target="_blank"
                            >
                              Check your level
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[0px] right-[-1px] w-[1441px] h-[38px] overflow-hidden"
                      alt=""
                      src="/svg5.svg"
                    />
                    <img
                      className="absolute right-[-1px] bottom-[0px] w-[1441px] h-[38px] overflow-hidden"
                      alt=""
                      src="/svg7.svg"
                    />
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-[72px] box-border bg-[url('/divimagecontainerblue@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[320px] text-13xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                    <div className="w-[1296px] flex flex-col items-start justify-start pt-5 pb-0 pr-[869.7px] pl-[126.3px] box-border max-w-[1296px]">
                      <div className="self-stretch flex flex-col items-start justify-start pt-10 pb-5 pr-[75px] pl-0">
                        <div className="relative leading-[40px] inline-block max-w-[300px]">
                          <p className="m-0">Secure, convenient</p>
                          <p className="m-0">banking with our</p>
                          <p className="m-0">Mobile app</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[1296px] flex flex-col items-start justify-start py-0 pr-5 pl-[126.3px] box-border max-w-[1296px] text-center text-lg">
                      <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[989.9px] pl-0">
                        <div className="bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-madison flex flex-row items-center justify-start py-[10.8px] pr-[27.3px] pl-[27.5px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                          <a
                            className="relative leading-[18px] text-[inherit] [text-decoration:none]"
                            href="https://promotions.bankofamerica.com/digitalbanking/mobilebanking"
                            target="_blank"
                          >
                            Explore our app
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-spring-wood flex flex-col items-center justify-start text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
              <div className="w-[1440px] flex flex-col items-start justify-start max-w-[1440px]">
                <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-concrete flex flex-col items-start justify-start pt-[34px] px-0 pb-0">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[72px] pb-[15px]">
                      <div className="w-[1296px] flex flex-col items-start justify-start pt-0 px-5 pb-2.5 box-border max-w-[1296px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[1042px] pl-0">
                            <a
                              className="relative leading-[22.4px] text-[inherit] inline-block [text-decoration:none] max-w-[1256px] max-h-[22.399999618530273px]"
                              href="https://www.bankofamerica.com/online-banking/service-agreement.go"
                              target="_blank"
                            >
                              Online Banking Service Agreement
                            </a>
                          </div>
                          <div className="self-stretch relative h-[336px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-scorpion">
                            <div className="absolute top-[-0.6px] left-[0px] leading-[22.4px]">
                              <p className="m-0">
                                Investing in securities involves risks, and
                                there is always the potential of losing money
                                when you invest in securities. You should review
                                any planned financial transactions that may have
                                tax or legal
                              </p>
                              <p className="m-0">
                                implications with your personal tax or legal
                                advisor.
                              </p>
                            </div>
                            <div className="absolute top-[66.6px] left-[0px] leading-[22.4px]">
                              <p className="m-0 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-science-blue">
                                <span className="text-www-bankofamerica-com-1519199951171875x6432000122070312-default-scorpion">{`Securities products are provided by Merrill Lynch, Pierce, Fenner & Smith Incorporated (also referred to as "MLPF&S", or "Merrill"), a registered broker-dealer, registered investment adviser, `}</span>
                                <a
                                  className="text-[inherit]"
                                  href="https://www.sipc.org/"
                                  target="_blank"
                                >
                                  <span>Member SIPC</span>
                                </a>
                                <span className="text-www-bankofamerica-com-1519199951171875x6432000122070312-default-scorpion">
                                  ,
                                </span>
                              </p>
                              <p className="m-0">{`and a wholly-owned subsidiary of Bank of America Corporation. MLPF&S makes available certain investment products sponsored, managed, distributed or provided by companies that are affiliates of`}</p>
                              <p className="m-0">
                                Bank of America Corporation.
                              </p>
                            </div>
                            <div className="absolute top-[156.2px] left-[0px] leading-[22.4px]">
                              <p className="m-0">
                                Bank of America Private Bank is a division of
                                Bank of America, N.A., Member FDIC and a wholly
                                owned subsidiary of Bank of America Corporation.
                                Trust and fiduciary services are provided by
                                Bank of
                              </p>
                              <p className="m-0">
                                America, N.A. and U.S. Trust Company of
                                Delaware. Both are indirect subsidiaries of Bank
                                of America Corporation.
                              </p>
                            </div>
                            <div className="absolute top-[223.4px] left-[0px] leading-[22.4px]">
                              <p className="m-0">
                                Insurance Products are offered through Merrill
                                Lynch Life Agency Inc. (MLLA) and/or Banc of
                                America Insurance Services, Inc., both of which
                                are licensed insurance agencies and wholly-owned
                              </p>
                              <p className="m-0">
                                subsidiaries of Bank of America Corporation.
                              </p>
                            </div>
                            <div className="absolute top-[290.6px] left-[0px] leading-[22.4px]">
                              <p className="m-0">
                                Banking, credit card, automobile loans, mortgage
                                and home equity products are provided by Bank of
                                America, N.A. and affiliated banks, Members FDIC
                                and wholly owned subsidiaries of Bank of America
                              </p>
                              <p className="m-0">
                                Corporation. Credit and collateral are subject
                                to approval. Terms and conditions apply. This is
                                not a commitment to lend. Programs, rates, terms
                                and conditions are subject to change without
                                notice.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[1296px] flex flex-col items-start justify-start pt-3 px-5 pb-8 box-border max-w-[1296px] text-www-bankofamerica-com-1519199951171875x6432000122070312-default-scorpion">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[1033px] pl-0">
                            <div className="relative leading-[22.4px] inline-block max-w-[1256px] max-h-[22.399999618530273px]">
                              Investment and insurance products:
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center p-[0.4px] text-center text-xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-alto">
                            <div className="flex flex-col items-start justify-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="flex flex-col items-start justify-center pt-[8.8px] pb-2.5 pr-[47.2px] pl-[47.4px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <b className="relative leading-[20px]">
                                    <p className="m-0">Are Not FDIC</p>
                                    <p className="m-0">Insured</p>
                                  </b>
                                </div>
                                <div className="flex flex-col items-start justify-center pt-[18.8px] pb-5 pr-[132px] pl-[132.4px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <b className="relative leading-[20px]">
                                    Are Not Bank Guaranteed
                                  </b>
                                </div>
                                <div className="flex flex-col items-start justify-center pt-[18.8px] pb-5 pr-[188.4px] pl-[188.7px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <b className="relative leading-[20px]">
                                    May Lose Value
                                  </b>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-start">
                                <div className="flex flex-col items-start justify-center pt-[18.8px] pb-5 pr-[28.2px] pl-[28.5px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <b className="relative leading-[20px]">
                                    Are Not Deposits
                                  </b>
                                </div>
                                <div className="flex flex-col items-start justify-center pt-[8.8px] pb-2.5 pr-[43px] pl-[43.5px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <b className="relative leading-[20px]">
                                    <p className="m-0">
                                      Are Not Insured by Any Federal Government
                                    </p>
                                    <p className="m-0">Agency</p>
                                  </b>
                                </div>
                                <div className="flex flex-col items-start justify-center pt-[8.8px] pb-2.5 pr-[42.3px] pl-[42.8px] border-[1px] border-solid border-www-bankofamerica-com-1519199951171875x6432000122070312-default-black">
                                  <b className="relative leading-[20px]">
                                    <p className="m-0">
                                      Are Not a Condition to Any Banking Service
                                      or
                                    </p>
                                    <p className="m-0">Activity</p>
                                  </b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-midnight-blue flex flex-col items-center justify-start pt-0 px-[72px] pb-10 text-center text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                      <div className="w-[1296px] flex flex-col items-start justify-start py-0 px-5 box-border max-w-[1296px]">
                        <div className="self-stretch relative h-[263.4px]">
                          <div className="absolute w-full top-[40px] right-[0px] left-[0px] h-[46.8px]">
                            <div className="absolute top-[1.6px] left-[calc(50%_-_577.8px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://locators.bankofamerica.com/"
                                  target="_blank"
                                >
                                  Locations
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.6px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_-_487.8px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/contactus/contactus.go"
                                  target="_blank"
                                >
                                  Contact Us
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.3px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_-_390.4px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/help/overview.go"
                                  target="_blank"
                                >{`Help & Support`}</a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.3px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_-_268.1px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <div className="relative leading-[20px]">
                                  Browse with Specialist
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.9px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_-_99.3px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/accessiblebanking/overview.go"
                                  target="_blank"
                                >
                                  Accessible Banking
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.7px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_+_50.7px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/security-center/privacy-overview/"
                                  target="_blank"
                                >
                                  Privacy
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.8px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_+_124.6px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/security-center/overview/"
                                  target="_blank"
                                >
                                  Security
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.9px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[1.6px] left-[calc(50%_+_203.4px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/online-banking/service-agreement.go"
                                  target="_blank"
                                >
                                  Online Banking Service Agreement
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.3px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[calc(50%_+_445.8px)] flex flex-row items-start justify-start">
                              <div className="w-[132px] relative box-border h-[22.8px] border-b-[0.8px] border-dashed border-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
                                <div className="absolute top-[-0.4px] left-[calc(50%_-_66.3px)] leading-[20px]">
                                  Advertising Practices
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[26.4px] left-[calc(50%_-_387.4px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <div className="relative leading-[20px]">
                                  CA Opt-Out Preference Signals Honored
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.5px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[26.4px] left-[calc(50%_-_112.2px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://www.bankofamerica.com/sitemap/personal.go"
                                  target="_blank"
                                >
                                  Site Map
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.1px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[26.4px] left-[calc(50%_-_28.7px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="http://careers.bankofamerica.com/"
                                  target="_blank"
                                >
                                  Careers
                                </a>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.9px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[26.4px] left-[calc(50%_+_48.2px)] h-[16.8px] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <div className="relative leading-[20px]">
                                  Share Your Feedback
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start ml-[-0.8px] text-11xl text-www-bankofamerica-com-1519199951171875x6432000122070312-default-swirl font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
                                <div className="w-[28.7px] relative h-[16.8px] overflow-hidden shrink-0">
                                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                    <div className="absolute top-[0%] left-[-400%]">
                                      |
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[24.8px] left-[calc(50%_+_208px)] flex flex-row items-start justify-start">
                              <div className="flex flex-row items-start justify-center">
                                <a
                                  className="relative leading-[20px] text-[inherit] [text-decoration:none]"
                                  href="https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go"
                                  target="_blank"
                                >
                                  View Full Online Banking Site
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-full top-[106.8px] right-[0px] left-[0px] flex flex-col items-center justify-start py-0 px-[496.5px] box-border text-base">
                            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[55px]">
                              <div className="w-[263px] relative h-[22.4px]">
                                <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start py-0 pr-[69.3px] pl-[69.7px]">
                                  <b className="relative leading-[22.4px] inline-block max-h-[22.399999618530273px]">
                                    Connect with us
                                  </b>
                                </div>
                                <div className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_233px)] top-[32.4px] right-[233px] bottom-[-40px] left-[0px] flex flex-col items-center justify-start">
                                  <img
                                    className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/svg8.svg"
                                  />
                                </div>
                                <div className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_233px)] top-[32.4px] right-[188px] bottom-[-40px] left-[45px] flex flex-col items-center justify-start">
                                  <img
                                    className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/svg9.svg"
                                  />
                                </div>
                                <div className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_232px)] top-[32.4px] right-[142px] bottom-[-40px] left-[90px] flex flex-col items-center justify-start py-0 px-[0.5px] box-border">
                                  <img
                                    className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/svg10.svg"
                                  />
                                </div>
                                <div className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_233px)] top-[32.4px] right-[97px] bottom-[-40px] left-[136px] flex flex-col items-center justify-start">
                                  <img
                                    className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/svg11.svg"
                                  />
                                </div>
                                <div className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_226px)] top-[32.4px] right-[45px] bottom-[-40px] left-[181px] flex flex-col items-center justify-start py-0 pr-[0.1px] pl-0 box-border">
                                  <img
                                    className="w-[36.9px] relative h-[30px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/svg12.svg"
                                  />
                                </div>
                                <div className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_233px)] top-[32.4px] right-[0px] bottom-[-40px] left-[233px] flex flex-col items-center justify-start">
                                  <img
                                    className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/svg13.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-full top-[184.2px] right-[0px] left-[0px] flex flex-col items-start justify-start">
                            <div className="self-stretch relative h-[22.4px]">
                              <div className="absolute top-[0px] left-[calc(50%_-_194.1px)] leading-[22.4px]">
                                Bank of America, N.A. Member FDIC.
                              </div>
                              <div className="absolute top-[2.4px] left-[calc(50%_+_37.7px)] w-[156.1px] h-[16.8px]">
                                <div className="absolute top-[0px] left-[0px] w-[156.1px] h-[16.8px] overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-[3.6px] pr-0 pl-[141.1px] box-border">
                                  <img
                                    className="w-[15px] relative h-[11.2px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/assetsimagesgloballogosiconehlwhitecsx189e8f4csvg.svg"
                                  />
                                </div>
                                <a
                                  className="absolute top-[-3px] left-[calc(50%_-_78.35px)] [text-decoration:underline] leading-[22.4px] text-[inherit]"
                                  href="https://www.bankofamerica.com/help/equalhousing-popup/"
                                  target="_blank"
                                >
                                  Equal Housing Lender
                                </a>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[451.3px] pl-[451.7px]">
                              <div className="relative leading-[22.4px] inline-block max-w-[1256px] max-h-[22.399999618530273px]">
                                © 2023 Bank of America Corporation. All rights
                                reserved.
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-center justify-start pt-[11.4px] pb-0 pr-[515.8px] pl-[516.2px]">
                              <a
                                className="relative [text-decoration:underline] leading-[22.4px] text-[inherit] inline-block max-w-[1256px]"
                                href="https://patents.bankofamerica.com/"
                                target="_blank"
                              >
                                Patent: patents.bankofamerica.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EngagementContentContainer />
    </div>
  );
};

export default Index1;
