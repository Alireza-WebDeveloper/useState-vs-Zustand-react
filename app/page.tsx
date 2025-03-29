'use client';

import SignIn from './components/sign-in';
import VerifyCode from './components/verify-code';
import SignInStore from './store/sign-in';

export type Step = 'sign-in' | 'verify-code' | 'successfully';

const Page = () => {
  const { step } = SignInStore();
  return (
    <div className="flex justify-center items-center h-screen">
      {step === 'sign-in' && <SignIn />}
      {step === 'verify-code' && <VerifyCode />}
      {step === 'successfully' && <p>ورود کاربری با موفقیت</p>}
    </div>
  );
};

export default Page;
