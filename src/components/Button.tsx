import React from 'react';
import { MouseEventHandler, StringIndexable } from '../types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  content,
  variant,
  color,
  size,
  rounded,
  raised,
  icon,
  iconRight,
  onClick,
  disabled,
  waiting,
  children,
  style,
  classes,
}) => {
  variant = variant || 'text';
  color = color || 'primary';
  size = size || 'md';
  disabled = disabled || false;
  waiting = waiting || false;
  style = style || {};

  const inactive = disabled || waiting || false;

  let len = 0;
  let btnStyle = '';

  let iconElement;
  if (typeof icon === 'function') {
    const props: any = { icon };
    iconElement = <props.icon />;
  } else {
    iconElement = icon;
  }

  let contentElement;
  if (content !== null && content !== '') {
    contentElement = content || children || null;
  } else {
    contentElement = null;
  }

  const iconButton = iconElement && !contentElement;

  if (size === 'xs' || size === 'sm') {
    len = 1;
  } else if (size === 'md') {
    len = 1.5;
  } else if (size === 'lg' || size === 'xl') {
    len = 2;
  }

  let textColor = `${color}-text`;
  const borderColor = `${color}-border`;

  let bgColor = 'bg-transparent';
  if (!inactive) {
    bgColor += ` ${color}-hover-dim`;
  }

  // text-xs text-sm text-base text-lg text-xl
  const textSize = `text-${size === 'md' ? 'base' : size}`;

  // rounded rounded-md rounded-lg rounded-xl rounded-2xl rounded-full
  let roundedCorners = 'rounded';
  if (rounded === 'md') {
    roundedCorners = 'rounded-md';
  } else if (rounded === 'lg') {
    roundedCorners = 'rounded-lg';
  } else if (rounded === 'xl') {
    roundedCorners = 'rounded-xl';
  } else if (rounded === '2xl') {
    roundedCorners = 'rounded-2xl';
  } else if (rounded === 'full') {
    roundedCorners = 'rounded-full';
  } else if (rounded === 'none') {
    roundedCorners = '';
  }

  if (iconButton && !rounded) {
    roundedCorners = 'rounded-full';
  }

  // drop-shadow drop-shadow-md drop-shadow-lg drop-shadow-xl drop-shadow-2xl
  let dropShadow = 'drop-shadow';
  if (raised === 'md') {
    dropShadow = 'drop-shadow-md';
  } else if (raised === 'lg') {
    dropShadow = 'drop-shadow-lg';
  } else if (raised === 'xl') {
    dropShadow = 'drop-shadow-xl';
  } else if (raised === '2xl') {
    dropShadow = 'drop-shadow-2xl';
  } else if (raised === 'none') {
    dropShadow = '';
  }

  if ((variant === 'text' || variant === 'outlined') && !raised) {
    dropShadow = '';
  }

  // py-1 py-1.5 py-2
  // py-2 py-3 py-4
  // px-2 px-3 px-4
  let padding = `px-${2 * len}`;
  if (iconButton) {
    padding += ` py-${2 * len}`;
  } else {
    padding += ` py-${len}`;
  }

  // w-1.5 w-2 w-2.5
  const iconGap = `w-${len + 0.5}`;

  if (variant === 'solid') {
    btnStyle = `border ${borderColor}`;
    textColor = 'contrast-light';

    bgColor = `${color}-bg`;
    if (!inactive) {
      bgColor += ` ${color}-hover`;
    }

    if (color === 'light') {
      textColor = 'contrast-dark';
    }
  } else if (variant === 'outlined') {
    btnStyle = `border ${borderColor}`;
  } else if (variant === 'text') {
    btnStyle = '';
  }

  if (disabled) {
    bgColor += ` opacity-50 cursor-not-allowed`;
  } else if (waiting) {
    bgColor += ` cursor-progress`;
  }

  const flexDirn = iconRight ? 'flex-row-reverse' : 'flex-row';
  const transition = `transition transition-duration`;

  let className = `font-bold ${transition} ${roundedCorners} ${dropShadow}`;
  className += ` ${btnStyle} ${textColor} ${bgColor} ${textSize} ${padding}`;

  let onClickHandler: MouseEventHandler<HTMLButtonElement> = () => {};
  if (!inactive && onClick) {
    onClickHandler = onClick;
  }

  const rootClasses = classes?.root || '';
  const contentClasses = classes?.content || '';
  const iconClasses = classes?.icon || '';

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`${className} flex ${flexDirn} items-stretch h-fit ${rootClasses}`}
      style={style}
    >
      {iconElement && (
        <>
          <div className={`flex flex-col justify-center ${styles.text130} ${iconClasses}`}>
            <div>{iconElement}</div>
          </div>
          {contentElement && <div className={`${iconGap}`}>&nbsp;</div>}
        </>
      )}
      {contentElement && <div className={` ${contentClasses}`}>{contentElement}</div>}
    </button>
  );
};

export default Button;

export interface ButtonProps {
  content?: JSX.Element | string | null;
  variant?: 'text' | 'outlined' | 'solid';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warn' | 'info' | 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  raised?: 'md' | 'lg' | 'xl' | '2xl' | 'none';
  icon?: JSX.Element | React.ComponentType;
  iconRight?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  waiting?: boolean;
  style?: StringIndexable;
  classes?: {
    root?: string;
    content?: string;
    icon?: string;
  };
}
