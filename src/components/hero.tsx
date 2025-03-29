import { ContainerTextFlip } from "./ui/container-text-flip";

export default function Hero() {
  return (
    <div className="p-16 mt-36">
      <p className="text-4xl font-bold  ml-2">This is Sirat</p>
      <p className="text-4xl my-4 ml-2">Your firendly neighbourhood</p>
      <ContainerTextFlip className="" words={["Software Engineer"]} />
    </div>
  );
}
