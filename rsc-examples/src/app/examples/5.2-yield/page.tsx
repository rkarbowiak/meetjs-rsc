import { generatorComponent } from "../../../components/generator-components";

export const dynamic = "force-dynamic";

const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

const Steps = generatorComponent(async function* () {
  let i = 0;
  yield (
    <div className="text-center">
      <progress value={i} max={3}></progress>
      <div> Step {++i}. Doing sth</div>
    </div>
  );
  await sleep(2000);
  yield (
    <div className="text-center">
      <progress value={i} max={3}></progress>
      <div> Step {++i}. Doing another stuff </div>
    </div>
  );
  await sleep(2000);
  yield (
    <div className="text-center">
      <progress value={i} max={3}></progress>
      <div> Step {++i}. Ahh there is more!</div>
    </div>
  );
  await sleep(2000);
  return (
    <div className="text-center">
      <progress value={i} max={3}></progress>
      <div> Step {++i}. Finally! Done</div>
    </div>
  );
});

export default function GeneratorPage() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl font-bold">Wait! Processing...</h1>
      <Steps />
    </div>
  );
}
