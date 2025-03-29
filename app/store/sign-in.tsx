import { create } from 'zustand';

export type Step = 'sign-in' | 'verify-code' | 'successfully';

interface SignInStoreState {
  email: string;
  setEmail(value: string): void;
  password: string;
  setPassword(value: string): void;
  code: string;
  setCode(value: string): void;
  step: Step;
  setStep(value: Step): void;
}

const SignInStore = create<SignInStoreState>((set) => ({
  email: '',
  setEmail: (value: string) => {
    set({ email: value });
  },
  password: '',
  setPassword: (value: string) => {
    set({ password: value });
  },
  code: '',
  setCode: (value: string) => {
    set({ code: value });
  },
  step: 'sign-in',
  setStep: (value: Step) => {
    set({ step: value });
  },
}));

export default SignInStore;
