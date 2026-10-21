'use client';

import { useEffect } from 'react';

// Ad unit slot IDs from Google AdSense.
// Replace each value with the real slot ID from your AdSense dashboard.
// https://adSense.google.com -> Ads -> Ad units
export const AD_SLOTS = {
  HEADER_TOP: 'REPLACE_HEADER_TOP_SLOT_ID',
  HOME_TOP_LEADERBOARD: 'REPLACE_HOME_TOP_LEADERBOARD_SLOT_ID',
  HOME_SIDEBAR_SQUARE: 'REPLACE_HOME_SIDEBAR_SQUARE_SLOT_ID',
  ARTICLE_BOTTOM_LEADERBOARD: 'REPLACE_ARTICLE_BOTTOM_LEADERBOARD_SLOT_ID',
} as const;

type AdProps = {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
};

/**
 * Responsive Google AdSense ad unit.
 *
 * The adsbygoogle library is loaded once in the root layout.
 * Each unit is an <ins> with data-ad-client + data-ad-slot.
 */
export default function Ad({ slot, style, className }: AdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      // @ts-ignore
      (window as any).adsbygoogle.push({});
    } catch (e) {
      // Ad blocker or script not loaded — fail silently.
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className || ''}`}
      data-ad-client="ca-pub-2702404301354316"
      data-ad-slot={slot}
      data-ad-format="auto"
      style={{ display: 'inline-block', ...style }}
    />
  );
}