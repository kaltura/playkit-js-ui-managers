import { h, Fragment, VNode } from 'preact';
import { useState, useRef, useLayoutEffect } from 'preact/hooks';
import * as styles from './dropdown-bar-item.scss';
import { ui } from '@playkit-js/kaltura-player-js';
import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';
import { SvgIcon } from '../../models/svg-icon';
const { Icon, Tooltip } = ui.Components;

type DropdownBarItemProps = {
  displayName: string;
  text: string;
  icon: SvgIcon;
  onClick: (e: KeyboardEvent | MouseEvent) => void;
  onDropdownClick: () => void;
  tooltipPosition: string;
};

const PADDING = 11;

const DropdownBarItem = ({ displayName, text, icon, onClick, onDropdownClick, tooltipPosition }: DropdownBarItemProps) => {
  const comparisonTextRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const [showTooltip, setShowTooltip] = useState(false);
  const [isFinalized, setIsFinalized] = useState(false);

  useLayoutEffect(() => {
    if (!isFinalized && textRef?.current && comparisonTextRef?.current) {
      setIsFinalized(true);
      const textWidth = textRef?.current.getBoundingClientRect().width - PADDING;
      const comparisonTextWidth = comparisonTextRef?.current.getBoundingClientRect().width;
      setShowTooltip(comparisonTextWidth > textWidth);
    }
  });

  const renderIcon = (): VNode => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <Icon type={icon.type} id={displayName} path={icon.path} viewBox={icon.viewBox || '0 0 32 32'} />;
  };

  const textElement = (
    <span className={[styles.dropdownItemDescription, showTooltip ? styles.trimText : ''].join(' ')} ref={textRef}>
      {text}
    </span>
  );
  const comparisonTextElement = (
    <span ref={comparisonTextRef} className={styles.comparisonText}>
      {text}
    </span>
  );
  const content = !isFinalized ? (
    <>
      {textElement}
      {comparisonTextElement}
    </>
  ) : (
    textElement
  );

  const renderContent = (): VNode => {
    return (
      <A11yWrapper
        onClick={(e): void => {
          onClick(e);
          onDropdownClick();
        }}
        role="menuitem"
      >
        <div className={styles.dropdownItem} tabIndex={0} aria-label={text}>
          <div className={styles.icon}>{renderIcon()}</div>
          {content}
        </div>
      </A11yWrapper>
    );
  };
  return (
    <Fragment>
      {showTooltip ? (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Tooltip label={text} type={tooltipPosition}>
          {renderContent()}
        </Tooltip>
      ) : (
        renderContent()
      )}
    </Fragment>
  );
};

export { DropdownBarItem };
