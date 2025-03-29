import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { Step } from '../page';
import SignInStore from '../store/sign-in';

const SignIn = () => {
  const { email, password, setStep, setEmail, setPassword } = SignInStore();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log({ email, password });
    if (email && password) setStep('verify-code');
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        label="ایمیل"
        variant="faded"
        value={email}
        onValueChange={(value) => setEmail(value)}
      />
      <Input
        label="رمز کاربری"
        variant="faded"
        value={password}
        onValueChange={(value) => setPassword(value)}
      />
      <Button type="submit" color="success">
        ورود کاربری
      </Button>
    </form>
  );
};

export default SignIn;
