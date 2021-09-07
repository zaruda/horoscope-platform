import { Step } from 'types/Step';

export default interface IStepProps {
  onNext(step: Step): void;
}
