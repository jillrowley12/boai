import Header from "../components/header";
import TransactionFilterContainer2 from "../components/transaction-filter-container2";
import LoanForm from "../components/loan-form";

const AccountDetails = () => {
  return (
    <div className="w-full relative [background:linear-gradient(184.1deg,_#fff,_#f1f1f1)] flex flex-col items-center justify-start pt-0 px-[159px] pb-[18.9px] box-border max-h-[1000000px] text-left text-250xl-5 text-www-bankofamerica-com-1519199951171875x6432000122070312-default-mine-shaft font-www-bankofamerica-com-1519199951171875x6432000122070312-default-inter-regular-30">
      <div className="flex flex-col items-center justify-start z-[0]">
        <Header
          customizedCashRewardsVisa="Adv Plus Banking - 5403"
          prop="$1,370,123.80"
          btn2JustifyContent="center"
          btn2JustifyContent1="center"
          shoppingCartIcon1JustifyContent="flex-end"
          searchJustifyContent="flex-end"
        />
        <div className="self-stretch shadow-[1px_3px_4px_rgba(0,_0,_0,_0.1)] bg-www-bankofamerica-com-1519199951171875x6432000122070312-default-nero flex flex-row items-center justify-between pt-[30px] px-0 pb-2.5">
          <TransactionFilterContainer2 />
          <LoanForm propAlignSelf="stretch" />
        </div>
      </div>
      <div className="w-[1705px] absolute !m-[0] top-[-299700px] left-[-299700px] leading-[450px] flex items-center h-[450px] shrink-0 max-w-[1704.97998046875px] z-[1]">
        BlankTestESs
      </div>
      <div className="w-[200px] !m-[0] absolute top-[0px] left-[-10000px] h-5 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 pb-[2.2px] pr-[47.3px] pl-[47.7px] box-border max-h-[1000000px] z-[2] text-center text-sm text-secure-bankofamerica-com-login-sign-in-signonv2screen-go-1519199951171875x6432000122070312-default-mariner font-www-bankofamerica-com-1519199951171875x6432000122070312-default-arial-narrow-22">
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

export default AccountDetails;
