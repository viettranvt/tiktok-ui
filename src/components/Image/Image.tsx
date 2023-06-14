import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fallback?: string;
}

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.defaultImage,
      ...props
    }: Props,
    ref: React.LegacyRef<HTMLImageElement>,
  ) => {
    const [fallback, setFallback] = useState<string>('');
    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        className={clsx(styles.wrapper, className)}
        {...props}
        onError={handleError}
      ></img>
    );
  },
);

export default Image;
