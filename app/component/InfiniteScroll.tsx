import React, { useState, useRef, useCallback } from "react";

interface InfiniteScrollProps {
  next: () => Promise<void>;
  hasMore: boolean;
  loader: React.ReactNode;
  endMessage: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  dataLength: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  className = "",
  next,
  hasMore,
  loader,
  endMessage,
  children,
  dataLength,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (dataLength == 0) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setIsLoading(true);
          next().finally(() => setIsLoading(false));
        }
      });
      if (node) observer.current.observe(node);
    },
    [dataLength]
  );

  return (
    <div className={className}>
      {children}
      <div ref={lastElementRef}></div>
      {hasMore && loader}
      {!hasMore && endMessage}
    </div>
  );
};

export default InfiniteScroll;
