import { installMethod, installState } from '../../store/tablistStore';
import { useStore } from '@nanostores/solid';
import { createSignal, onMount } from 'solid-js';

interface PackageTabsProps {
  npm?: Element;
  pnpm?: Element;
  yarn?: Element;
}

const tabClass =
  'hover:bg-pink-100 active:bg-pink-200 hover:text-black active:text-black px-5 py-2 transition-colors ease-in-out';

export function PackageTabs(props: PackageTabsProps) {
  const $chosenInstallMethod = useStore(installMethod);
  const [indicatorWidth, setIndicatorWidth] = createSignal(1);
  const [moveLeft, setMoveLeft] = createSignal(0);

  let buttonWidths = {
    npm: 1,
    pnpm: 1,
    yarn: 1,
  };

  const showMethod = (method: 'npm' | 'pnpm' | 'yarn') => {
    const newState = Object.assign({}, installState, { [method]: true });

    installMethod.set(newState);

    moveIndicator(method);
  };

  const moveIndicator = (method: 'npm' | 'pnpm' | 'yarn') => {
    if (method === 'npm') {
      setIndicatorWidth(buttonWidths.npm);
      setMoveLeft(0);
    }

    if (method === 'pnpm') {
      setIndicatorWidth(buttonWidths.pnpm);
      setMoveLeft(buttonWidths.npm);
    }

    if (method === 'yarn') {
      setIndicatorWidth(buttonWidths.yarn);
      setMoveLeft(buttonWidths.npm + buttonWidths.pnpm);
    }
  };

  onMount(async () => {
    showMethod('npm');
  });

  return (
    <div>
      <div class="flex w-full" role="tablist" style="border-bottom: 4px solid #b0ebcf">
        <button
          ref={(ref) => {
            buttonWidths.npm = ref.clientWidth;
          }}
          class={tabClass}
          classList={{ 'font-bold': $chosenInstallMethod().npm }}
          role="tab"
          onClick={() => showMethod('npm')}
        >
          npm
        </button>
        <button
          ref={(ref) => {
            buttonWidths.pnpm = ref.clientWidth;
          }}
          class={tabClass}
          classList={{ 'font-bold': $chosenInstallMethod().pnpm }}
          role="tab"
          onClick={() => showMethod('pnpm')}
        >
          pnpm
        </button>
        <button
          ref={(ref) => {
            buttonWidths.yarn = ref.clientWidth;
          }}
          class={tabClass}
          classList={{ 'font-bold': $chosenInstallMethod().yarn }}
          role="tab"
          onClick={() => showMethod('yarn')}
        >
          Yarn
        </button>
      </div>
      <span
        class="w-full block mb-2 h-[4px] relative top-[-4px] bg-pink-300 transition-transform ease-in-out"
        style={{ width: `${indicatorWidth()}px`, transform: `translateX(${moveLeft()}px)` }}
      ></span>
      <article>
        {$chosenInstallMethod().npm && props.npm}
        {$chosenInstallMethod().pnpm && props.pnpm}
        {$chosenInstallMethod().yarn && props.yarn}
      </article>
    </div>
  );
}
