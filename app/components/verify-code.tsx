import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { Step } from '../page';
import SignInStore from '../store/sign-in';

const SignIn = () => {
  const { code, email, password, setStep, setCode } = SignInStore();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ code, email, password });
    if (code) setStep('successfully');
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <Input
        label="کد"
        variant="faded"
        value={code}
        onValueChange={(value) => setCode(value)}
      />

      <Button type="submit" color="success">
        تایید کد
      </Button>
    </form>
  );
};

export default SignIn;
