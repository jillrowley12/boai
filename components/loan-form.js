import { useMemo } from "react";

const LoanForm = ({ propAlignSelf }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="self-stretch w-[341px] flex flex-col items-start justify-start gap-[20px] max-w-[3310px] text-left text-base text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-chathams-blue font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22"
      style={frameDiv1Style}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[37px]">
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <div className="flex flex-col items-start justify-start relative">
            <img
              className="w-[41.3px] relative h-6 overflow-hidden shrink-0 z-[0]"
              alt=""
              src="/slowlaptopicon-1.svg"
            />
            <img
              className="w-[17.3px] absolute !m-[0] top-[-6.7px] left-[25.3px] h-[17.3px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/28daysmonthicon-1.svg"
            />
          </div>
          <b className="relative leading-[18px]">
            <p className="m-0">{`Schedule an `}</p>
            <p className="m-0">apppointment</p>
          </b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame10.svg"
          />
          <b className="relative leading-[18px]">Find us</b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-3.5 gap-[11px] border-[1px] border-solid border-silver">
        <img className="w-10 relative h-[29px]" alt="" src="/frame-32.svg" />
        <b className="relative leading-[18px]">View your FICO Scores</b>
      </div>
      <div className="flex flex-col items-center justify-start relative text-lg text-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero">
        <img
          className="w-[338px] relative h-[318px] object-cover z-[0]"
          alt=""
          src="/firefly-a-5-years-old-white-boy-push-a-5-years-old-white-girl-car-inside-a-green-land-garden-87558-1@2x.png"
        />
        <div className="w-[159px] !m-[0] absolute top-[246px] left-[24px] bg-red-200 h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-2.5 box-border z-[1]">
          <b className="relative leading-[21px]">Apply Now</b>
        </div>
        <div className="!m-[0] absolute top-[0px] left-[0px] [background:linear-gradient(158.95deg,_#fff,_rgba(255,_255,_255,_0.47)_96.92%)] flex flex-row items-center justify-center p-2.5 z-[2] text-9xl text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-cape-cod">
          <b className="w-80 relative leading-[35px] flex items-center shrink-0">
            Come back and apply for a low-rate auto loan
          </b>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;
